import React, { useContext } from 'react';
import { AppContext } from '../context';
import Item from '../item';

const ProductList = ({ productList: { products } }) => {
  const contextProps = useContext(AppContext);
  const { prefix } = contextProps;
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
