
import './App.css';
import Routing from './Components/Routing';
import BodyServices from './main/BodyServices';
import VisionMission from './Components/VisionMission';
import Footer from './Components/Footer';
// import BodyServices from './main/BodyServices';

function App() {
  document.body.style.background = "#dae4f8";
  return (
    <div>
      <Routing />
      <VisionMission />
      <Footer />
    </div>
  );
}

export default App;
