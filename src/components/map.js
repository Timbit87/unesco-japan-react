import '../index.css'
import { useRef, useEffect } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'

function Map() {
  const mapRef = useRef()
  const mapContainerRef = useRef()

  useEffect(() => {
    mapboxgl.accessToken =''
  })
  return (
    <div id='map-container' ref={mapContainerRef}/>
  )
}

export default Map
