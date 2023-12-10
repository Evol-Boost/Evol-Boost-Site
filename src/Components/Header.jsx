import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Button, Typography, useMediaQuery, useTheme, IconButton } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DrawerCom from './DrawerCom';
import "./Header.css";

const Header = () => {
  const [value, setvalue] = useState();

  const theme = useTheme(); // pour le sreen
  // const isMatch = useMediaQuery(theme.breakpoints.down=('md')); // pour le screen
  const isMatch = true

  const pages = ["Agence", "Developpement Logiciel", "Developpement Web", "Aide au Financement", "Contact"];
  return (
    <React.Fragment>
      <header>
        <div className="text">
          <h1>Evol</h1>
          <span>Boost</span>
        </div>
        {/* <h2>Holla</h2> */}
      </header>
      <AppBar sx={{ bgcolor: "transparent", border: 0 }}>
        <Toolbar>
          <DrawerCom />
        </Toolbar>
      </AppBar>

    </React.Fragment>
  )
}

export default Header