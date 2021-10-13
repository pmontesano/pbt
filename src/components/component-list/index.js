import React from 'react';
import Grid from '../grid';
import { getComponentsByType, getComponentsById } from '../../utils/utils';
import classNames from 'classnames';

const namespace = 'pbt';

const ComponentList = ({ components, children, modifier }) => {
  const availableComponents = {
    components: getComponentsByType(components),
  };

  console.log('availableComponents-->', availableComponents);

  return (
    <div>
      {components.map((component, i) => {
        const Component = 'Header';

        //getComponentsById(component);

        return (
          <Component
            component_id={component.id}
            {...component}
            key={component.id}
          >
            pablito
          </Component>
        );
      })}
    </div>
  );
};

export default ComponentList;
