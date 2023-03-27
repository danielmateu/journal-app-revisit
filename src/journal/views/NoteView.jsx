import { SaveAsSharp, UploadOutlined } from '@mui/icons-material'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import { useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { setActiveNote } from '../../../store/journal/journalSlice'
import { startSaveNote } from '../../../store/journal/thunks'
import { useForm } from '../../hooks/useForm'

import { ImageGallery } from '../components/ImageGallery'
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {

    const dispatch = useDispatch()
    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal)

    const { body, title, date, onInputChange, formState } = useForm(note)

    const dateString = useMemo(() => {
        const newDate = new Date(date)
        return newDate.toUTCString()
    }, [date])

    const fileInputRef = useRef()

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])

    useEffect(() => {
        if (messageSaved.length > 0) {
            // alert(messageSaved)
            Swal.fire('Guardado', messageSaved, 'success')
        }
    }, [messageSaved])

    const onSaveNote = () => {
        dispatch(startSaveNote())
    }

    const onFileInputChange = ({target}) => {
        if(target.files.length === 0) return
        console.log('Subiendo archivos...');
        // dispatch(startUploadingFiles(target.files))
    }

    



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
                <input
                    type='file'
                    multiple
                    onChange={onFileInputChange}
                    style={{ display: 'none' }}
                    id='fileInput'
                    ref={fileInputRef}

                />
                <IconButton
                    color='primary'
                    // aria-label='upload picture'
                    disabled = {isSaving}
                    onClick={() => fileInputRef.current.click()}

                >
                    <UploadOutlined />
                </IconButton>
                <Button
                    disabled={isSaving}
                    onClick={onSaveNote}
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
