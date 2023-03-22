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
                xs={12} sm={8} md={6} lg={4}
                className='box-shadow'
                sx={{ backgroundColor: 'background.paper', padding: 4, borderRadius: 2 }}
            >
                <Typography variant='h4' component='h1' align='left' gutterBottom>{title}</Typography>

                {children}
            </Grid>

        </Grid>
    )
}
