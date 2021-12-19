import { useState } from "react"
import { Box, Button, Container, Stack, Typography } from '@mui/material';

import ReusableTable from "../ReusableTable";

// Mock Data
import users from './mockData/users.json'
import cars from './mockData/cars.json'
import drugs from './mockData/drugs.json'

function DemoTable() {
    const [data, setData] = useState(users);
    const [title, setTitle] = useState("Users")

    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6
            }}
        >
            <Container>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Reusable Table
                </Typography>
                <Stack
                    sx={{ mt: 2, mb: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button variant="outlined" onClick={() => { setData(users); setTitle("users") }}>
                        Users
                    </Button>
                    <Button variant="outlined" onClick={() => { setData(cars); setTitle("cars") }}>
                        Cars
                    </Button>
                    <Button variant="outlined" onClick={() => { setData(drugs); setTitle("drugs") }}>
                        Drugs
                    </Button>
                </Stack>
                <ReusableTable title={title} data={data} />
            </Container >
        </Box >
    );
}

export default DemoTable