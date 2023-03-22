import { TrainOutlined } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'


export const NothingSelectedView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 4 }}
        >
            <Grid
                item
                xs={12} 
            >
                <TrainOutlined
                    sx={{ fontSize: 100, color: 'primary.contrastText' }}
                />
            </Grid>

            <Grid
                item
                xs={12}
            >
                <Typography
                    variant='h4'
                    component='h1'
                    align='center'
                    sx={{ color: 'primary.contrastText' }}
                >Selecciona o crea una entrada</Typography>
            </Grid>
        </Grid>
    )
}
