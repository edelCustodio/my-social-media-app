import { TextField } from "@mui/material";

export interface IWriteCommentHandler {
    writeCommentHandler: Function;
}

export const WriteComment = ({ writeCommentHandler }: IWriteCommentHandler) => {


    const writeHandler = (e: any) => {

        if (e.key === "Enter") {
            e.preventDefault();
            // Do more work
            writeCommentHandler(e.target.value);

            e.target.value = '';
        }
        
    }

    return (
        <>
            <TextField style={{ margin: 10, width: '96%' }}
                onKeyDown={(e: any) => writeHandler(e)}
                multiline
                rows={2}
                placeholder="Your comment goes here..."
                />
        </>
    );
}