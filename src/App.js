import React from 'react';
import './App.css';
import styled from 'styled-components';
import Cards from './components/Cards';
import Calendar from './components/Calendar';
import RightSide from './components/RightSide';
const AppStyled = styled.div`
  max-width: 164rem;
  margin: auto;
  background-color: yellow;
`;

const Inner = styled.div`
  padding: 6rem 9.4rem 6rem 6rem;
  display: flex;
  justify-content: space-between;
`;

const App = () => {
  return (
    <AppStyled>
      <Inner>
        <div>
          <Cards />
          <Calendar />
        </div>
        <RightSide />
      </Inner>
    </AppStyled>
  );
};

export default App;
