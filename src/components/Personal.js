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
            I'm a software engineer based in Brooklyn from Southern California and I want to help make things with other people.
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={infoCard} variant="outlined">
            Reach out to me at <a href="mailto:randytsao24@gmail.com" target="_top">randytsao24@gmail.com</a>, check out my work info at my <a href="https://www.linkedin.com/in/randy-tsao/" target="_top">LinkedIn</a>, or see some really outdated repos at my <a href="https://github.com/randytsao24" target="_top">GitHub</a>.
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={infoCard} variant="outlined">
            I'm currently most proficient in full stack, JavaScript-based web app development.
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={infoCard} variant="outlined">
            Technologies relating to that include Node, React, Angular, MongoDB, Postgres, and AWS (Lambda/EB/Step Functions).
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={infoCard} variant="outlined">
            Even though I am the kind of person that works to live, I am grateful for software engineering allowing me the opportunity to work with brilliant, talented people and I look forward to many more such experiences.
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ backgroundColor: '#9DD9F3' }} className={infoCard} variant="outlined">
            Thanks for coming on here and take it easy. :)
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Personal;
