// NewsletterSection.js
import React from "react";
import styled from "styled-components";

const NewsletterSection = () => {
  return (
    <NewsletterContainer>
      <TextContainer>
        <h2>Don't miss amazing grocery deals</h2>
        <p>Sign up for the daily newsletter</p>
      </TextContainer>
      <InputContainer>
        <input type="email" placeholder="Your email address" />
        <button>Subscribe</button>
      </InputContainer>
    </NewsletterContainer>
  );
};

const NewsletterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  background-color: #f3f6f9;
  border-radius: 15px;
  margin: 20px;
`;

const TextContainer = styled.div`
  h2 {
    font-size: 24px;
    color: #000;
  }

  p {
    font-size: 16px;
    color: #666;
  }
`;

const InputContainer = styled.div`
  display: flex;

  input {
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 300px;
  }

  button {
    padding: 15px;
    background-color: #3bb77e;
    color: white;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
  }
`;

export default NewsletterSection;
