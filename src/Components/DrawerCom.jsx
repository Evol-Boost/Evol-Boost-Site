import React, { useState, useEffect } from "react"
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from "@mui/icons-material/Apps";

const DrawerCom = () => {
    const [openDrawer, SetOpenDrawer] = useState(false);
    const pages = ["Agence", "Developpement, Logiciel", "Developpement Web", "Aide au Financement", "Contact"];


    return (
        <React.Fragment>
            <Drawer
                open={openDrawer}
                PaperProps={{
                    sx: {
                        backgroundColor: "#0e0f30b5"
                    }
                }} onClose={() => SetOpenDrawer(false)}>
                <Typography sx={{ fontSize: "1.4rem", marginTop: '8px', color: "#FFFFFF" }}>
                    Evol-Boost
                </Typography>
                <List>
                    {
                        pages.map((page) => (
                            <ListItemButton onClick={() => SetOpenDrawer(false)}>
                                <ListItemIcon>
                                    <AppsIcon sx={{ color: "#FFFFFF" }} />
                                </ListItemIcon>
                                <ListItemText sx={{ color: "#ffffff", fontSize: "1rem" }}>

                                    {page}
                                </ListItemText>
                            </ListItemButton>
                        ))
                    }
                </List>
            </Drawer>
            <IconButton sx={{
                marginLeft: '85vw',
                marginRight: 'auto', color: "#000000"
            }} onClick={() => SetOpenDrawer(!openDrawer)}>
                <MenuIcon sx={{ fontSize: 40, color: "#FFFFFF" }} />
            </IconButton>
        </React.Fragment>
    )
}
export default DrawerCom