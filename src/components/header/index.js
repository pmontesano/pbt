import React from 'react';
import Grid from '../grid';
import Image from '../image';
import NavBar from '../navBar';

const namespace = 'pbt-header';

const Header = ({ header: { logo, links } }) => {
  return (
    <div className={namespace}>
      <h1 className={`${namespace}__logo`}>
        <Image src={logo.href} alt="pbt-logo" />
      </h1>
      <NavBar links={links} />
    </div>
  );
};

export default Header;
