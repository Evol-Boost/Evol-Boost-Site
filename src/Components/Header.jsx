import React, { useState, useEffect } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Button, Typography, useMediaQuery, useTheme, IconButton } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DrawerCom from './DrawerCom';
import "./Header.css";

const Header = () => {
  const [value, setvalue] = useState();

  return (
    <React.Fragment>
      <header>
        <div className="text">
          <h1>Evol</h1>
          <span>Boost</span>
        </div>
        {/* <h2>Holla</h2> */}
      </header>
      <AppBar sx={{ bgcolor: "transparent", border: 0, paddingBottom: 4 }}>
        <Toolbar>
          <DrawerCom />
        </Toolbar>
      </AppBar>

    </React.Fragment>
  )
}

export default Header