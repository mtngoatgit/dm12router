import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render(){
    return(
      <div>
        <h1>My Name is: Earth</h1>
        <img src={`http://cdn.images.express.co.uk/img/dynamic/151/590x/Dome-Main-629355.jpg`} />
        <div>
          <Link to="/" component={Welcome}>
            <h3> Back to Landing Page </h3>
          </Link>
        </div>
      </div>
    )
  }
})
