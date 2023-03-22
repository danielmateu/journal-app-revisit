// import { MailOutline } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView } from '../views/NoteView'
import { NothingSelectedView } from '../views/NothingSelectedView'

const JournalPage = () => {
    return (
        <JournalLayout>
            {/* <Typography variant='h1'>Journal💩</Typography> */}
            {/* <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae voluptatem nulla temporibus, perferendis neque assumenda quae accusamus quibusdam natus deleniti doloremque aliquam? Quia officia asperiores libero perferendis sint odio.</Typography> */}

            {/* Nothing Selected */}
            {/* <NothingSelectedView/> */}

            {/* NoteView */}
            <NoteView/>
        </JournalLayout>
    )
}

export default JournalPage