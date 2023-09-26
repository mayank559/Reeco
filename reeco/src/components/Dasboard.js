
import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import PrintIcon from '@mui/icons-material/Print';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import TableCell from '@mui/material/TableCell';
import styled from 'styled-components';
import { useSelector } from 'react-redux';


const Button = styled.button`
  padding: 8px 16px;
  background-color: white;
  color: darkgreen;
  border: 1px solid darkgreen;
  cursor: pointer;
  border-radius:20px;
`;


const Dashboard = () => {
    const tableData = useSelector((state) => state.table.data);

    return (
        <>
            <Paper elevation={3} style={{
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)', marginTop: '30px',
                marginLeft: '40px', width: '1150px', padding: '20px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ border: '0.1px solid grey', borderRadius: '30px' }}>
                        <InputBase
                            placeholder="Search..."
                            inputProps={{ style: { width: '300px', paddingLeft: '15px' } }}
                        />
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </div>

                    <div style={{ flex: '1' }}></div>

                    <Button>Add Item</Button>


                    <IconButton>
                        <PrintIcon />
                    </IconButton>
                </div>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell>Brand</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Total</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell style={{display:'flex', alignItems:'center'}}>
                                        <img
                                            src={process.env.PUBLIC_URL + row.productImage}
                                            alt={row.productName}
                                            style={{ width: '50px', height: '50px' }}
                                        />
                                        {row.productName}
                                    </TableCell>
                                    <TableCell>{row.brand}</TableCell>
                                    <TableCell>{row.price}</TableCell>
                                    <TableCell>{row.quantity}</TableCell>
                                    <TableCell>{row.total}</TableCell>
                                    <TableCell>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <span>{row.status}</span>
                                            <div>
                                                <IconButton>
                                                    <CheckIcon />
                                                </IconButton>
                                                <IconButton>
                                                    <CloseIcon />
                                                </IconButton>
                                                <IconButton>
                                                    <EditIcon />
                                                </IconButton>
                                            </div>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>
    )
}

export default Dashboard;