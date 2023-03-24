
import { CircularProgress, Grid } from '@mui/material'
import React from 'react'

export const CheckinAuth = () => {
    return (

        <Grid
            container
            spacing={0}
            direction="column"
            padding={4}
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main' }}
        >
            <Grid
                container
                // className='box-shadow'
                sx={{
                    // backgroundColor: 'background.paper',
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // padding: 4,
                    // borderRadius: 10,

                }}
            >
                <CircularProgress
                    color='warning'
                />
            </Grid>

        </Grid>
    )
}
