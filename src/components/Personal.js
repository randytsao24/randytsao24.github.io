import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const initStyles = makeStyles(theme => ({
  infoGridDiv: {
    width: '100%',
    margin: theme.spacing(2)
  },
  infoGridContainer: {
    flexGrow: 1
  },
  infoCard: {
    padding: theme.spacing(2),
    fontSize: 14,
    textAlign: 'center',
    color: theme.palette.text.primary
  }
}));

const Personal = () => {
  const classes = initStyles();
  const { infoCard, infoGridContainer, infoGridDiv } = classes;

  return (
    <div className={infoGridDiv}>
      <Grid className={infoGridContainer} container spacing={3}>
        <Grid item xs={12}>
          <Paper className={infoCard} variant="outlined">
            I'm a software engineer based in Brooklyn and I want to help make things with other people.
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={infoCard} variant="outlined">
            This is a placeholder for apps I'm gonna showcase.
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={infoCard} variant="outlined">
            So is this!
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Personal;
