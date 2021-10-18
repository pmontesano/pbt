import React from 'react';
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

  const availableComponents = {
    header: Header,
    banner: Banner,
    hero: Hero,
    menu: Menu,
    productList: ProductList,
  };

  return (
    <>
      <Layout
        layout={availableLayout}
        availableComponents={availableComponents}
        components={components}
        style={styles}
        deviceType={deviceType}
      ></Layout>
    </>
  );
};

export default ProductListPage;
