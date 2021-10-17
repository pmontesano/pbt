import React from 'react';
import Image from '../image';

const Banner = ({ banner: { image, link }, prefix }) => {
  const namespace = `${prefix}-banner`;

  const { src, alt } = image;

  return (
    <div className={namespace}>
      <Image className={`${namespace}__image`} src={src} alt={alt} />
    </div>
  );
};

export default Banner;
