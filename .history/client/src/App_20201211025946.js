import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavbar from './components/AppNavbar';
import AppCards from './components/AppCards';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <AppCards />
    </div>
  );
}

export default App;
