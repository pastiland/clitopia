import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import hamburger from "../../assets/img/topnav-hamburger.png";
import logo from "../../assets/img/logo.png";
import "./Header.css";

const ResponsiveAppBar = ({ handleClick }) => {
    
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box sx={{ backgroundColor: '#00fff8', height: 'max-content', pt: 1 }}>
            <AppBar position="static" className="appbar" style={{ background: 'transparent' }}>
                <Container maxWidth="xl" >
                    <Toolbar disableGutters>
                        
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <img src={logo} alt="Clitopia" width={40} />
                            </IconButton>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <img src={hamburger} alt="hamburger" width={20} />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onBlur={handleCloseNavMenu} 
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >

                                <Button className="navItems" onClick={() => handleClick('goToAbout')}>
                                    {'About'}
                                </Button>
                                <Button className="navItems" onClick={() => handleClick('goToLegendary')}>
                                    {'Legendary'}
                                </Button>
                                <Button className="navItems" onClick={() => handleClick('goToManifesto')}>
                                    {'Manifesto'}
                                </Button>
                                <Button className="navItems" onClick={() => handleClick('goToTeam')}>
                                    {'Team'}
                                </Button>

                            </Menu>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, float: "left", padding: "0 10vw 0 0" }}>
                            <Button className="navItems" onClick={() => handleClick('goToAbout')}>
                                {'About'}
                            </Button>
                            <span>.</span>
                            <Button className="navItems" onClick={() => handleClick('goToLegendary')}>
                                {'Legendary'}
                            </Button>
                            <span>.</span>
                            <Button className="navItems" onClick={() => handleClick('goToManifesto')}>
                                {'Manifesto'}
                            </Button>
                            <span>.</span>
                            <Button className="navItems" onClick={() => handleClick('goToTeam')}>
                                {'Team'}
                            </Button>
                        </Box>

                        <Box sx={{ flexGrow: 0, display: { md: 'flex' } }}>
                            <Tooltip title="Open settings">
                                <Button className="connect">
                                    {'Connect'}
                                </Button>
                            </Tooltip>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};
export default ResponsiveAppBar;
