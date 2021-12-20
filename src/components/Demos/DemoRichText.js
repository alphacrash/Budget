import {
    Button,
    Stack,
    Box, Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import MultiUseCard from '../MultiUseCard/MultiUseCard';
import RichTextCreate from '../RichText/RichTextCreate';
import RichTextList from '../RichText/RichTextList';
import Spinner from '../Spinner';

function Notes() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 1000);
    }, [show, setShow]);

    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6
            }}
        >
            <MultiUseCard
                barPosition="left"
                cardType="primary"
                iconName="ic_blue_alert"
                cardBackground={false}
                actionNode={
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Link to="edit">
                            <Button variant="outlined" onClick={() => setShow(true)}>
                                Create
                            </Button>
                        </Link>
                        <Link to="list">
                            <Button variant="outlined" onClick={() => setShow(true)}>
                                View
                            </Button>
                        </Link>
                    </Stack>
                }
            >
                <Link to="">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Rich Text
                    </Typography>
                </Link>
            </MultiUseCard>
            <MultiUseCard
                barPosition="top"
                cardType="light"
                iconName="ic_blue_alert"
                cardBackground={true}
            >
                {show ?
                    <Spinner message="Loading notes..." />
                    :
                    <Routes>
                        <Route path="edit" element={<RichTextCreate />} />
                        <Route path="list" element={<RichTextList />} />
                    </Routes>
                }
            </MultiUseCard>
        </Box>
    )
}

export default Notes