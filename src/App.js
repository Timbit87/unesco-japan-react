import './App.css'
import './index.css'
import UnescoCard from './components/unesco_card'
import Map from './components/map'
import 'mapbox-gl/dist/mapbox-gl.css'


function App() {
  return (

    <div className="App">
      <div style={{display: 'grid', gridTemplateColumns:'1fr 1fr'}}>
        <Map />
        < UnescoCard/>
      </div>
    </div>
  );
}

export default App;
