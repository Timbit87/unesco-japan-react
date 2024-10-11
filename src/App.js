import './App.css'
import UnescoCard from './components/unesco_card'
import Map from './components/map'
import 'mapbox-gl/dist/mapbox-gl.css'

const API_KEY = process.env.REACT_APP_MAPBOX_API_KEY
console.log(API_KEY)


function App() {
  return (

    <div className="App">
      <div><Map /></div>
      <div>< UnescoCard/></div>
    </div>
  );
}

export default App;
