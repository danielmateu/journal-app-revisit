import { SaveAsSharp } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'

import { ImageGallery } from '../components/ImageGallery'

export const NoteView = () => {
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

                >28 de marzo, 2023</Typography>
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

                />
                <TextField
                    variant='filled'
                    type='text'
                    fullWidth
                    multiline
                    rows={4}
                    placeholder='¿Qué pasó hoy?'

                />
            </Grid>

            {/* Image Gallery */}
            <ImageGallery />
        </Grid>
    )
}
