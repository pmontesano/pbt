import React from 'react';
import Grid from '../grid';

const Layout = ({ layout, children, component }) => {
  const { rows } = layout;

  return (
    <Grid.Container>
      {rows.map((row, i) => (
        <Grid.Row key={i}>
          {row.map((col) => (
            <Grid.Col size={col.columns} key={col.component}>
              component-- {col.component}
              {children}
            </Grid.Col>
          ))}
        </Grid.Row>
      ))}
    </Grid.Container>
  );
};

export default Layout;
