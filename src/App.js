import './App.css'
import './index.css'
import React from 'react'
import UnescoCard from './components/unesco_card'
import UnescoObject from './components/unesco_object'
import Map from './components/map'
import UseWikipedia from './components/wikipedia_api'
import 'mapbox-gl/dist/mapbox-gl.css'


function App() {
  const [addMarker, setAddMarker] = React.useState(() => () => {});
  return (
    <div className="App">

      <div className='map-container col-8'>
      <Map setAddMarker={setAddMarker} />
      </div>
      <div className="flex-row flex-nowrap overflow-auto col-4">
        {UnescoObject.map((site) =>
          <UnescoCard key={site.id} site={site} addMarker={addMarker}/>
        )}

      </div>
    </div>
  );
}

export default App;
