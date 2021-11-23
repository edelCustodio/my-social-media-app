import { Grid, Paper, Card } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { IPost } from "../../models";
import { changeTitle } from "../../store/actions";
import { PostSelectors } from "../../store/selectors";
import { Post } from "./Post";


export const Posts = () => {

    const { selectPosts } = PostSelectors;

    const posts = useSelector(selectPosts);
    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        dispatch(changeTitle('Posts'));
    }, [posts, dispatch]);

    return (
        <>
            <Grid 
                container 
                direction="row"
                justifyContent="center"
                alignItems="center">
                    <Grid item>
                        {posts && posts.map((post: IPost) => <Paper key={post.id} elevation={3} style={{ marginTop: 10, width: '700px' }}>
                                <Post post={post} />
                            </Paper>) }
                    </Grid>

                

            </Grid>
        </>
    );
}