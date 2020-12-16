import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import AppNavbar from './components/AppNavbar';
import AppCards from './components/AppCards';
import CreateCardModal from './components/modals/CreateCardModal';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <CreateCardModal />
        </Container>
        <AppCards />
      </div>
    </Provider>
  );
}

export default App;
