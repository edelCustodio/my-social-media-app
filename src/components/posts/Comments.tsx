import { CardContent, Collapse, Divider, Typography } from "@mui/material";
import { IComment } from "../../models";
import { Comment } from './Comment';
import { WriteComment } from "./WriteComment";

export interface CommentsProps {
    expanded: boolean;
    comments: IComment[];
    writeCommentHandler: Function;
}

export const Comments = ({ expanded, comments, writeCommentHandler }: CommentsProps) => {

    return (
        <>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <WriteComment writeCommentHandler={writeCommentHandler} />
                <Divider />
                <CardContent>
                    {(comments && comments.length > 0) && comments.map((comment: IComment) => <Comment key={comment.id} comment={comment} />)}
                </CardContent>
            </Collapse>
        </>
    );
}