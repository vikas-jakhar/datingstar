import './App.css';
import Analytics from './components/home/Analytics';
import Meet from './components/home/Meet';
import Work from './components/home/Work';
import Clients from './components/home/Clients';

function App() {
  return (
    <div className="bg-black relative overflow-hidden max-w-[1920px]">
      <Analytics />
      <Meet />
      <Work />
      <Clients />
    </div>
  );
}

export default App;
