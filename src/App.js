import { useEffect } from 'react';
import Analytics from './components/home/Analytics';
import Meet from './components/home/Meet';
import Work from './components/home/Work';
import Clients from './components/home/Clients';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="relative overflow-hidden bg-section-layer mx-auto bg-cover bg-no-repeat max-w-[1920px]">
      <Analytics />
      <Meet />
      <Work />
      <Clients />
    </div>
  );
}

export default App;
