
import React from 'react';
import { useState } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import tableReducer, { updateStatus } from '../redux/tableSlice.js';
import Popup from './Popup.js';


const Button = styled.button`
  padding: 8px 16px;
  background-color: white;
  color: darkgreen;
  border: 1px solid darkgreen;
  cursor: pointer;
  border-radius:20px;
`;
const statusColors = {
    approved: 'green',
    missing: 'red',
    'urgent-missing': 'orange',
};

const Dashboard = () => {
    const tableData = useSelector((state) => state.table.data);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [productNameForPopup, setProductNameForPopup] = useState('');
    const [statusToUpdate, setStatusToUpdate] = useState('');
    const dispatch = useDispatch();

    const handleStatusUpdate = (index, newStatus) => {

        dispatch(updateStatus({ index, status: newStatus }));
    };

    const handleCrossIconClick = (index) => {

        setIsPopupOpen(true);
        setProductNameForPopup(tableData[index].productName);

        setStatusToUpdate('urgent-missing');
    };

    const handleCheckIconClick = (index) => {

        setStatusToUpdate('approved');

        handleStatusUpdate(index, 'approved');
    };

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
                                    <TableCell style={{ display: 'flex', alignItems: 'center' }}>
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
                                    <TableCell style={{ textAlign: 'none' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <span
                                                style={{
                                                    width:'100px',
                                                    textAlign:'center',
                                                    backgroundColor: statusColors[row.status],
                                                    color: 'white',
                                                    borderRadius: '30px',
                                                    padding: '6px 12px',
                                                }}
                                            >{row.status}</span>
                                            <div>
                                                <IconButton
                                                    onClick={() => handleCheckIconClick(index)}
                                                    style={{
                                                        color: row.status === 'approved' ? '#42ed42' : 'inherit',
                                                    }}
                                                >
                                                    <CheckIcon />
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => handleCrossIconClick(index)}
                                                    style={{
                                                        color: productNameForPopup === row.productName ? 'red' : 'inherit',
                                                    }}
                                                >
                                                    <CloseIcon />
                                                </IconButton>
                                                <span style={{ margin: '10px 0 0 10px' }}>Edit</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {isPopupOpen && (
                                <Popup
                                    productName={productNameForPopup}
                                    onClose={() => setIsPopupOpen(false)}
                                    onUpdateStatus={(newStatus) => {

                                        handleStatusUpdate(tableData.findIndex((item) => item.productName === productNameForPopup), newStatus);
                                        setIsPopupOpen(false);
                                    }}
                                />
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>
    )
}

export default Dashboard;