import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField } from '@mui/material'
import { Link as RouterLink } from "react-router-dom"
import { useForm } from '../../hooks/useForm'
import { AuthLayout } from '../layout/AuthLayout'

const formData = {
    displayName: 'John Doe',
    email: 'dani@gmail.com',
    password: '123456'
}

const RegisterPage = () => {

    const { displayName, email, password, onInputChange } = useForm(formData)

    const onSubmit = (e) => {
        e.preventDefault()
        

    }


    return (
        <AuthLayout
            title='Crear cuenta'
        >
            <form
                action=""
                onSubmit={onSubmit}
            >
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
                            name="displayName"
                            onChange={onInputChange}
                            value={displayName}
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
                            name="email"
                            onChange={onInputChange}
                            value={email}
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
                            name="password"
                            onChange={onInputChange}
                            value={password}

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
                                type='submit'
                                variant='contained'
                                color='primary'
                                fullWidth
                            >Login</Button>
                        </Grid>

                        {/* <Grid item xs={12} sm={5} >
                            <Button
                                type='submit'
                                variant='contained'
                                color='secondary'
                                fullWidth
                                // sx={{ gap: 1 }}
                                startIcon={<Google />}
                            >Google</Button>
                        </Grid> */}

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