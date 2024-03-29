import React from 'react';
import Provider from '../../components/context';
import Layout from '../../components/layout';
import Header from '../../components/header';
import Banner from '../../components/banner';
import Hero from '../../components/hero';
import Menu from '../../components/menu';
import ProductList from '../../components/productList';

const ProductListPage = ({ initialState }) => {
  const { components, layout, deviceType, styles } = initialState;

  const isDesktop = deviceType === 'desktop';
  const availableLayout = isDesktop ? layout.desktop : layout.mobile;

  const value = {
    deviceType,
    prefix: styles,
  };

  const availableComponents = {
    header: Header,
    banner: Banner,
    hero: Hero,
    menu: Menu,
    productList: ProductList,
  };

  return (
    <>
      <Provider value={value}>
        <Layout
          layout={availableLayout}
          availableComponents={availableComponents}
          components={components}
          style={styles}
        ></Layout>
      </Provider>
    </>
  );
};

export default ProductListPage;
