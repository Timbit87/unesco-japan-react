import '../index.css'
import React, { useRef, useEffect, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
import UnescoObject from './unesco_object'
import UnescoCard from './unesco_card'
import Expand from './expand'
import '../App.css'



const Map = ({setZoomTo, setExpand}) => {
  const mapRef = useRef()
  const mapContainerRef = useRef()
  const [markers, setMarkers] = useState([])
  const apiKey = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  const features = UnescoObject.flatMap((site) => {
    const mainFeature ={
      type: 'Feature',
      properties: {
        title: site.name,
        description: site.shortDescription,
        img: site.cardImg,
        prefecture: site.prefecture,
      },
      geometry: {
        type: 'Point',
        coordinates: [site.coordinates[0].longitude, site.coordinates[0].latitude]
      },
    };

    const coordinateFeatures = site.coordinates.map(coord => ({
      type: 'Feature',
      properties: {
        title: coord.title,
        description: site.shortDescription,
      },
      geometry: {
        type: 'Point',
        coordinates: [coord.longitude, coord.latitude]
      },
    }));
    return [mainFeature, ...coordinateFeatures];
  });

  const geojsonData = {
    type: 'FeatureCollection',
    features: features,
  };

  const zoomTo = (card)  => {
    markers.forEach(marker => marker.remove());
    setMarkers([]);

    const marker = new mapboxgl.Marker()
    .setLngLat([card.longitude, card.latitude])
    .addTo(mapRef.current);

    setMarkers([marker])
    mapRef.current.flyTo({
      center: [card.longitude, card.latitude],
      zoom: 14,
      speed: 1.2,
      curve: 1,
      essential: true,
    });
  };

  useEffect(() => {
    mapboxgl.accessToken = apiKey
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [136.90779722664405, 35.154237836483645 ],
      zoom: 4.5,
    });

    mapRef.current.on('load', () => {
      mapRef.current.addSource('mapbox-transit', {
        type: 'vector',
        url: 'mapbox://mapbox.transit-v2'
      });

      mapRef.current.addLayer({
        id: 'transit_line_line',
        source: 'mapbox-transit',
        'source-layer': 'transit_line',
        type: 'line',
        filter: ['==', '$type', 'LineString'],
        paint: {
          'line-width': 2,
          'line-color': 'rgba(66,100,251,0.3)'
        }
      })
      const initialMarkers = UnescoObject.flatMap(site =>
        site.coordinates.map(coord => {
        const marker = new mapboxgl.Marker()
        .setLngLat([coord.longitude, coord.latitude])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <div id='map-popup'>
          <img src=${coord.img} style="width: 100%; height: auto;" alt=${site.cardImg} />
          <h3>${coord.title}</h3>
          <p>${site.prefecture}</p>
          </div>
        `)
        )
      .addTo(mapRef.current);
      return marker;
      })
    );

    setMarkers(initialMarkers);

    setZoomTo(() => zoomTo );

    mapRef.current.addSource('unescoSites', {
      type: 'geojson',
      data: geojsonData
    });

    mapRef.current.addLayer({
      id: 'clusters',
      type: 'circle',
      source: 'unescoSites',
      filter: ['has', 'point_count'],
      paint: {
        'circle-color': [
          'step',
          ['get', 'point_count'],
          '#51bbd6',
          100,
          '#f1f075',
          750,
          '#f28cb1'
        ],
        'circle-radius': [
          'step',
          ['get', 'point_count'],
          20,
          100,
          30,
          750,
          40
        ],
      },
      });
    });

    return () => {
      mapRef.current.remove();
    };
  }, [apiKey, setZoomTo]);

  return (
    <div id='map-container' ref={mapContainerRef}>
      {UnescoObject.map((site) => (
        <UnescoCard key={site.id} site={site} zoomTo={zoomTo} />
    ))}
    </div>
  );
};

export default Map;
