import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render(){
    return(
      <div>
        <h1>Landing Page</h1>
          <Link to="/venus">
            <h3> Venus </h3>
          </Link>
          <Link to="/mars">
            <h3> Mars </h3>
          </Link>
          <Link to="/earth">
            <h3> Earth </h3>
          </Link>
          <Link to="/jupiter">
            <h3>Jupter</h3>
          </Link>
          <Link to="/saturn">
            <h3> Saturn</h3>
          </Link>
          <Link to="/mercury">
            <h3> Mercury </h3>
          </Link>
          <Link to="/uranus">
            <h3> Uranus</h3>
          </Link>
      </div>
    )
  }
})
