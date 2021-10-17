import React from 'react';
import Image from '../image';

const Hero = ({ hero: { image, link }, prefix }) => {
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
