import '../index.css'
import React, { useRef, useEffect } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
import UnescoObject from './unesco_object'
import '../App.css'



const Map = () => {
  const mapRef = useRef()
  const mapContainerRef = useRef()
  const apiKey = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
  useEffect(() => {
    mapboxgl.accessToken = apiKey
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [138.2529, 39.5 ],
      zoom: 5,
    });

    UnescoObject.map((site) => {
      const marker = new mapboxgl.Marker()
      .setLngLat([site.longitude, site.latitude])
      .addTo(mapRef.current);
    });

    return () => {
      mapRef.current.remove()
    }
  }, [apiKey]);
  return (
    <div id='map-container' ref={mapContainerRef}/>
  )
}

export default Map;
