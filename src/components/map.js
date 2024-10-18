import '../index.css'
import React, { useRef, useEffect, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
import UnescoObject from './unesco_object'
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
      .addTo(mapRef.current);
      return marker;
    });

    setMarkers(initialMarkers);

    return () => {
      mapRef.current.remove()
    }
  }, [apiKey]);

  function addMarker(site)  {
    markers.forEach(marker => marker.remove());
    setMarkers([]);

    mapRef.current.setCenter([site.longitude, site.latitude])
    mapRef.current.setZoom(10)
  }
  return (
    <div id='map-container' ref={mapContainerRef}/>
  )
}

export default Map;
