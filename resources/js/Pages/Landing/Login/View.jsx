
import React from 'react';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Landing } from '@/Layouts/Landing';

const CenteredPaper = styled(Paper)(({ theme }) => ({
  padding: '40px',
  borderRadius: '12px',
  background: 'rgba(255, 255, 255, 0.8)',
  position: 'relative',
  zIndex: 1,
  width: '100%',
  maxWidth: '650px',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    padding: '20px',
  },
}));

const BackgroundImage = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: 'url(./images/image7.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'right top',
  zIndex: 0,
});

const Header = styled('div')({
  height: '100px',
  backgroundColor: '#f5f5f5',
  position: 'relative',
  zIndex: 1,
});

const Footer = styled('div')({
  height: '100px',
  backgroundColor: '#f5f5f5',
  position: 'relative',
  zIndex: 1,
});

function Login() {
  return (
    <Landing>
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <BackgroundImage />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 200px)', paddingTop: '100px', paddingBottom: '100px' }}>
        <CenteredPaper elevation={4}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography fontWeight={700} fontSize="28px" textAlign="center">Log In</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Email</Typography>
              <TextField
                size='small'
                sx={{ '& legend': { display: 'none' }, mt: 1, width: '100%' }}
                fullWidth
                variant='outlined'
                placeholder='Email Address'
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Password</Typography>
              <TextField
                size='small'
                sx={{ '& legend': { display: 'none' }, mt: 1, width: '100%' }}
                fullWidth
                variant='outlined'
                placeholder='Password'
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Forgot Password</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>Log In</Button>
              <Typography textAlign="center" mt={4}>Need an account? Sign up here.</Typography>
            </Grid>
          </Grid>
        </CenteredPaper>
      </div>
    </div>
    </Landing>
  );
}

export default Login;