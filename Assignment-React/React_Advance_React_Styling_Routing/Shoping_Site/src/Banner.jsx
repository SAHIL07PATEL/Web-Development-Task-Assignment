import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  background-color: #f0f4e3;
  background-image: url('https://unsplash.com/photos/GXMm5H3jG6A');
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const BannerText = styled.div`
  max-width: 500px;

  h1 {
    font-size: 36px;
    margin-bottom: 20px;
    color: #333;
  }

  p {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const SubscribeForm = styled.div`
  display: flex;

  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-right: 10px;
  }

  button {
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    input {
      margin-bottom: 10px;
      width: 100%;
    }

    button {
      width: 100%;
    }
  }
`;

const Banner = () => {
  return (
    <BannerContainer>
      <BannerText>
        <h1>Don't miss amazing grocery deals</h1>
        <p>Sign up for the daily newsletter</p>
        <SubscribeForm>
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </SubscribeForm>
      </BannerText>
    </BannerContainer>
  );
};

export default Banner;
