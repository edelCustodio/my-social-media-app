import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { changeTitle } from '../../store/actions/appActions';

function DashboardContent() {

  return (
    <>
        <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
                <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                }}
                >
                {/* <Chart /> */}
                </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
                <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                }}
                >
                {/* <Deposits /> */}
                </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                {/* <Orders /> */}
                </Paper>
            </Grid>
        </Grid>
    </>
  );
}

export default function Dashboard() {

    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        dispatch(changeTitle('Dashboard'));
    }, [dispatch]);
    
  return <DashboardContent />;
}