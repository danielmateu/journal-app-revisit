import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField } from '@mui/material'
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from '../layout/AuthLayout'

const RegisterPage = () => {
    return (
        <AuthLayout
            title='Crear cuenta'
        >
            <form action="">
                <Grid
                    container
                    gap='1rem'
                >
                    <Grid
                        item
                        xs={12} >
                        <TextField
                            label='Nombre completo'
                            type={'text'}
                            fullWidth
                            required
                            placeholder="John Doe"
                        />
                    </Grid>
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
                    {/* <Grid
                        item
                        xs={12}>
                        <TextField
                            label='Repite la contraseña'
                            type={'password'}
                            fullWidth
                            required
                            placeholder="********"
                        />
                    </Grid> */}

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
                        to='/auth/login'
                    >Ya tienes una cuenta?</Link>
                </Grid>
            </form>
        </AuthLayout>
    )
}

export default RegisterPage