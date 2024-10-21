import React from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map from './map';
import UnescoObject from './unesco_object';

function Marker() {
  return (
    UnescoObject.map((site) => {
    const marker = new mapboxgl.Marker()
      .setLngLat([site.longitude, site.latitude])
      .addTo(Map)
  }))
};


export default Marker;
