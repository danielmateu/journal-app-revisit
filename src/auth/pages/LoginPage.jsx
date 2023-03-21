import { Grid, TextField, Typography } from "@mui/material"


export const LoginPage = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
            <Grid
                item
                xs={3}
                className='box-shadow'
                sx={{ backgroundColor: 'background.paper', padding: 4, borderRadius: 2 }}
            >
                <Typography variant='h4' component='h1' align='center' gutterBottom>Login</Typography>

                <form action="">
                    <Grid
                        container
                        spacing={2}
                        // direction="column"
                        // alignItems="center"
                        // justifyContent="center"
                    >
                        <Grid item xs={12}>
                            <TextField
                                label='Correo'
                                type={'email'}
                                fullWidth
                                required
                                placeholder="correo@gmail.com"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label='Contraseña'
                                type={'password'}
                                fullWidth
                                required
                                placeholder="********"
                            />
                        </Grid>
                    </Grid>
                </form>
            </Grid>

        </Grid>
    )
}

export default LoginPage