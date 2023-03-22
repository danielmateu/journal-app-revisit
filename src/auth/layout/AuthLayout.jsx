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

                {/* <form action="">
                        <Grid
                            container
                            gap='1rem'
                        >
                            <Grid
                                item
                                xs={12} >
                                <TextField
                                    label='Correo'
                                    type={'email'}
                                    fullWidth
                                    required
                                    placeholder="correo@gmail.com"
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}>
                                <TextField
                                    label='Contraseña'
                                    type={'password'}
                                    fullWidth
                                    required
                                    placeholder="********"
                                />
                            </Grid>

                            <Grid
                                container
                                sx={{ marginTop: 2 }}
                                alignItems="center"
                                justifyContent="center"
                                gap='1rem'
                            >
                                <Grid item xs={12} sm={5}>
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        fullWidth
                                    >Login</Button>
                                </Grid>

                                <Grid item xs={12} sm={5} >
                                    <Button
                                        variant='contained'
                                        color='secondary'
                                        fullWidth
                                        // sx={{ gap: 1 }}
                                        startIcon={<Google />}
                                    >Google</Button>
                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid
                            container
                            sx={{ marginTop: 2 }}
                            direction="row"
                            justifyContent="end"
                        >
                            <Link
                                component={RouterLink}
                                variant='body2'
                                to='/auth/register'
                            >Crear una cuenta</Link>
                        </Grid>
                    </form> */}
            </Grid>

        </Grid>
    )
}
