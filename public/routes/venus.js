import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render(){
    return(
      <div>
        <h1>My Name is: Venus</h1>
        <img src={`http://www.space.com/images/i/000/000/124/original/071127-venus-surface-02.jpg`} />
        <div>
          <Link to="/" >
            <h3> Back to Landing Page </h3>
          </Link>
        </div>
      </div>
    )
  }
})
