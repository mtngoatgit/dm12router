import React from 'react';
import {Link} from 'react-router';
import Welcome from './welcome.js';

export default React.createClass({
  render(){
    return(
      <div>
        <h1>My Name is: Jupiter</h1>
        <img src={`https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg`} />
        <div>
          <Link to="/">
            <h3> Back to Landing Page </h3>
          </Link>
        </div>
      </div>
    )
  }
})
