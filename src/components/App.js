import Header from './Header';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import Home from './home/Home';
import Account from './account/Account';
import Error from './Error';

function App() {
  return (
    <div className="page">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/account" component={Account} />
          <Route exact path="/" component={Home} />
          <Route component={Error} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
