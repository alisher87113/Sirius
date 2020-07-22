import React from 'react';
import styled from 'styled-components';
import NextLesson from './NextLesson';
import stroke from '../images/обводка (Stroke).png';
import emblem1 from '../images/emblem.png';
import emblem2 from '../images/emblem_2.png';
import emblem3 from '../images/emblem_3.png';
import emblem4 from '../images/emblem_4.png';

const emblems = [emblem1, emblem2, emblem3, emblem4];

// Styling right side holder
const RightSideStyled = styled.div`
  position: relative;
  /* width: 39.8rem; */

  flex: 0 0 39.8rem;
  margin-left: 2.5rem;
  @media (max-width: 1365px) {
    flex: 0 0 18.9rem;
  }
`;

// Styling frame(or window)
const Frame = styled.img`
  position: absolute;
  top: 14.1rem;
  @media (max-width: 1365px) {
    top: 17.1rem;
    width: 11.2rem;
    left: 4rem;
  }
`;

// Styling emblems holder
const Emblems = styled.div`
  display: flex;

  position: absolute;
  top: 42.2rem;
  @media (max-width: 1365px) {
    flex-direction: column;
    top: 35rem;
    left: 5.6rem;
    align-items: center;
  }
`;

// Styling EACH emblem
const Emblem = styled.img`
  margin-right: 2rem;
`;

const RightSide = () => {
  return (
    <RightSideStyled>
      <NextLesson />
      <Frame src={stroke} />
      <Emblems>
        {emblems.map((emblem) => {
          return <Emblem src={emblem} />;
        })}
      </Emblems>
    </RightSideStyled>
  );
};

export default RightSide;
