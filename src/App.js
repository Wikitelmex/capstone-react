import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage';
import Regionpage from './pages/RegionPage';
import Worldpage from './pages/WorldPage';

function App() {
  return (
    <div data-testid="mainApp">
      <Router>
        <Switch>
          <Route exact path="/">
            <Worldpage />
          </Route>
          <Route exact path="/country/:countryId">
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
    </div>
  );
}

export default App;
