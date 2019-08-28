import React from 'react';
import classNames from 'classnames';

/*
 * The Navbar component serves as a container element for the navbar's content
 */

const Navbar = ({ children, className, inverse = false }) => {
  const cN = classNames(
    'm-c-navbar',
    inverse && 'm-c-navbar--inverse',
    className
  );
  return <div className={cN}>{children}</div>;
};

export default Navbar;
