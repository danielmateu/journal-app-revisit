import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Sidebar = ({ drawerWidth }) => {
    const texto = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    return (
        <Box
            component={'nav'}
            sx={{
                width: { sm: drawerWidth },
                flexShrink: { sm: 0 },
            }}
        >
            <Drawer
                variant={'permanent'}
                open={true}
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                    },
                }}
            >
                {/* <Toolbar/> */}
                <Toolbar>
                    <Typography
                        variant={'h6'}
                        noWrap
                        component={'div'}
                    >Daniel Mateu</Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'].map((text, index) => (
                            <ListItem
                                key={text} disablePadding
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot/>
                                    </ListItemIcon>
                                    <Grid
                                        container
                                    >   
                                        <ListItemText primary={text}/>
                                        <ListItemText secondary={texto}/>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>

                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
