import React, { useContext } from 'react';
import { AppContext } from '../context';
import Image from '../image';

const Hero = ({ hero: { image, link } }) => {
  const contextProps = useContext(AppContext);
  const { prefix } = contextProps;
  const namespace = `${prefix}-hero`;

  const { src, alt } = image;
  const { href } = link;

  return (
    <div className={namespace}>
      <a href={href} className={`${namespace}__link`}>
        <Image className={`${namespace}__image`} src={src} alt={alt} />
      </a>
    </div>
  );
};

export default Hero;
