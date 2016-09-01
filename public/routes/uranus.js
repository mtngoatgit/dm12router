import React from 'react';
import {Link} from 'react-router';


export default React.createClass({
  render(){
    return(
      <div>
        <h1>My Name is: Uranus</h1>
        <img src={`http://www.factslides.com/imgs/uranus.jpg`} />
        <div>
          <Link to="/" component={Welcome}>
            <h3> Back to Landing Page </h3>
          </Link>
        </div>
      </div>
    )
  }
})
