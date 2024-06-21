import { AppBar, Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@/Components/Singleton/Button';
import sofieLogo from '../../../Assets/Images/Sofie-logo.png';

const navItems = ['Browse Companies', 'Find A Mentor', 'Login', 'Get Started Now'];
const   Header = () => {
    // const { window } = props;

	const drawer = (
		<>
			<Typography variant="h6" sx={{ my: 2 }}>
				MUI
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
				<ListItem key={item} disablePadding>
					<ListItemButton sx={{ textAlign: 'center',}}>
						<ListItemText primary={item} />
					</ListItemButton>
				</ListItem>
				))}
			</List>
		</>
	);
    const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

    return (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <AppBar component="nav" sx={{
                backgroundColor:"#FFFFFF",
                boxShadow:" 0px 4px 17.5px 0px #00000026",
            }}>
                <Toolbar>
                <IconButton
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block',} }}
                >
                    <img src={sofieLogo} alt="description" />
                </Typography>
                <Box className="flex gap-4" gap={2} >
                    {navItems.map((item, key) => (
                        <Button
                            key={key}
                            variant={key === 3 ? `contained` : `text`}
                            color={key !== 3 ? "textBlack": 'primary'}
                        >
                            {item}
                        </Button>
                    ))}
                </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Header;