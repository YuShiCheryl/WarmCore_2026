import HomePage from './HomePage';
import TechnologyPage from './TechnologyPage';
import GMETPage from './GMETPage';
import './App.css';

function App() {
  const pathname = window.location.pathname;
  const isTechnology = pathname === '/technology';
  const isGMET = pathname === '/gmet-tech';

  return (
    <div className="app-container">
      {isGMET ? <GMETPage /> : isTechnology ? <TechnologyPage /> : <HomePage />}
    </div>
  );
}

export default App;
