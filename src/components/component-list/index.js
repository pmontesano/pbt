import React from 'react';
import { getComponentsByType, getComponentsById } from '../../utils/utils';

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

        console.log('componentType', componentType);

        const Component = 'Header';

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
