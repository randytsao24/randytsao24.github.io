import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const initStyles = makeStyles(theme => ({
  infoGridContainer: {
    width: '100%',
    flexGrow: 1,
    margin: theme.spacing(1)
  },
  infoCard: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary
  }
}));

const Personal = () => {
  const classes = initStyles();
  const { infoCard, infoGridContainer } = classes;

  return (
    <div className={infoGridContainer}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={infoCard} variant="outlined">
            Testann!!!!!
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Personal;
