import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import Homepage from './components/Homepage';

const initStyles = makeStyles(theme => ({
  appContainer: {
    border: '1px solid black'
  }
}));

const App = () => {
  const classes = initStyles();
  const { appContainer } = classes;

  return (
    <Container className={appContainer} maxWidth="md">
      <Homepage />
    </Container>
  );
}

export default App;
