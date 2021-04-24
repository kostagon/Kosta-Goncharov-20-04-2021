import NavBar from './cmps/NavBar';
import WeatherPage from './pages/WeatherPage';
import FavoritesPage from './pages/FavoritesPage';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function WeatherApp() {
  return (

    <Router>
      <div className="App">
        <NavBar />
        <section className="main-content">
          <Switch>
            <Route exact path="/">
              <WeatherPage />
            </Route>
            <Route path="/favorites">
              <FavoritesPage />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default WeatherApp;
