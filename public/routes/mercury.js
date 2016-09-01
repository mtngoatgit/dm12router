import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render(){
    return(
      <div>
        <h1>My Name is: Mercury</h1>
        <img src={`http://i.dailymail.co.uk/i/pix/2013/02/15/article-2279059-17997B92000005DC-373_634x519.jpg`} />
        <div>
          <Link to="/"><h3> Back to Landing Page </h3></Link>
        </div>
      </div>
    )
  }
})
