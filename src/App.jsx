import NavbarComponent from "./components/navbar";
import Panton3DModel from "./components/pantone";
import "./App.css";
import VernerVentoGrid from "./components/VernerVentoGrid";
import PantonAppreciationGrid from "./components/vernerpantone";
function App() {
  return (
    <>
      <NavbarComponent />
      <Panton3DModel />
      <VernerVentoGrid />
      <PantonAppreciationGrid />
    </>
  );
}

export default App;
