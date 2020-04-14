import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const initStyles = makeStyles(theme => ({
  headerBar: {
    backgroundColor: '#b3e4df',
    borderBottom: '1px solid black',
    width: '100%'
  },
  headerText: {
    textDecoration: 'underline'
  }
}));

const Header = () => {
  const classes = initStyles();
  const { headerBar, headerText } = classes;

  return (
    <Toolbar className={headerBar}>
      <Typography className={headerText} variant="h6">
        Randy Tsao
      </Typography>
    </Toolbar>
  );
}

export default Header;
