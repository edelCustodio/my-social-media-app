import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Comments } from './Comments';
import { IComment, IPost } from '../../models';
import { SocialState } from '../../store/types';
import { useDispatch, useSelector } from 'react-redux';
import { CommentSelectors } from '../../store/selectors';
import { useEffect } from 'react';
import { Dispatch } from 'redux';
import { getComments, saveComment } from '../../store/actions/commentActions';


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}
  
const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
}));

export interface IPostProps {
    post: IPost;
}

export const Post = ({ post }: IPostProps) => {

    const [expanded, setExpanded] = React.useState(false);
    const dispatch: Dispatch<any> = useDispatch();
    const { selectCommentsByPostId } = CommentSelectors;


    const comments = useSelector((state: SocialState) => selectCommentsByPostId(state, post.id));

    useEffect(() => {

    }, [comments]);

    const handleExpandClick = () => {
        if (comments.length === 0) {
            dispatch(getComments(post.id));
        }

        setExpanded(!expanded);
    };


    const writeCommentHandler = (text: string) => {
        const comment = {
            postId: post.id,
            body: text,
            email: 'me@email.com',
            name: 'fulanito'
        } as IComment;
        dispatch(saveComment(comment));
    }

    return (
        <>
        <Card sx={{ maxWidth: 700 }}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={post.title}
                subheader="September 14, 2016"
            />
            {/* <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
            /> */}
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {post.body}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Comments expanded={expanded} comments={comments} writeCommentHandler={writeCommentHandler} />
            </Card>
        </>
    );
}