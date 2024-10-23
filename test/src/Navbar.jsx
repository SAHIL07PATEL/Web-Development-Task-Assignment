// NavBar.js
import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <NavBarContainer>
      <CategoriesButton>Browse All Categories</CategoriesButton>
      <MenuItems>
        <a href="#">Hot Deals</a>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Shop</a>
        <a href="#">Vendors</a>
        <a href="#">Blog</a>
        <a href="#">Pages</a>
        <a href="#">Contact</a>
      </MenuItems>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const CategoriesButton = styled.button`
  background-color: #3bb77e;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
`;

const MenuItems = styled.div`
  display: flex;
  gap: 25px;

  a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
  }
`;

export default NavBar;
