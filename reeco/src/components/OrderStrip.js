import react from 'react'
import styled from 'styled-components';


const BreadcrumbWrapper = styled.div`
  display: flex;
 flex-direction: column;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  
`;

const BreadcrumbText = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-left:40px;
  gap: 5px;
  color:grey;
`;

const OrderIdText = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px; 
  color:Black;
  padding-bottom:10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px; 
  padding-bottom:10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: darkgreen;
  color: white;
  cursor: pointer;
  border:none;
  border-radius:20px;
`;
const OrderIdWrapper = styled.div`
  display:flex;
  gap:810px;
  padding-left:40px;
  
`;


const OrderStrip = () => {
    return (
        <>
            <BreadcrumbWrapper>
                <BreadcrumbText>
                    Orders
                    <span>&#9658;</span> 
                    <u>Order12345</u> 
                </BreadcrumbText>
                <OrderIdWrapper>
                    <OrderIdText>Order12345</OrderIdText>
                    <ButtonWrapper>
                        <Button>Back</Button>
                           <Button>Approve Order</Button>
                    </ButtonWrapper>
                </OrderIdWrapper>
            </BreadcrumbWrapper>
        </>
    )
}
export default OrderStrip;