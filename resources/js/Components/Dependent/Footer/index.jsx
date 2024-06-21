import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import facebook from '../../../Assets/Images/icon-facebook@2x.png'
import twitter from '../../../Assets/Images/icon-twitter@2x.png'
import linkedin from '../../../Assets/Images/icon-linkedin@2x.png'

export const Footer = () => {
    return (
        <Box sx={{backgroundColor:'#E8EAEC'}} p={5}>

            <Grid container spacing={2}>
                <Grid item lg={3}>
                    <Typography sx={{
                            fontWeight: "bold !important",
                            fontSize: "18px !important",
                        }}
                        color="black"
                        variant="h6"
                    >
                        Resources
                    </Typography>
                    <Typography
                        mt={1}
                        sx={{
                            color: "#4E596D",
                            fontSize: "14px",
                            lineHeight: "2",
                        }}
                    >
                        Funding Resources
                        <br />
                        Funding Terminology
                        <br />
                        FAQs
                        <br />
                    </Typography>
                </Grid>
                <Grid item lg={3}>
                    <Typography
                        sx={{
                            fontWeight: "bold !important",
                            fontSize: "18px !important",
                        }}
                        color="black"
                        variant="h6"
                    >
                        Learn More
                    </Typography>
                    <Typography
                        mt={1}
                        sx={{
                            color: "#4E596D",
                            fontSize: "14px",
                            lineHeight: "2",
                        }}
                    >
                        How Shophie’s Works
                        <br />
                        Contact Us
                        <br />
                        Press
                        <br />
                    </Typography>
                </Grid>
                <Grid item lg={3}>
                    <Typography
                        sx={{
                            fontWeight: "bold !important",
                            fontSize: "18px !important",
                        }}
                        color="black"
                        variant="h6"
                    >
                        Company
                    </Typography>
                    <Typography
                        mt={1}
                        sx={{
                            color: "#4E596D",
                            fontSize: "14px",
                            lineHeight: "2",
                        }}
                        color="black"
                    >
                        Browse Companies
                        <br />
                        Find a Mentor
                        <br />
                        Sign up
                        <br />
                    </Typography>
                </Grid>
                <Grid item lg={3}>
                    <Typography
                        sx={{ fontWeight: "bold !important" }}
                        color="black"
                        variant="h6"
                    >
                        Connect
                    </Typography>
                    <Box className="flex gap-2" mt={1}>
                        <img src={facebook}></img>
                        <img src={twitter}></img>
                        <img src={linkedin}></img>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
