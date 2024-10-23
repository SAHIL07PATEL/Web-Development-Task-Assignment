// App.js
import React from "react";
import styled from "styled-components";
import SearchComponent from "./SearchComponent";
// import Header from "./Header";
// import NavBar from "./NavBar";
// import NewsletterSection from "./NewsletterSection";
// import CategoriesSection from "./CategoriesSection";

function App() {
  return (
    <MainContainer>
      {/* <Header />
      <NavBar />
      <NewsletterSection />
      <CategoriesSection /> */}

        <SearchComponent/>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  font-family: "Arial, sans-serif";
  background-color: #f9f9f9;
  padding: 0;
  margin: 0;
`;

export default App;
