import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/scss/styles.scss';

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dash' component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
