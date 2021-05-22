import { Route } from 'react-router-dom';

// Route-based code splitting
import Home from './pages/home';
import Farms from './pages/farms';

function App() {
  return (
    <>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/farms'>
        <Farms />
      </Route>
    </>
  );
}

export default App;
