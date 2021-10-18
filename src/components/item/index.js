import React from 'react';
import Card from '../card';
import Image from '../image';

const Item = ({ image, title, description, href, prefix }) => {
  const namespace = `${prefix}-item`;

  return (
    <div className={namespace}>
      <Card className={`${namespace}__card`}>
        <a href={href} className={`${namespace}__link`}>
          <div className={`${namespace}__image-container`}>
            <Image
              className={`${namespace}__image`}
              src={image.href}
              alt={image.alt}
            />
          </div>

          <h2 className={`${namespace}__title`}>{title}</h2>
          <p className={`${namespace}__description`}>{description}</p>
        </a>
      </Card>
    </div>
  );
};

export default Item;
