import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import { Copyright } from './Copyright';
import { MainNav } from './MainNav';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {

    return (
        <>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <MainNav />
            <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
            >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Outlet />
                <Copyright sx={{ pt: 4 }} />
            </Container>
            </Box>
        </Box>
        </>
    );
}