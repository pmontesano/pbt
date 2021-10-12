import React from 'react';
import Layout from '../../components/layout';
import ComponentList from '../../components/component-list';

const ProductListPage = ({ initialState }) => {
  const { components, layout, deviceType } = initialState;

  const isDesktop = deviceType === 'desktop';
  const availableLayout = isDesktop ? layout.desktop : layout.mobile;

  return (
    <div>
      <Layout layout={availableLayout}>
        <ComponentList
          availableComponents={'header'}
          components={components}
        ></ComponentList>
      </Layout>
    </div>
  );
};

export default ProductListPage;
