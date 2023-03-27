// import { MailOutline } from '@mui/icons-material'
import { AddOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../../store/journal/thunks'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView } from '../views/NoteView'
import { NothingSelectedView } from '../views/NothingSelectedView'

const JournalPage = () => {

    const {isSaving, active} = useSelector(state => state.journal)
    const dispatch = useDispatch()
    // console.log(dispatch);

    const onClickNewNote = () => {
        // console.log('New Note')
        dispatch( startNewNote() )
    }




    return (
        <JournalLayout>

            {/* Nothing Selected */}
            {/* <NothingSelectedView /> */}

            {/* NoteView */}
            {/* <NoteView /> */}
            {!!active ? <NoteView /> :<NothingSelectedView />}

            <IconButton
                disabled={isSaving}
                onClick={onClickNewNote}
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    right: 20,
                    backgroundColor: 'error.main',
                    color: 'error.contrastText',
                    '&:hover': {
                        backgroundColor: 'error.dark',
                    }
                }}
                >
                <AddOutlined
                    sx={{
                        fontSize: 30,
                    }}
                />

            </IconButton>

        </JournalLayout>
    )
}

export default JournalPage