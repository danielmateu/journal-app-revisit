import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { useMemo } from "react"

import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField } from "@mui/material"

import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailAndPassword } from "../../../store/auth/thunks"

import { useForm } from "../../hooks/useForm"
import { AuthLayout } from "../layout/AuthLayout"

const formData = {
    email: '',
    password: ''
}

export const LoginPage = () => {

    const { status, errorMessage } = useSelector(state => state.auth)
    // console.log(status);
    const dispatch = useDispatch()
    const { email, password, onInputChange } = useForm(formData)

    const isAuthenticating = useMemo(() => status === 'checking', [status])

    const onSubmit = (e) => {
        e.preventDefault()
        // No es la acción a despachar
        // dispatch(checkingAuthentication());
        dispatch(startLoginWithEmailAndPassword({ email, password }))
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn())
    }

    return (
        <AuthLayout title='Login'

        >
            {/* <h1>Hola mundo: {import.meta.env.VITE_HOLA}</h1> */}
            <form onSubmit={onSubmit}
                className='animate__animated animate__fadeIn animate__faster'

            >
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
                        // sx={{ marginTop: 2 }}
                        alignItems="center"
                        justifyContent="center"
                        gap='1rem'
                    >

                        <Grid item xs={12} sm={5}>
                            <Button
                                disabled={isAuthenticating}
                                // onClick={onLoginSignIn}
                                type='submit'
                                variant='contained'
                                color='primary'
                                fullWidth
                            >Login</Button>
                        </Grid>

                        <Grid item xs={12} sm={5} >
                            <Button
                                // type='submit'
                                disabled={isAuthenticating}
                                onClick={onGoogleSignIn}
                                variant='contained'
                                color='secondary'
                                fullWidth
                                // sx={{ gap: 1 }}
                                startIcon={<Google />}
                            >Google</Button>
                        </Grid>

                        <Grid
                            container
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Grid item xs={12} md={5} display={!!errorMessage ? '' : 'none'}>
                                <Alert severity="error">{errorMessage}</Alert>
                            </Grid>
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