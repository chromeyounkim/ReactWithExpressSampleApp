import {Link} from 'react-router';
import React from 'react';

class Address extends React.Component {
  render() {
    return (
      <div>
        <h1>Address: We are located in Santa Clara, CA, U.S.</h1>
        <br />
        <Link to='/address' activeStyle={{color:'red'}} >Twitter Feed</Link>&nbsp;
        <Link to='/address/facebook' activeStyle={{color:'red'}} >Facebook Feed</Link>
        {this.props.children}
      </div>
    );
  }
}

export default Address;