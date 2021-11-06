import React, { useContext } from 'react';
import { AppContext } from '../context';
import Image from '../image';

const Banner = ({ banner: { image } }) => {
  const contextProps = useContext(AppContext);
  const { prefix } = contextProps;
  const namespace = `${prefix}-banner`;

  const { src, alt } = image;

  return (
    <div className={namespace}>
      <Image className={`${namespace}__image`} src={src} alt={alt} />
    </div>
  );
};

export default Banner;
