// import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField } from '@mui/material'
import { useState } from 'react'
import { Link as RouterLink } from "react-router-dom"
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
    password: [(value) => value.length >= 6, 'La contraseña debe tener más de 5 caracteres']
}

const RegisterPage = () => {

    const [formSubmitted, setFormSubmitted] = useState(false)

    const { displayName, email, password, onInputChange, displayNameValid, isFormValid, emailValid, passwordValid, formState } = useForm(formData, formValidations)

    // console.log(displayNameValid);

    const onSubmit = (e) => {
        e.preventDefault()
        setFormSubmitted(true)
        // console.log(formState)
    }

    return (
        <AuthLayout
            title='Crear cuenta'>
            {
                <h1>Formulario: {isFormValid ? 'Correcto': 'Incorrecto'}</h1>
                
            }
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
                            error={!!passwordValid && formSubmitted }
                            helperText={passwordValid}

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