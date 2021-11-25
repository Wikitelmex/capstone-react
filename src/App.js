import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './pages/HomePage';
import Regionpage from './pages/RegionPage';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Capstone Project React</h1>
        <h3>By Alex...</h3>
      </div>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/region/:regionId">
            <Regionpage />
          </Route>
          <Route path="/region">
            <p>You need to select a region</p>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
