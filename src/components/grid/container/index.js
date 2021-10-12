import React from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';

const namespace = 'pbt-container';

const Container = ({ children, className }) => (
  <div className={classNames(namespace, className)}>{children}</div>
);

Container.propTypes = {
  children: node.isRequired,
  className: string,
};

Container.defaultProps = {
  className: null,
};

export default Container;
