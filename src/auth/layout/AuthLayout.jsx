import { Grid, Typography } from '@mui/material'


export const AuthLayout = ({children, title = ''}) => {
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
                item
                className='box-shadow'
                sx={{ backgroundColor: 'background.paper', padding: 4, borderRadius: 2, 
                minWidth: '350px', width: '50%' }}
            >
                <Typography variant='h4' component='h1' align='left' gutterBottom>{title}</Typography>

                {children}
            </Grid>

        </Grid>
    )
}
