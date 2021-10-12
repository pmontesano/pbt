import React from 'react';
import Grid from '../grid';
import { getComponentsByType } from '../../utils/utils';
import classNames from 'classnames';

const namespace = 'pbt';

const ComponentList = ({ components, children, modifier }) => {
  let availableComponents = {
    component: getComponentsByType(components),
  };

  return (
    <div>
      {components.map((component, i) => {
        const Component = availableComponents[component.type];

        return (
          <Grid.Row
            key={component.id}
            className={classNames({
              [`${namespace}__${component.type}`]: modifier,
            })}
          >
            <Component component_id={component.id} {...component} />
          </Grid.Row>
        );
      })}
    </div>
  );
};

export default ComponentList;
