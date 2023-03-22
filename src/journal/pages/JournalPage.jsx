// import { MailOutline } from '@mui/icons-material'
import { AddOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView } from '../views/NoteView'
import { NothingSelectedView } from '../views/NothingSelectedView'

const JournalPage = () => {
    return (
        <JournalLayout>

            {/* Nothing Selected */}
            <NothingSelectedView />

            {/* NoteView */}
            {/* <NoteView /> */}

            <IconButton
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