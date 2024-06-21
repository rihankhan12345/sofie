import React from 'react';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

const BackgroundImageContainer = styled('div')({
  backgroundImage: 'url("./images/image 7.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const CenteredPaper = styled(Paper)({
  padding: '40px',
  borderRadius: "12px",
});

export default function View() {
  	return (
		<BackgroundImageContainer>
		<CenteredPaper elevation={4} >
		  <Grid container spacing={2} width="650px" height="616px">
			<Grid item xs={12}>
			  <Typography fontWeight={700} sx={{fontSize:"28px"}}>Contact Us</Typography>
			</Grid>
			<Grid item lg={6} sm={12} md={6} xs={12}>
			  Name
			  <TextField
				size='small'
				sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 }, width: '100%' }}
				fullWidth
				variant='outlined'
				placeholder='Your Name'
			  />
			</Grid>
			<Grid item lg={6} sm={12} md={6} xs={12}>
			  Email
			  <TextField
				size='small'
				sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 }, width: '100%' }}
				fullWidth
				variant='outlined'
				placeholder='Your Email Address'
			  />
			</Grid>
			<Grid item lg={6} sm={12} md={6} xs={12}>
			  Phone Number
			  <TextField
				size='small'
				sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 }, width: '100%' }}
				fullWidth
				variant='outlined'
				placeholder='Your Phone Number'
			  />
			</Grid>
			<Grid item lg={6} sm={12} md={6} xs={12}>
			  Company <spam style={{color:"#7C7C7C"}}>(Optional)</spam>
			  <TextField
				sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 }, width: '100%' }}
				size='small'
				fullWidth
				variant='outlined'
				placeholder='Your Company'
			  />
			</Grid>
			<Grid item xs={12} sm={12} md={12} lg={12}>
			  Message
			  <TextField
				size='small'
				sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 }, width: '100%' }}
				fullWidth
				multiline
				rows={4}
				variant='outlined'
				placeholder='Your Message'
			  />
			</Grid>
			<Grid item xs={12}>
			<Button variant="contained">Submit</Button>
			</Grid>
		  </Grid>
		</CenteredPaper>
	  </BackgroundImageContainer>
  	);
}