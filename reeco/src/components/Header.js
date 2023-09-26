import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import styled from 'styled-components';


const HeaderWrapper = styled.div`
  background-color: #035003;
  display: flex;
  padding: 16px;
  color: white;
`;

const Logo = styled.div`
  margin-left:20px;
  font-size: 24px;
  font-weight: bold;
`;

const NavItems = styled.div`
  display: flex;
  margin-left:40px;
  align-items: center;
  gap: 30px;
`;

const NavItem = styled.div`
  cursor: pointer;
`;

const CartProfileWrapper = styled.div`
  display: flex;
  margin-left:650px;
  align-items: center;
  gap: 30px;
`;

const ProfileText = styled.div`
  font-size: 14px;
`;

const DownwardArrow = styled.div`
  font-size: 16px;
  margin-top: 2px;
`;


const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>Reeco</Logo>
      <NavItems>
        <NavItem>Store</NavItem>
        <NavItem>Order</NavItem>
        <NavItem>Analytics</NavItem>
      </NavItems>
      <CartProfileWrapper>
      <FiShoppingCart size={24} /> 
        <ProfileText>Hello, James</ProfileText>
        <DownwardArrow>&#9660;</DownwardArrow>
      </CartProfileWrapper>
    </HeaderWrapper>
  );
};

export default Header;

