import { SaveAsSharp } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'

import { ImageGallery } from '../components/ImageGallery'

export const NoteView = () => {

    const { active: note } = useSelector(state => state.journal)
    const { body, title, date, onInputChange, formState } = useForm(note)
    const dateString = useMemo (() => {
        const newDate = new Date (date)
        return newDate.toUTCString()
    }, [date])

    return (
        <Grid
            className='animate__animated animate__fadeIn animate__faster'
            container
            spacing={0}
            direction="row"
            gap={4}
            // alignItems="center"
            justifyContent="space-between"
            sx={{
                // minHeight: 'calc(100vh - 110px)',
                // display: 'flex',
            }}

        >
            <Grid
                item
                // xs={12}
                sx={{
                    // backgroundColor: 'primary.main',
                    borderRadius: 4
                }}
            >
                <Typography
                    variant='h4'
                // component='h1'
                // align='center'
                // sx={{ color: 'primary.contrastText' }}

                >{dateString}</Typography>
            </Grid>
            <Grid
                item
            >
                <Button
                    variant='outlined'
                    color='primary'
                    sx={{
                        gap: 2
                    }}
                >
                    <SaveAsSharp
                        sx={{
                            fontSize: 30,

                        }}
                    />
                    Guardar
                </Button>
            </Grid>

            <Grid
                container
                gap={4}
            >
                <TextField
                    fullWidth
                    // multiline
                    variant='standard'
                    rows={4}
                    placeholder='Escribe un título...'
                    name='title'
                    value={title}
                    onChange={onInputChange}

                />
                <TextField
                    variant='filled'
                    type='text'
                    fullWidth
                    multiline
                    rows={4}
                    placeholder='¿Qué pasó hoy?'
                    name='body'
                    value={body}
                    onChange={onInputChange}

                />
            </Grid>

            {/* Image Gallery */}
            <ImageGallery />
        </Grid>
    )
}
