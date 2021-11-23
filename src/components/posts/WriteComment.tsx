import { TextField } from "@mui/material";


export const WriteComment = () => {


    return (
        <>
            <TextField style={{ margin: 10, width: '96%' }}
                
                multiline
                rows={2}
                placeholder="Your comment goes here..."
                />
        </>
    );
}