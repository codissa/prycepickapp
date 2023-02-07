import React  from "react";
import { useState, useEffect } from "react";
import "./style.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Favorites, Item } from "pages";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";
import Posts from "./hooks/fetchdata";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {usePeopleFetch} from "./hooks";
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import Carousel from "./components/Carousel/Carousel";

import SearchAppBar from "./components/SearchAppBar/SearchAppBar";
import {EndBar} from "./pages/Favorites/style";

const AppRouter = () => {
  const [active, setActive] = useState(false)
  const[query, setQuery] = useState("")
  const[flag,setFlag] = useState({})

  return (

      <Router>
        <SearchAppBar />
        <div className="page-wrapper">
        <Routes>
          <Route  path="/" element={<Home/>} />
            <Route  path="/search" element={<Favorites/>} >
              <Route path={":query"} element={<Favorites/>}/>
            </Route>
            <Route path="/item" element={<Item/>}/>
        </Routes>
        </div>
          <div className="row" >
          {/* <div className="endbar"/> */}
          </div>
      </Router>

  );
};

export default AppRouter;
