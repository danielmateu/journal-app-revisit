
import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { SIdebarItem } from './SIdebarItem'

export const Sidebar = ({ drawerWidth }) => {

    const { displayName } = useSelector(state => state.auth)
    const { notes } = useSelector(state => state.journal)
    // console.log(notes);
    // const texto = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
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
                    >{displayName}</Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        notes.map(note => (<SIdebarItem key={note.id} {...note} />))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
