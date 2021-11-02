import LeadEventPopup from './LeadEventPopup';
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
        {/* <Switch> */}
          <Route exact path="/" component={Home} />
          <Route path="/account" component={Account} />
          {/* <Route component={Error} /> */}
        {/* </Switch> */}
      <Footer />
    </div>
  );
}

export default App;
