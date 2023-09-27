import React, { useState } from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  backgroundColor:'white';
   height:auto;
   width:250px; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  z-index: 9999;
`;

const Popup = ({ productName, onClose, onUpdateStatus }) => {
   
    const handleYesClick = () => {
       
        onUpdateStatus('urgent-missing');
    };

    const handleNoClick = () => {

        onUpdateStatus('missing');
    };

    return (
        <PopupContainer>
            <div style={{ fontWeight: 'bold' }}>Product is missing</div>
            <div>Is "{productName}" missing urgent?</div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' ,gap:'20px'}}>
                <button style={{backgroundColor:'white' ,border:'none',cursor:'pointer'}} onClick={handleYesClick}>Yes</button>
                <button style={{backgroundColor:'white' ,border:'none', cursor:'pointer'}} onClick={handleNoClick}>No</button>
            </div>
        </PopupContainer>
    );
};

export default Popup;
