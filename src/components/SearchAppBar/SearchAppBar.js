import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState, useEffect } from "react";
import {  useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../../assets/PryceLogo.jpeg';
import PersonIcon from '@mui/icons-material/Person';
import {Routes, Route, useNavigate} from 'react-router-dom';




const drawerWidth = 240;
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '100%',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,

    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));





export default function SearchAppBar() {
    const[query, setQuery] = useState("")
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);

    };
    const handleDrawerClose = () => {
        setOpen(false);

    };

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `/search/`+query;
        navigate(path);
        // window.location.reload();
    }
    const routeChangeHome = () =>{
        let path = '/';
        navigate(path);

    }


const [value, setValue] = useState('')
    return (
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1, justifyContent:"space-between" }} position="sticky" top={0}>
            {/*<CssBaseline/>*/}
            <AppBar  sx={{background: "#F5F5F5", justifyContent:"space-between",display:"flex" }} position="sticky" >
                <Toolbar  sx={{
                    justifyContent: "space-between", display:"flex"
                }}  >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        onClick={handleDrawerOpen}
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon color="action" />
                    </IconButton>
                    <IconButton onClick={routeChangeHome} > <img width={140} src={require('../../assets/PryceLogo.jpeg')}/></IconButton>
                    <Typography
                        variant="h6"
                        noWrap

                        edge="start"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >

                    </Typography>
                    <Search >
                        <IconButton style={{ background:"transparent", border:"transparent" }} onClick={routeChange} >
                        <SearchIconWrapper  >
                            <div style={{marginLeft:10}}/>
                            <SearchIcon  onClick={useNavigate}/>
                        </SearchIconWrapper>
                        </IconButton>
                        <StyledInputBase
                            onKeyPress={(event)=>{if(event.charCode===13)routeChange()
                            }}
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={value}

                            onChange={(value)=> {setValue(value.target.value)
                            console.log(query)
                            setQuery(value.target.value)
                            console.log(query)}}
                        />
                    </Search>
                    <FavoriteBorderIcon color="action"/>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['home', 'favorites', 'cart', 'login'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index  === 0 ? <HomeIcon /> : null}
                                    {index  === 1 ? <FavoriteBorderIcon /> : null}
                                    {index  === 2 ? <ShoppingCartIcon /> : null}
                                    {index  === 3 ? <PersonIcon /> : null}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />

            </Drawer>

        </Box>
    );
}