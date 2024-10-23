import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Banner from './Banner';
import Categories from './Categories';

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Banner />
      <Categories />
    </AppContainer>
  );
}

export default App;
