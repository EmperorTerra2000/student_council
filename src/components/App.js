import Header from './Header';
import Footer from './Footer';
import Home from './home/Home';
import DigestPage from './digestPage/DigestPage';
import {Switch, Route} from 'react-router-dom';
import PageNotFound from './PageNotFound';
import React from 'react';

function App() {
  const [activeDigest, setActiveDigest] = React.useState({});
  const [listDigestData, setListDigestData] = React.useState([]);

  React.useEffect(() => {
    fetch('digest.php', {
      method: 'POST',
    })
      .then(res => res.json())
      .then(data => {
        setListDigestData(data);
        setActiveDigest(data[0]);
      })
  }, []);

  return (
    <div className="page">
      <Header />
      {/* <Home activeDigest={activeDigest} setActiveDigest={setActiveDigest}/>
      <DigestPage digest={activeDigest}/> */}
      <Switch>
        <Route exact path="/">
          <Home 
            activeDigest={activeDigest} 
            setActiveDigest={setActiveDigest}
            listDigestData={listDigestData}
            setListDigestData={setListDigestData}
          />
        </Route>
        <Route path="/digest/:id">
          <DigestPage digestList={listDigestData}/>
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
