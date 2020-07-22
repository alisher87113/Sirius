import React from 'react';
import styled from 'styled-components';

// Styling right side holder
const RightSideStyled = styled.div`
  position: relative;
  width: 39.8rem;
  margin-left: 2.5rem;
`;

// Next lesson box
const NextLesson = styled.div`
  width: 39.8rem;
  height: 8.5rem;
  background-color: red;
  background: linear-gradient(189.79deg, #c71eb4 -5.64%, #6f2fb8 94.22%);
  border-radius: 1rem;
  position: absolute;
  top: 0;
  right: 0rem;
`;

const RightSide = () => {
  return (
    <RightSideStyled>
      <NextLesson>hyyh</NextLesson>
    </RightSideStyled>
  );
};

export default RightSide;
