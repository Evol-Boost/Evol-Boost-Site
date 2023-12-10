import "./App.css";

import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Section2 from "./Components/Section2";
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div className="App">
      <div className="bg img">
        <Spline scene="https://prod.spline.design/4nCmEMdREIceLR5o/scene.splinecode" />
      </div>
      <Header />
      <Home />
      <Section2 />
      <Contact />
    </div>
  );
}

export default App;
