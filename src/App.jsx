// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Hero from './components/Hero';
import Foot from './components/Foot';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div className='app'>
      <Hero />
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <Foot />
    </div>
  );
}

export default App;
