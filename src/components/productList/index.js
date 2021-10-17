import React from 'react';
import Item from '../item';

const ProductList = ({ productList: { products }, prefix }) => {
  const namespace = `${prefix}-product-list`;

  return (
    <div className={`${namespace}__container`}>
      <ul className={namespace}>
        {products.map((item, i) => (
          <li key={i} className={`${namespace}__item`}>
            <Item {...item} prefix={prefix} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
