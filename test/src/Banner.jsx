import styled from 'styled-components';

const BannerContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
  padding: 40px;
`;

const BannerText = styled.div`
  max-width: 600px;
  text-align: center;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  p {
    color: #888;
    margin-bottom: 20px;
  }
`;

const SubscribeForm = styled.div`
  display: flex;
  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px 0 0 4px;
    width: 300px;
  }
  button {
    padding: 10px 20px;
    background-color: #27ae60;
    color: #fff;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
  }
`;

const Banner = () => (
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

export default Banner;
