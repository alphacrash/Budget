import { Typography } from "@mui/material"
import RichTextEditor from "./RichTextEditor"

function RichTextCreate() {
    return (
        <>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Create a Note
            </Typography>
            <RichTextEditor />
        </>
    )
}

export default RichTextCreate