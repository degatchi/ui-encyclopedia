import { lazy } from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import history from './routerHistory';
import Navbar from './components/Menu/index';

// Route-based code splitting
const Home = lazy(() => import('./pages/Home'))
const Bakery = lazy(() => import('./pages/Bakery'))
const Refinery = lazy(() => import('./pages/Refinery'))
const Team = lazy(() => import('./pages/Team'))

function App() {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/bakery' component={Bakery} />
        <Route path='/refinery' component={Refinery} />
        <Route path='/team' component={Team} />
        <Route path='*' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
