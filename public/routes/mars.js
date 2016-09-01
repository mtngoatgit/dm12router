import React from 'react';
import {Link} from 'react-router';
import Welcome from './welcome.js';

export default React.createClass({
  render(){
    return(
      <div>
        <h1>My Name is: Mars</h1>
        <img src={`http://www.space.com/images/i/000/055/461/original/Mars_extended_stay.jpg`} />
        <div>
          <Link to="/">
            <h3> Back to Landing Page </h3>
          </Link>
        </div>
      </div>
    )
  }
})
