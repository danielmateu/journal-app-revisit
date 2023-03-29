import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../../store/auth/thunks'


export const Navbar = ({ drawerWidth }) => {

    // obtain displayName
    
    // console.log(displayName);
    const dispatch = useDispatch()

    const onLogout = () => {
        // console.log('Logout')
        dispatch(startLogout())
    }

    const handleSidebarOpen = () => {
        console.log('Open Sidebar')
        // Open sidebar from the left
        
    }


    return (
        <AppBar
            position={'fixed'}
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                // md: `${drawerWidth}px`,
            }}
        >
            <Toolbar>
                <IconButton
                    onClick={handleSidebarOpen}
                    color={'inherit'}
                    // aria-label={'open drawer'}
                    edge={'start'}
                    sx={{
                        display: { sm: 'none' },
                        mr: 2,
                    }}
                >
                    <MenuOutlined
                        fontSize={'large'}
                    // color={'secondary'}
                    />
                </IconButton>

                <Grid
                    container
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Typography
                        variant={'h6'}
                        noWrap
                        component={'div'}
                    >Journal App</Typography>
                    <IconButton
                        onClick={onLogout}
                        color={'error'}
                        // aria-label={'open drawer'}
                        edge={'start'}
                    >
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
