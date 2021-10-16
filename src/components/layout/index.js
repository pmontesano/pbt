import React from 'react';
import Grid from '../grid';
import ComponentList from '../../components/component-list';

const Layout = ({ layout, availableComponents, components }) => {
  const { rows } = layout;

  return (
    <Grid.Container>
      {rows.map((row, i) => (
        <Grid.Row key={i}>
          {row.map((col) => (
            <Grid.Col size={col.columns} key={col.component}>
              Grid-{col.columns}
              <ComponentList
                availableComponents={availableComponents}
                components={components}
                componentId={col.component}
              />
            </Grid.Col>
          ))}
        </Grid.Row>
      ))}
    </Grid.Container>
  );
};

export default Layout;
