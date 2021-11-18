import Header from './Header';
import Footer from './Footer';
import Home from './home/Home';
import {Switch, Route} from 'react-router-dom';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div className="page">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
