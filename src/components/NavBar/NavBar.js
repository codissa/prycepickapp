import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link} from "react-router-dom";
import SearchAppBar from "../SearchAppBar/SearchAppBar";


const NavBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  return (
    <SearchAppBar position="static" color="primary" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor=""
      >
        <Tab   label="home" index={0} to='/' component={Link} />
        <Tab  label="Favorites" index={1} to='/Favorites' component={Link} />
      </Tabs>
    </SearchAppBar>
  );
};

export default NavBar;
