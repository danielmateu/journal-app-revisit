import { MenuOutlined } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import React from 'react'

export const Navbar = ({drawerWidth}) => {
    return (
        <AppBar
            position={'fixed'}
            sx={{
                width: `calc(100% - ${drawerWidth}px)`,
                ml: `${drawerWidth}px`,
            }}
        >
            <Toolbar>
                <IconButton>
                    <MenuOutlined/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
