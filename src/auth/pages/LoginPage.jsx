import { useDispatch } from "react-redux"
import { Link as RouterLink } from "react-router-dom"

import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField } from "@mui/material"

import { checkingAuthentication, startGoogleSignIn } from "../../../store/auth/thunks"
import { useForm } from "../../hooks/useForm"
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {

    const dispatch = useDispatch()

    const {email, password, onInputChange} = useForm({
        email: 'dani@gmail.com',
        password: '123456'
    })

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(checkingAuthentication());

    }

    const onGoogleSignIn = () => {
        // console.log('Google')
        dispatch(startGoogleSignIn())
    }

    return (
        <AuthLayout
            title='Login'
        >
            <form action="" onSubmit={onSubmit}>
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

                        <Grid item xs={12} sm={5} >
                            <Button
                                // type='submit'
                                onClick={onGoogleSignIn}
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
            </form>
        </AuthLayout>
    )
}

export default LoginPage