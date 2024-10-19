import '../index.css'
import React, { useRef, useEffect, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
import UnescoObject from './unesco_object'
import Image from 'react-bootstrap/Image'
import UnescoCard from './unesco_card'
import '../App.css'



const Map = ({setAddMarker}) => {
  const mapRef = useRef()
  const mapContainerRef = useRef()
  const [markers, setMarkers] = useState([])
  const apiKey = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
  useEffect(() => {
    mapboxgl.accessToken = apiKey
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [138.2529, 39.5 ],
      zoom: 5,
    });

    const initialMarkers = UnescoObject.map((site) => {
      const marker = new mapboxgl.Marker()
      .setLngLat([site.longitude, site.latitude])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
      .setHTML(`
        <div>
        <img src=${site.img} style="width: 100%; height: auto;" alt="${site.name}" />
        <h3>${site.name}</h3>
        <p>${site.prefecture}</p>
        </div>
      `)

      )
      .addTo(mapRef.current);
      return marker;
    });

    setMarkers(initialMarkers);

    setAddMarker(() => (site)  => {
      markers.forEach(marker => marker.remove());
      setMarkers([]);
      const marker = new mapboxgl.Marker()
      .setLngLat([site.longitude, site.latitude])
      .addTo(mapRef.current);

      setMarkers([marker])
      mapRef.current.flyTo({
        center: [site.longitude, site.latitude],
        zoom: 8,
        speed: 1.2,
        curve: 1,
        essential: true,
      })
    })

    return () => {
      mapRef.current.remove()
    }
  }, [apiKey, setAddMarker]);

  return (
    <div id='map-container' ref={mapContainerRef}/>
  )
}

export default Map;
