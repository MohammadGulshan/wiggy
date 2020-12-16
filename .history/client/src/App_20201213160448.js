import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import AppNavbar from './components/AppNavbar';
import AppCards from './components/AppCards';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavbar />
      <AppCards />
    </div>
    </Provider>
  );
}

export default App;
