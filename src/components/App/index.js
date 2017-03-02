import React  from 'react';
import {browserHistory, hashHistory, Router, Route, IndexRoute} from 'react-router';
import Container from '../Container';
import About from '../About';
import NotFound from '../NotFound';
import Home from '../Home';
import Address from '../Address';
import Facebook from '../Facebook';
import Twitter from '../Twitter';

class App extends React.Component {
  render() {
    return (
       <Router history={browserHistory}>
          <Route path="/" component={Container}>
            <IndexRoute component={Home} />
            <Route path='address' component={Address}>
              <IndexRoute component={Twitter} />
              <Route path="facebook" component={Facebook} />
            </Route>
            <Route path='about' component={About} />
            <Route path="*" component={NotFound} />
          </Route>
      </Router>
    );
  }
}

export default App;