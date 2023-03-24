// import { Google } from '@mui/icons-material'
import { Alert, Button, Grid, Link, TextField } from '@mui/material'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from "react-router-dom"
import { startCreatingUserWithEmailAndPassword } from '../../../store/auth/thunks'
import { useForm } from '../../hooks/useForm'
import { AuthLayout } from '../layout/AuthLayout'

const formData = {
    displayName: '',
    email: '',
    password: ''
}

const formValidations = {
    email: [(value) => value.includes('@'), 'Debe ser un mail válido'],
    displayName: [(value) => value.length >= 3, 'El nombre debe tener más de 3 caracteres'],
    password: [(value) => value.length >= 6, 'La contraseña debe tener más de 6 caracteres']
}

const RegisterPage = () => {

    const dispatch = useDispatch()
    const [formSubmitted, setFormSubmitted] = useState(false)

    const { status, errorMessage } = useSelector(state => state.auth)
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

    const { displayName, email, password, onInputChange, displayNameValid, isFormValid, emailValid, passwordValid, formState } = useForm(formData, formValidations)

    const onSubmit = (e) => {
        e.preventDefault()
        setFormSubmitted(true)
        if (!isFormValid) return

        // If checkingAuthentication is false, then the user is not authenticated
        // if(!isCheckingAuthentication) return

        dispatch(startCreatingUserWithEmailAndPassword(formState))
    }

    return (
        <AuthLayout
            title='Crear cuenta'>
            {/* <h1>Form {isFormValid ? 'correcto' : 'incorrecto'}</h1> */}
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
                            error={!!displayNameValid && formSubmitted}
                            helperText={displayNameValid}
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
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}
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
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}

                        />
                    </Grid>

                    <Grid
                        container
                        // sx={{ marginTop: 2 }}
                        alignItems="center"
                        justifyContent="center"
                        gap='1rem'
                    >

                        <Grid item xs={12} md={5}>
                            <Button
                                disabled={isCheckingAuthentication}
                                type='submit'
                                variant='contained'
                                color='primary'
                                fullWidth
                            >Registrar</Button>
                        </Grid>

                        <Grid item xs={12} md={5} display={!!errorMessage ? '' : 'none'}>
                            <Alert severity="error">{errorMessage}</Alert>
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