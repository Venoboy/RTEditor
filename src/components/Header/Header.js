import React from 'react';

import logo from '../../assets/pictures/logo.png';
import classes from './Header.module.scss';

const Header = () => (<div>
    <img src={logo} alt="logo" className={classes.logo} />
  </div>);

export default Header;
