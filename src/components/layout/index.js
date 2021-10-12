import React from 'react';
import Grid from '../grid';

const Layout = ({ layout, children }) => {
  console.log('layout-->', layout);

  const { rows } = layout;

  rows.map((row) => {
    row.map((item) => console.log('row item', item));
  });

  return (
    <div>
      {rows.map((row) => (
        <Grid.Row>
          {row.map((col) => (
            <Grid.Col size={col.columns} key={col.component}>
              component-- {col.component}
              {children}
            </Grid.Col>
          ))}
        </Grid.Row>
      ))}
    </div>
  );
};

export default Layout;
