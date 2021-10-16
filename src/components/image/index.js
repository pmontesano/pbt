import React from 'react';
const classnames = require('classnames');

const namespace = 'pbt-image';

const Image = ({ alt, src, src2x, className }) => {
  return (
    <>
      <img
        alt={alt}
        className={classnames(namespace, className)}
        src={src}
        srcSet={src2x ? `${src2x} 2x` : null}
      />
    </>
  );
};

export default Image;
