import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, Typography, Input, Stack } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import ExportToExcel from '../services/ExportToExcel';

// Sorting
const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = useState(config);

    const sortedItems = useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};

function ReusableTable({ title, data }) {
    const [query, setQuery] = useState('')
    const [filteredData, setFilteredData] = useState(data)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [page, setPage] = useState(0);

    const { items, requestSort } = useSortableData(filteredData);

    const columns = data[0] && Object.keys(data[0])

    // Search
    useEffect(() => {
        const cols = data[0] && Object.keys(data[0])
        function search(rows) {
            const newData = rows.filter((row) => cols.some(
                (column) => row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
            ))
            setFilteredData(newData)
        }
        search(data);
    }, [data, query])

    // Pagination
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Extra
    function toTitleCase(string) {
        let sentence = string.toLowerCase().split("_");
        for (let i = 0; i < sentence.length; i++) {
            sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
        return sentence.join(" ");
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Toolbar color="primary">
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {title.toUpperCase()}
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Box>
                                <Input type="text" placeholder='Search' value={query} onChange={(event) => setQuery(event.target.value)} />
                            </Box>

                        </Stack>
                    </Toolbar>
                    <Table>
                        <TableHead>
                            <TableRow>{filteredData[0] && columns.map((heading, index) => <TableCell key={index}>
                                <TableSortLabel onClick={() => requestSort(heading)}>{toTitleCase(heading)}</TableSortLabel>
                            </TableCell>)}</TableRow>
                        </TableHead>
                        <TableBody>
                            {items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => <TableRow key={index}>
                                {
                                    columns.map((column, index) => <TableCell key={index}>{row[column]}</TableCell>)
                                }
                            </TableRow>)}
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={items.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableContainer>
                <Box sx={{ p: 2 }} justifyContent="flex-end">
                    <ExportToExcel apiData={filteredData} fileName="table" />
                </Box>
            </Paper>
        </Box>
    )
}

export default ReusableTable