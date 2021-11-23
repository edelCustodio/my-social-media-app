import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { getPosts } from '../../store/actions';
import { changeTitle } from '../../store/actions/appActions';
import { PostSelectors } from '../../store/selectors';

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

    // const { selectPosts } = PostSelectors;

    // const posts = useSelector(selectPosts);

    useEffect(() => {
        dispatch(changeTitle('Dashboard'));
        dispatch(getPosts());
    }, [dispatch]);

    // useEffect(() => {
        
    // }, [posts]);

  return <DashboardContent />;
}