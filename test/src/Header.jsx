// Header.js
import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <TopHeader>
        <TopLeft>
          <a href="#">About Us</a>
          <a href="#">My Account</a>
          <a href="#">Wishlist</a>
          <a href="#">Order Tracking</a>
        </TopLeft>
        <TopRight>
          <a href="#">Need Help? Call us: <span>1900 - 888</span></a>
          <a href="#">USD</a>
          <a href="#">English</a>
        </TopRight>
      </TopHeader>
      <MainHeader>
        <Logo>
          <img src="logo-url" alt="logo" />
          <h2>Nest</h2>
        </Logo>
        <SearchBar>
          <input type="text" placeholder="Search for products" />
          <button>Search</button>
        </SearchBar>
        <Actions>
          <a href="#">Compare</a>
          <a href="#">Wishlist</a>
          <a href="#">Cart</a>
          <a href="#">Account</a>
        </Actions>
      </MainHeader>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  background-color: #fff;
`;

const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: #f1f1f1;
  font-size: 12px;
`;

const TopLeft = styled.div`
  display: flex;
  gap: 15px;

  a {
    text-decoration: none;
    color: #000;
  }
`;

const TopRight = styled.div`
  display: flex;
  gap: 15px;

  a {
    text-decoration: none;
    color: #000;
  }

  span {
    font-weight: bold;
    color: green;
  }
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 15px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 50px;
  }

  h2 {
    color: #3bb77e;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 400px;
  }

  button {
    padding: 10px;
    background-color: #3bb77e;
    color: white;
    border: none;
    border-radius: 4px;
    margin-left: 10px;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 15px;

  a {
    text-decoration: none;
    color: #000;
  }
`;

export default Header;
  