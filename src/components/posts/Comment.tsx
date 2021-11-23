import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { IComment } from "../../models";

export interface ICommentProps {
    comment: IComment;
}


export const Comment = ({ comment }: ICommentProps) => {

    const imgLink = "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";


    return (
        <>
            <Paper style={{ padding: "40px 20px", marginTop: 100 }}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar alt="Remy Sharp" src={imgLink} />
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                        <h4 style={{ margin: 0, textAlign: "left" }}>{comment.name}</h4>
                        <p style={{ textAlign: "left" }}>
                        {comment.body}{" "}
                        </p>
                        <p style={{ textAlign: "left", color: "gray" }}>
                            posted 1 minute ago
                        </p>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
}