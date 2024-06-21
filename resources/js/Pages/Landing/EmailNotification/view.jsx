import React from 'react';
import { Box, Button, Grid, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CenteredPaper = styled(Paper)({
  padding: '80px',
  borderRadius: "16px",
});

function EmailNotification() {
  return (
    <div class="inner_banner_section">
      <img src="./images/image8.png" alt="" />
      <div class="banner_content">
        <div class="container">
          <div class="row">
            <CenteredPaper elevation={4}>
              <Grid container >
                <Grid item xs={12}>
                  <Typography fontSize={"16px"} color={"#7C7C7C"}>We sent an email with a link to verify your account to:</Typography>
                  <Typography fontWeight={600} textAlign={"center"} mailto:py={2}>ammarhanif@gmail.com</Typography>
                  <Box mt={2}>
                    <Typography fontSize={"16px"} color={"#7C7C7C"} >If the email has not arrived within 15 minutes, check your spam folder </Typography>
                    <Typography fontSize={"16px"} color={"#7C7C7C"} py={2}> If you are still unable to receive a verification email, please contact us so that we can resolve your issue</Typography>
                  </Box>
                </Grid>

              </Grid>
            </CenteredPaper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailNotification;
