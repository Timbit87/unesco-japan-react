import '../index.css'
import React, { useRef, useEffect } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
import '../App.css'



const Map = () => {
  const mapRef = useRef()
  const mapContainerRef = useRef()
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGltYml0ODciLCJhIjoiY20xazBuazFzMTk5OTJ2c2FoYjBhOWxjYSJ9.nMG02Ci2jFRPBGoSi9F-Sg'
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [138.2529, 39.5 ],
      zoom: 5,
    });

    return () => {
      mapRef.current.remove()
    }
  }, [])
  return (
    <div id='map-container' ref={mapContainerRef}/>
  )
}

export default Map;
