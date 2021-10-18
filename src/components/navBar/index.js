import React from 'react';
import NavBarMobile from './navBar.mobile';
import navBarDesktop from './navBar.desktop';

const NavBar = ({ links, className, prefix, deviceType }) => {
  const props = { links, className, prefix, deviceType };

  console.log('deviceType', deviceType);

  const Component = deviceType === 'desktop' ? navBarDesktop : NavBarMobile;

  const namespace = `${prefix}-nav-bar`;

  return <Component {...props} />;
};

export default NavBar;
