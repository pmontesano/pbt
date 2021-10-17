import React from 'react';
import Image from '../image';
import NavBar from '../navBar';

const Header = ({ header: { logo, links }, prefix }) => {
  const namespace = `${prefix}-header`;

  return (
    <div className={namespace}>
      <h1 className={`${namespace}__logo`}>
        <Image src={logo.href} alt={`${prefix}-logo`} />
      </h1>
      <NavBar links={links} prefix={prefix} />
    </div>
  );
};

export default Header;
