import React from 'react';
import { getComponentsByType, getComponentsById } from '../../utils/utils';

const namespace = 'pbt';

const ComponentList = ({
  availableComponents,
  components,
  componentId,
  modifier,
}) => {
  const componentsListObj = {
    componentsList: getComponentsByType(components),
  };

  const { componentsList } = componentsListObj;

  return (
    <div>
      {componentsList.map((component, i) => {
        let Component;

        if (component.id === componentId) {
          Component = availableComponents[component.type];

          return <Component {...component} key={component.id} />;
        }
      })}
    </div>
  );
};

export default ComponentList;
