import { Router, Route, Switch } from 'react-router-dom';

// Route-based code splitting
import Home from './pages/home';
import Bakery from './pages/bakery';
import history from './routerHistory';
import Navbar from './components/Menu/index';

function App() {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/bakery' component={Bakery}></Route>
      </Switch>
    </Router>
  );
}

export default App;
