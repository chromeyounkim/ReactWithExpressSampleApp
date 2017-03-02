import React from 'react';
import {Link} from 'react-router';
const Nav = () => (
  <div>
    <Link activeStyle={{color:'#53acff'}} to='/'>Home</Link>&nbsp;
    <Link activeStyle={{color:'#53acff'}} to='/address'>Address</Link>&nbsp;
    <Link activeStyle={{color:'#53acff'}} to='/about'>About</Link>
  </div>
)

export default Nav;