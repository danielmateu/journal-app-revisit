import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveNote, setNotes } from '../../../store/journal/journalSlice'

export const SIdebarItem = ({ title = '', body, id, date, imageUrl = [] }) => {

    const newTitle = useMemo(() => {
        return title.length > 16 ? title.substr(0, 20) + '...' : title
    }, [title])

    // const { active } = useSelector(state => state.journal)
    const dispatch = useDispatch()

    const handleActiveNote = () => {
        dispatch(setActiveNote({
            id, title, body, date, imageUrl
        }))
    }

    return (
        <ListItem
            key={id} disablePadding
            // onClick={handleActiveNote}
        >
            <ListItemButton
                onClick={handleActiveNote}
            >
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
