
import './App.css';
// import Banner from './Components/Banner';
import Home from './Components/pages/Home';
import Routing from './Components/Routing';
// import Cards from './main/Cards';

function App() {
  document.body.style.background = "#dae4f8";
  return (
    <div className='container'>
      {/* <Home />       */}
      <Routing />
    </div>
  );
}

export default App;
