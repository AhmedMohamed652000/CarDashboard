import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BarWithSearchFiled from './barWithSearchFiled';
import { Avatar } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import DashbordPage from '../../pages/dashbordPage';
import BookingPage from './../../pages/bookingPage';
const drawerWidth = 240;

function DrawerComponent(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className='h-100'>

            <div className='h-100 d-flex justify-content-between flex-column '>
                <List>
                    <div className='d-flex p-3'>

                        <Avatar variant="rounded" alt="Remy Sharp" src="logo.png" />
                        <div className='center px-2'>
                            <span style={{ fontSize: '32px' }} >Motiv.</span>
                        </div>
                    </div>

                    <Divider />
                    {['Dashboard', 'Assets', 'Booking', 'Sell Cars', 'Buy Cars', 'Services', 'Calender', 'messages'].map((text, index) => (
                        <ListItem key={text} disablePadding>

                            <Link to={text}>
                                <ListItemButton>

                                    <ListItemIcon>
                                        {text === 'Dashboard' ? <GridViewRoundedIcon /> : ''}
                                        {text === 'Assets' ? <DonutLargeIcon /> : ''}
                                        {text === 'Booking' ? <DirectionsCarOutlinedIcon /> : ''}
                                        {text === 'Sell Cars' ? <LocalMallOutlinedIcon /> : ''}
                                        {text === 'Buy Cars' ? <ShoppingCartOutlinedIcon /> : ''}
                                        {text === 'Services' ? <DesignServicesOutlinedIcon /> : ''}
                                        {text === 'Calender' ? <CalendarMonthOutlinedIcon /> : ''}
                                        {text === 'messages' ? <ChatOutlinedIcon /> : ''}

                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>

                <List>
                    {['Settings', 'Logout',].map((text, index) => (
                        <ListItem key={text} disablePadding>

                            <Link to={text}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {text === 'Settings' ? <SettingsOutlinedIcon /> : ''}
                                        {text === 'Logout' ? <LogoutOutlinedIcon style={{ transform: 'rotate(180deg)' }} /> : ''}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </Link >

                        </ListItem>
                    ))}
                </List>
            </div>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <BrowserRouter>

            <Box sx={{ display: 'flex' }} className='text-dark'>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                    className='shadow-none'
                >
                    <Toolbar className='w-100 bg-white shadow-none'>
                        <IconButton
                            color="white"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className='w-100 shadow-none ' noWrap component="span">
                            <BarWithSearchFiled className='w-100' />
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                    style={{ background: '#F5F4F6',minHeight:'100vh' }}
                >
                    <Toolbar />
                    <Typography component="div"  className='center'   >
                        
                            <Routes>
                                <Route exact path='/Dashboard' element={< DashbordPage />}></Route>
                                <Route exact path='/' element={< DashbordPage />}></Route>
                                <Route exact path='/Booking' element={< BookingPage />}></Route>
                            </Routes>



                    </Typography>
                </Box>
            </Box>
        </BrowserRouter>

    );
}

DrawerComponent.propTypes = {
    window: PropTypes.func,
};

export default DrawerComponent;
