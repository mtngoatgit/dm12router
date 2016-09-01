import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link} from 'react-router';
import Mercury from './routes/mercury.js';
import Venus from './routes/venus.js';
import Earth from './routes/earth.js';
import Mars from './routes/mars.js';
import Saturn from './routes/saturn.js';
import Uranus from './routes/uranus.js';
import Jupiter from './routes/jupiter.js';
import Welcome from './routes/welcome.js';


var App = React.createClass({
  render(){
      return(
          <Router>
              <Route path="/" component={Welcome}/>
              <Route path="/mercury" component={Mercury}/>
              <Route path="/venus" component={Venus}/>
              <Route path="/earth" component={Earth}/>
              <Route path="/mars" component={Mars}/>
              <Route path="/saturn" component={Saturn}/>
              <Route path="/uranus" component={Uranus}/>
              <Route path="/jupiter" component={Jupiter}>
                
              </Route>
          </Router>
      )
  },
})

ReactDOM.render(<App />, document.getElementById('app'));
