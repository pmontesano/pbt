import React from 'react';
import { getComponentsByType, getComponentsById } from '../../utils/utils';
import Header from '../header';
import Banner from '../banner';
import Hero from '../hero';
import Menu from '../menu';
import ProductList from '../productList';

const namespace = 'pbt';

const ComponentList = ({ components, children, modifier }) => {
  const availableComponents = {
    components: getComponentsByType(components),
  };

  return (
    <div>
      {components.map((component, i) => {
        const componentType = getComponentsById(
          availableComponents.components,
          component.id
        );

        const Component = (props) => <Header {...props} />;

        return (
          <Component {...component} key={component.id}>
            Aca dentro va el componente
          </Component>
        );
      })}
    </div>
  );
};

export default ComponentList;
