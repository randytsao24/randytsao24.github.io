import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

import Header from './Header';
import Personal from './Personal';

// import '../styles/Homepage.css';
const initStyles = makeStyles(theme => ({
  homepageBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

const Homepage = () => {
  const classes = initStyles();
  const { homepageBox } = classes;

  useEffect(() => {
    console.log('Homepage loaded!');
  }, []);

  return (
    <Box className={homepageBox} component="div">
      <Header />
      <Personal />
    </Box>
  );
}

export default Homepage;
