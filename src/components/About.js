import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: 40, marginBottom: 40 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            convallis, felis vitae feugiat commodo, tortor velit tempus nunc,
            nec feugiat quam dolor ut risus. Cras rutrum ultrices augue ac
            dapibus.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: 20, background: '#EEEEFF' }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              convallis, felis vitae feugiat commodo, tortor velit tempus nunc,
              nec feugiat quam dolor ut risus. Cras rutrum ultrices augue ac
              dapibus.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: 20, background: '#EEEEFF' }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              convallis, felis vitae feugiat commodo, tortor velit tempus nunc,
              nec feugiat quam dolor ut risus. Cras rutrum ultrices augue ac
              dapibus.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
