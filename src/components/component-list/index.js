import React from 'react';
import { getComponentsByType } from '../../utils/utils';

const ComponentList = ({ availableComponents, components, componentId }) => {
  const componentsListObj = {
    componentsList: getComponentsByType(components),
  };

  const { componentsList } = componentsListObj;

  return (
    <>
      {componentsList.map((component) => {
        let Component;

        if (component.id === componentId) {
          Component = availableComponents[component.type];

          return <Component {...component} key={component.id} />;
        }
      })}
    </>
  );
};

export default ComponentList;
