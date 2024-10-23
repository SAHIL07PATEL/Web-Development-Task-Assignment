import React from 'react';
import styled from 'styled-components';

const TopBar = styled.div`
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 0.9rem;
  color: #555;

  a {
    margin-left: 15px;
    color: #555;
    text-decoration: none;
  }

  a:hover {
    color: #27ae60;
  }
`;

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ddd;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #27ae60;
  
  img {
    margin-right: 10px;
    width: 40px;
    height: 40px;
  }
`;

const SearchBar = styled.div`
  flex-grow: 1;
  margin: 0 20px;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
  }

  select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  font-size: .9rem;

  div {
    margin-right: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative; /* Added for positioning the badge */
  }
`;

const Badge = styled.div`
  width: 12px;
  height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  border-radius: 50%;
  font-size: 9px;
  color: white;
  position: absolute;
  top: -12px;
  left: 49px; 
`;

const NavBar = styled.nav`
  background-color: #fff;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    margin: 0 15px;
    text-decoration: none;
    color: #333;
  }

  a:hover {
    color: #27ae60;
  }

  button {
    background-color: #27ae60;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Header = () => {
    return (
        <>
            <TopBar>
                <div>
                    <a href="#">About Us</a>
                    <a href="#">My Account</a>
                    <a href="#">Wishlist</a>
                    <a href="#">Order Tracking</a>
                </div>
                <div>Get great devices up to 50% off | View details</div>
            </TopBar>

            <MainHeader>
                <Logo>
                    <img src="https://marketplace.canva.com/EAFzje8Pffo/1/0/1600w/canva-colorful-illustrative-organic-grocery-online-shop-logo-Alka_dqR_gQ.jpg" alt="Logo" />
                    <span>Nest</span>
                </Logo>

                <SearchBar>
                    <select>
                        <option>All Categories</option>
                        <option>Electronics</option>
                        <option>Groceries</option>
                        <option>Fashion</option>
                    </select>
                    <input type="text" placeholder="Search" />
                </SearchBar>

                <Icons>
                <div>
                        <select style={{ marginRight: '5px' }}>
                            <option value="">Select Your Location</option>
                            <option value="rajesthan">Rajesthan</option>
                            <option value="gujarat">Gujarat</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="channai">Channai</option>
                            <option value="mumbia">Mumbia</option>
                        </select>
                    </div>
                    <div>
                        <Badge>0</Badge>
                        <i className="ri-exchange-line" style={{ fontSize: '22px', paddingRight: "5px" }}></i>
                        <span>Compare</span>
                    </div>
                    <div>
                        <Badge>0</Badge>
                        <i className="ri-heart-line" style={{ fontSize: '22px', paddingRight: "5px" }}></i>
                        <span>Wishlist</span>
                    </div>
                    <div>
                        <Badge>0</Badge>
                        <i className="ri-shopping-cart-line" style={{ fontSize: '22px', paddingRight: "5px" }}></i>
                        <span>Cart</span>
                    </div>
                    <div>
                        <i className="ri-user-line" style={{ fontSize: '22px', paddingRight: "5px" }}></i>
                        <span>Account</span>
                    </div>
                </Icons>
            </MainHeader>

            <NavBar>
                <button>Browse All Categories</button>
                <div>
                    <a href="#">Hot Deals</a>
                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">Vendors</a>
                    <a href="#">Mega Menu</a>
                    <a href="#">Blog</a>
                    <a href="#">Pages</a>
                    <a href="#">Contact</a>
                </div>
                <div>Need Help? Call Us: 1900-888</div>
            </NavBar>
        </>
    );
};

export default Header;
