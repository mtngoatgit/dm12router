import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render(){
    return(
      <div>
        <h1>My Name is: Saturn</h1>
        <img src={`http://kids.nationalgeographic.com/content/dam/kids/photos/articles/Space/Q-Z/saturn.jpg.adapt.945.1.jpg`} />
        <div>
          <Link to="/">
            <h3> Back to Landing Page </h3>
          </Link>
        </div>
      </div>
    )
  }
})
