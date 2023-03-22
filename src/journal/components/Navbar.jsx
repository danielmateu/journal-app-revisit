import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Navbar = ({drawerWidth}) => {
    return (
        <AppBar
            position={'fixed'}
            sx={{
                width:{ sm:`calc(100% - ${drawerWidth}px)`},
                // md: `${drawerWidth}px`,
            }}
        >
            <Toolbar>
                <IconButton
                    color={'inherit'}
                    // aria-label={'open drawer'}
                    edge={'start'}
                    sx={{
                        display: { sm: 'none'},
                        mr: 2,
                    }}
                >
                    <MenuOutlined
                        fontSize={'large'}
                        // color={'secondary'}
                    />
                </IconButton>

                <Grid
                    container
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Typography
                        variant={'h6'}
                        noWrap
                        component={'div'}
                    >Journal App</Typography>
                    <IconButton
                        color={'error'}
                        // aria-label={'open drawer'}
                        edge={'start'}
                    >
                        <LogoutOutlined/>
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
