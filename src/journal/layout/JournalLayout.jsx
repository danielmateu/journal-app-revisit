import { Box } from '@mui/system'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'

const drawerWidth = 240

export const JournalLayout = ({children}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                // flexDirection: 'column',
                // alignItems: 'center',
                // justifyContent: 'center',
                // height: '100vh',
            }}
        >
            {/* Navbar drawerWidth */}
            <Navbar
                drawerWidth={drawerWidth}
            />
            {/* Sidebar drawerWidth */}
            <Sidebar
                drawerWidth={drawerWidth}
            />

            <Box
                component={'main'}
                sx={{
                    flexGrow: 1,
                    p:3}}
            >
                {/* Toolbar */}
                {children}
            </Box>
        </Box>
    )
}
