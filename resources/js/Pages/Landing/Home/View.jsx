import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import headerRight from '../../../Assets/Images/header-right.png'
import joinCommunity from '../../../Assets/Images/join-community-bg.png'
import voloplay from '../../../Assets/Images/voloplay.png'
import turtle from '../../../Assets/Images/turtle.png'
import nuevocar from '../../../Assets/Images/nuevocar.png'

import joinCommunityMember1 from '../../../Assets/Images/join-community-member1.png'
import joinCommunityMember2 from '../../../Assets/Images/join-community-member2.png'
import { Card, Grid, MobileStepper, Paper } from '@mui/material';
import Button from '@/Components/Singleton/Button';
import { Landing } from '@/Layouts/Landing';
import theme from '@/Themes/Color';
import Bulb from '@/Components/SVGIcons/Home/Bulb';
import roundedImage from '../../../Assets/Images/Rectangle 28.png'
import ImageCard from './Components/ImageCard';
import Constants from './Constants';
import Guide from './Components/Guide';
import FeatureCard from './Components/FeatureCard';
import Testimonial from './Components/Testimonial';

function DrawerAppBar(props) {
	const [activeStep, setActiveStep] = React.useState(0);
	return (
		<>
			<Landing>
				<CssBaseline />
				<Grid container spacing={2} mt={6} sx={{ display: 'flex', alignItems: 'center' }}>
					<Grid item lg={6} md={6} sm={12}>
						<Box pl={15}>
							<Typography sx={{
								fontSize: "58px",
								fontWeight: '700 !important',
							}}
								variant="body1"
								color="initial"
							>
								Find the Perfect Business Mentor for Your Success
							</Typography>
							<Typography className='leading-3' sx={{
								fontSize: '16px',
								color: '#252525'
							}}
								variant="body1"
								color="initial"
							>
								Unlock your business potential with personalized guidance from experienced mentors. Start your journey to success today by connecting with a mentor who understands your unique challenges and goals.
							</Typography>
							<Box className="flex gap-5 mt-10">
								<Button variant="contained">
									Sign Up to be SME
								</Button>
								<Button variant="outlined">
									Sign Up to be Mentor
								</Button>
							</Box>

						</Box>
					</Grid>
					<Grid item lg={6} md={6} sm={12} sx={{ height: '693px' }}>
						<img className='w-full h-full objecvolplayt-cover' style={{
							maxWidth: '100',
						}} src={headerRight} alt="description" />
					</Grid>
				</Grid>

				<Box
					bgcolor={theme.color[import.meta.env.VITE_SELECTED_THEME].primary}
					p={10}
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: 4,
					}}
				>
					<Grid container spacing={4} pl={5}>
						{[0, 1, 2, 3].map((item, index) => (
							<Grid item xs={12} sm={12} md={6} lg={3} key={index}>
								<Card
									variant="outlined"
									sx={{
										p: 5,
										borderRadius: '15px',
									}}
								>
									<Bulb />
									<Typography
										variant="body1"
										mt={2}
										color={theme.color[import.meta.env.VITE_SELECTED_THEME].secondary}
										fontWeight="bold"
									>
										Empowerment
									</Typography>
									<Typography
										mt={1}
										variant="body1"
										color={theme.color[import.meta.env.VITE_SELECTED_THEME].textPrimaryMuteColor}
									>
										We strive to empower entrepreneurs by offering them the tools, resources, and mentorship
									</Typography>
								</Card>
							</Grid>
						))}
					</Grid>
				</Box>

				<Grid container py={10} px={15}>
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<img className='w-full' src={roundedImage} alt="description" />
					</Grid>

					<Grid container p={4} item xs={12} sm={12} md={6} lg={6}>
						<Typography
							sx={{
								fontSize: { xs: '32px', sm: '40px', md: '48px' },
								fontWeight: '700 !important',
							}}
							variant="body1"
							color="initial"
						>
							Mission Statement
						</Typography>
						<Typography
							mt={3}
							color={theme.color[import.meta.env.VITE_SELECTED_THEME].textPrimaryMuteColor}
							variant="body1"
						>
							Our mission is to empower entrepreneurs by connecting them with the right mentors who can provide personalized guidance and support.
						</Typography>
						<Typography
							mt={3}
							color={theme.color[import.meta.env.VITE_SELECTED_THEME].textPrimaryMuteColor}
							variant="body1"
						>
							We envision a world where every entrepreneur has the resources and knowledge they need to succeed and make a positive impact on their communities.
						</Typography>
						<Typography
							mb={5}
							mt={3}
							color={theme.color[import.meta.env.VITE_SELECTED_THEME].textPrimaryMuteColor}
							variant="body1"

						>
							We believe that every entrepreneur, regardless of their background or location, deserves access to high-quality mentorship. By leveraging our extensive network of experienced professionals, we aim to bridge the gap between knowledge and action.
						</Typography>
						<Button variant="contained">
							Read more
						</Button>
					</Grid>
				</Grid>
				<Grid container py={10} px={15} >
					<Grid item xs={12} sm={12} md={12} lg={12}>
						<Typography textAlign={'center'} variant="h3" color="initial"
							sx={{
								fontWeight: 'bold !imporatant'
							}}>
							Featured Mentors
						</Typography>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={12}>
						<Typography textAlign={'center'} color={theme.color[import.meta.env.VITE_SELECTED_THEME].textPrimaryMuteColor} variant="subtitle1">
							Meet some of our exceptional mentors who bring a wealth of experience and expertise to <br /> guide you on your entrepreneurial journey
						</Typography>
					</Grid>
				</Grid>

				<Grid container spacing={4} px={10} pb={10}>
					{Constants.ImageCard.map((item, key) => (
						<Grid item lg={3} xs={12} sm={12} md={6} >
							<ImageCard item={item} />
						</Grid>
					))}
				</Grid>

				<Grid container bgcolor={theme.color[import.meta.env.VITE_SELECTED_THEME].primary} py={10} px={15} textAlign={"center"}>
					<Grid item md={12} xs={12}>
						<Typography textAlign={'center'} variant="body1" color={theme.color[import.meta.env.VITE_SELECTED_THEME].white}>
							How It Works
						</Typography>
						<Typography textAlign={'center'} variant="h5" color={theme.color[import.meta.env.VITE_SELECTED_THEME].white} fontWeight={'bold'}>
							Step-by-Step Guide
						</Typography>
					</Grid>

					{Constants.guide.map((item, key) => (
						<Grid item lg={3} key={key}>
							<Guide item={item} />
							{/* </Badge> */}
						</Grid>
					))}
				</Grid>

				<Grid container py={10} px={15} >
					<Grid item xs={12} sm={12} md={12} lg={12}>
						<Typography textAlign={'center'} variant="h3" color="initial"
							sx={{
								fontWeight: 'bold !important',
							}}>
							Featured SME
						</Typography>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={12}>
						<Typography textAlign={'center'} color={theme.color[import.meta.env.VITE_SELECTED_THEME].textPrimaryMuteColor} variant="subtitle1">
							Discover some of the successfvolplayul Small Medium Enterprises (SMEs) that have thrived with <br /> the help of our mentorship program.
						</Typography>
					</Grid>
				</Grid>

				<Grid container spacing={4} px={10} pb={10}>
					{Constants.FeatureCard.map((item, key) => (
						<Grid item lg={4} xs={12} sm={12} md={4}>
							<FeatureCard item={item} />
						</Grid>
					))}
				</Grid>

				<Box>
					<img style={{ position: 'absolute', zIndex: '-1' }} src={joinCommunity} width={'100%'}></img>
					<Grid container py={10} px={15}>
						<Grid item xs={12} sm={12} md={12} lg={12}>
							<Typography textAlign={'center'} variant="h3" color="initial"
								sx={{
									fontWeight: 'bold !important',
								}}>
								Join Our Community
							</Typography>
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={12}>
							<Typography textAlign={'center'} color={theme.color[import.meta.env.VITE_SELECTED_THEME].textPrimaryMuteColor} variant="subtitle1">
								Become a part of our dynamic and supportive community, where experienced mentors and ambitious businesses come together to achieve success.
							</Typography>
						</Grid>

						<Grid container spacing={2} py={10} sx={{ justifyContent: 'space-between' }}>
							<Grid item lg={4} xs={12} sm={12} md={12} >
								<img className='w-full' src={joinCommunityMember1} alt="description" />
							</Grid>
							<Grid lg={7} xs={12} sm={12} md={12}>
								<Typography
									sx={{
										fontSize: { xs: '32px', sm: '40px', md: '48px' },
										fontWeight: '700 !important',
									}}
									variant="body1"
									color="initial"
								>
									Become a Mentor and Inspire Success
								</Typography>
								<Typography
									mt={3}
									color={theme.color[import.meta.env.VITE_SELECTED_THEME].textPrimaryMuteColor}
									variant="body1"
								>
									Join our mentorship program and share your valuable experience to help entrepreneurs succeed. As a mentor, you'll provide guidance, support, and insights to aspiring business owners.
								</Typography>
								<Typography
									mt={3}
									color={theme.color[import.meta.env.VITE_SELECTED_THEME].textPrimaryMuteColor}
									variant="body1"
								>
									Your mentorship can make a significant impact, helping entrepreneurs overcome challenges and achieve their business goals.								</Typography>
								<Box mt={3}>
									<Button variant="contained">
										Be A Mentor
									</Button>
								</Box>
							</Grid>
						</Grid>

						<Grid container py={10} sx={{ justifyContent: 'space-between' }}>
							<Grid lg={7} xs={12} sm={12} md={12}>
								<Typography
									sx={{
										fontSize: { xs: '32px', sm: '40px', md: '48px' },
										fontWeight: '700 !important',
									}}
									variant="body1"
									color="initial"
								>
									Partner with Us and Empower Your Business
								</Typography>
								<Typography
									mt={3}
									color={theme.color[import.meta.env.VITE_SELECTED_THEME].textPrimaryMuteColor}
									variant="body1"
								>
									Collaborate with our platform to gain access to expert mentors who can help your business thrive.Our mentors provide personalized guidance and strategic advice tailored to your specific needs and challenges.
								</Typography>
								<Typography
									mt={3}
									color={theme.color[import.meta.env.VITE_SELECTED_THEME].textPrimaryMuteColor}
									variant="body1"
								>
									By partnering with us, you'll be equipped with the tools and knowledge necessary to drive growth and innovation within your company.
								</Typography>
								<Box mt={3}>
									<Button variant="contained">
										Be A Mentor
									</Button>
								</Box>
							</Grid>
							<Grid item lg={4} xs={12} sm={12} md={12} >
								<img className='w-full' src={joinCommunityMember2} alt="description" />
							</Grid>
						</Grid>

					</Grid>
				</Box>

				<Grid container py={10} px={15} >
					<Grid item xs={12} sm={12} md={12} lg={12}>
						<Typography textAlign={'center'} variant="h3" color="initial"
							sx={{
								fontWeight: 'bold !important',
							}}>
							Successfully Matched
						</Typography>
					</Grid>
				</Grid>

				<Grid container spacing={4} py={10} px={15} >
					<Grid item lg={4}>
						<Paper elevation={2} sx={{ height:'346px' }}>
							<Box p={4}>
								<Box sx={{ width: "335px", height:"90px" }}>
									<img src={voloplay}></img>
								</Box>
								<Box pt={5}>
									<Typography sx={{ color: '#2BAED6', fontSize: '12px' }}>Artificial Intelegence & Software</Typography>
									<Typography sx={{ fontWeight: 'bold', fontSize: '27px' }}>Volopay<br /> Company</Typography>
								</Box>
							</Box>
							<Box className={`border-b-8 border-[${theme.color[import.meta.env.VITE_SELECTED_THEME].secondary}]`}></Box>
						</Paper>
					</Grid>

					<Grid item lg={4}>
						<Paper elevation={2} sx={{ height:'346px'}}>
							<Box p={4}>
								<Box sx={{ width: "335px", height:"90px" }}>
									<img src={turtle}></img>
								</Box>
								<Box pt={5}>
									<Typography sx={{ color: '#2BAED6', fontSize: '12px' }}>Alternative & Renewable Energy</Typography>
									<Typography sx={{ fontWeight: 'bold', fontSize: '27px' }}>TurtleTree<br /> Company</Typography>
								</Box>
							</Box>
							<Box className={`border-b-8 border-[${theme.color[import.meta.env.VITE_SELECTED_THEME].secondary}]`}></Box>
						</Paper>
					</Grid>

					<Grid item lg={4}>
						<Paper elevation={2} sx={{ height:'346px'}}>
							<Box p={4}>
								<Box sx={{ width: "335px", height:"90px" }}>
									<img src={nuevocar}></img>
								</Box>
								<Box pt={5}>
									<Typography sx={{ color: '#2BAED6', fontSize: '12px' }}>Consumer Products</Typography>
									<Typography sx={{ fontWeight: 'bold', fontSize: '27px' }}>Nuevocor<br/> Company</Typography>
								</Box>
							</Box>
							<Box className={`border-b-8 border-[${theme.color[import.meta.env.VITE_SELECTED_THEME].secondary}]`}></Box>
						</Paper>
					</Grid>

				</Grid>
				


				<Box bgcolor={theme.color[import.meta.env.VITE_SELECTED_THEME].primary}
					p={10}
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: 4,
					}}
				>
					<Grid container spacing={4} pl={5} className='hidden md:block'>
						<Grid item md={12} xs={12}>
							<Typography textAlign={'center'} variant="body1" color={theme.color[import.meta.env.VITE_SELECTED_THEME].white}>
								Testimonials
							</Typography>
							<Typography textAlign={'center'} variant="h5" color={theme.color[import.meta.env.VITE_SELECTED_THEME].white} fontWeight={'bold'}>
								What People Are Saying
							</Typography>
						</Grid>
						{Constants.Testimonials.map((item, key) => (
							<Grid item md={4} key={key}>
								<Testimonial item={item} />
        					</Grid>
						))}
						<Box className="flex justify-center w-full mt-9">
							<MobileStepper
								variant="dots"
								steps={4}
								position="static"
								activeStep={activeStep}
								sx={{
									maxWidth: 400,
									flexGrow: 1,
									bgcolor: theme.color[import.meta.env.VITE_SELECTED_THEME].primary,
									'&.MuiPaper-root': {
										display: 'flex',
										justifyContent: 'center',
									},
									'&.MuiPaper-root .MuiMobileStepper-dots .MuiMobileStepper-dotActive': {
										bgcolor:theme.color[import.meta.env.VITE_SELECTED_THEME].white,
									}
								}}
							/>
						</Box>
					</Grid>
				</Box>
			</Landing>
		</>
	);
}

export default DrawerAppBar;