import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink> <br />
      <NavLink to="/useEffect">useEffecct</NavLink> <br />
      <NavLink to="/useReducer">useReducer</NavLink> <br />
      <NavLink to="/useEffect">useEffect</NavLink> <br />
      <NavLink to="/useRef">useRef</NavLink> <br />
      <NavLink to="/useLayoutEffect">useLayoutEffect</NavLink> <br />
      <NavLink to="/useImperativeHandle">useImperativeHandle</NavLink> <br />
    </nav>
  );
};

export default NavBar;
