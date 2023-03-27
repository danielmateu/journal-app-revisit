import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useMemo } from 'react'

export const SIdebarItem = ({title, body, id}) => {

    const newTitle = useMemo(() => {
        return title.length > 16 ? title.substr(0, 20) + '...' : title
    }, [title])


    return (
        <ListItem
            key={id} disablePadding
        >
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid
                    container
                >
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
