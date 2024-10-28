import './App.css'
import './index.css'
import React from 'react'
import UnescoCard from './components/unesco_card'
import UnescoMiniCard from './components/unesco_mini_card'
import UnescoObject from './components/unesco_object'
import Map from './components/map'
import UseWikipedia from './components/wikipedia_api'
import 'mapbox-gl/dist/mapbox-gl.css'


function App() {
  const [addMarker, setAddMarker ] = React.useState(() => () => {});
  const [ zoomTo, setZoomTo ] = React.useState(() => () => {});
  return (
    <div className="App">

      <div className='map-container col-8'>
      <Map setAddMarker={setAddMarker} setZoomTo={setZoomTo} />
      </div>
      <div className="flex-row flex-nowrap overflow-auto col-4">
        {UnescoObject.map((site) =>
          <UnescoCard key={site.id} site={site} addMarker={addMarker} zoomTo={zoomTo} />
        )}

      </div>
    </div>
  );
}

export default App;
