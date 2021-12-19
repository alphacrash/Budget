import { Button, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { MultiUseCard } from "../MultiUseCard/MultiUseCard";
import RichTextViewer from "./RichTextViewer";

function RichTextList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = () => {
            axios.get('http://localhost:3001/api/rte').then((response) => {
                setData(response.data)
            })
        }
        getData();
    }, [])

    const deleteNote = (id) => {
        axios.delete(`http://localhost:3001/api/rte/${id}`)
        const filteredData = data.filter((item) => {
            return item.id !== id
        })
        setData(filteredData)
    }

    return (
        <>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                List of Notes
            </Typography>
            <Stack spacing={2}>
                {data.map((item) => (
                    <MultiUseCard
                        key={item.id}
                        barPosition="left"
                        cardType="dark"
                        iconName="ic_blue_alert"
                        cardBackground={false}
                        actionNode={
                            <Button
                                variant="outlined"
                                color="error"
                                onClick={() => { deleteNote(item.id) }}
                            >
                                Delete
                            </Button>
                        }
                    >
                        <Typography component="h3" variant="h6" color="primary">
                            Note {item.id}
                        </Typography>
                        <RichTextViewer data={item.rawState} />
                    </MultiUseCard>
                ))}

            </Stack>
        </>
    )
}

export default RichTextList