import './App.css'
import './index.css'
import UnescoCard from './components/unesco_card'
import UnescoObject from './components/unesco_object'
import Map from './components/map'
import 'mapbox-gl/dist/mapbox-gl.css'


function App() {
  return (

    <div className="App">
      <div style={{display: 'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr'}}>
        <Map />
        {UnescoObject.map((site) =>
          <UnescoCard key={site.id} site={site} />
        )}

      </div>
    </div>
  );
}

export default App;
