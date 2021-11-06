import React, { useContext } from 'react';
import { AppContext } from '../context';
import NavBarMobile from './navBar.mobile';
import navBarDesktop from './navBar.desktop';

const NavBar = ({ links, className }) => {
  const contextProps = useContext(AppContext);
  const { deviceType, prefix } = contextProps;

  const props = { links, className, prefix };

  const Component = deviceType === 'desktop' ? navBarDesktop : NavBarMobile;

  return <Component {...props} />;
};

export default NavBar;
