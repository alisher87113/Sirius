import React from 'react';
import styled from 'styled-components';
import card2Img from '../images/card2Img.png';
import pluto from '../images/planet_2 copy.png';
import neptune from '../images/planet_4.png';
import saturn from '../images/planet_14 copy.png';

const CardsStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-right: 2.5rem;
`;

const CardStyled = styled.div`
  width: 32%;
  height: 20rem;
  border-radius: 1rem;
`;

// Styling cards extending common styles
const AwardsStyled = styled(CardStyled)`
  position: relative;
  background: linear-gradient(208.45deg, #334ffe 7.38%, #6c2feb 95.63%);
`;
const TrainingStyled = styled(CardStyled)`
  background: linear-gradient(180deg, #b00cc8 0%, #600398 100%);
  position: relative;
`;
const InvitationStyled = styled(CardStyled)`
  background: linear-gradient(192.3deg, #1ac9b7 10.29%, #4da8ee 90.89%);
`;

// Creating inner text content holder
const InnerContentHolder = styled.div`
  padding-left: 3rem;
  padding-top: ${(props) => props.paddingTop};
  padding-right: ${(props) => props.paddingRight};
  @media (max-width: 1365px) {
    padding-right: 2.1rem;
    padding-left: 2rem;
  }
`;

// creating cards inner elements
const Header = styled.h3`
  font-size: 2.2rem;
  line-height: 3rem;
  font-style: normal;
  font-weight: 600;
  margin: 0;
  padding-bottom: 1rem;

  color: #ffffff;
`;

const Description = styled.p`
  font-size: 1.4rem;
  line-height: 1.9rem;
  font-style: normal;
  font-weight: normal;
  color: #ffffff;
  opacity: 0.8;
  margin: 0;
  padding-right: ${(props) => props.paddingRight};
  @media (max-width: 1365px) {
    padding-right: ${(props) =>
      props.paddingRight ? props.paddingRight : '6rem'};
  }
`;

// Positioning image for 2nd card
const ImgStyled = styled.img`
  position: absolute;
  bottom: 0;
  right: 5.8%;
  @media (max-width: 1365px) {
    right: 0;
  }
`;

// Creating GET Started button
const Button = styled.a`
  font-size: 1.2rem;
  line-height: 1.6rem;
  font-style: normal;
  font-weight: bold;
  text-transform: uppercase;
  color: #540182;
  padding: 1.2rem 2rem;
  background-color: #ffffff;
  border-radius: 3.3rem;
  display: inline-block;
  position: absolute;
  bottom: 3rem;
  left: 3rem;
`;

// Positioning images in first card
const Pluto = styled.img`
  position: absolute;
  right: 14.3rem;
  bottom: 2rem;
`;

const Saturn = styled.img`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
`;

const Neptune = styled.img`
  position: absolute;
  top: 5.6rem;
  right: 3.5rem;
`;

const Cards = () => {
  return (
    <CardsStyled>
      <AwardsStyled>
        <InnerContentHolder paddingTop="2.2rem">
          <Header>Мои награды</Header>
          <Description paddingRight="6.3rem">
            Краткое описание раздела с наградами ученика
          </Description>
          <Neptune src={neptune} alt="planet" />
          <Saturn src={saturn} alt="planet" />
          <Pluto src={pluto} alt="planet" />
        </InnerContentHolder>
      </AwardsStyled>
      <TrainingStyled>
        <InnerContentHolder paddingTop="2.3rem" paddingRight="3rem">
          <Header>Абакус</Header>
          <Description paddingRight="5.5rem">
            Потренируй свой навык ментальной арифметики
          </Description>
          <Button>Начать</Button>
          <ImgStyled src={card2Img} alt="image" />
        </InnerContentHolder>
      </TrainingStyled>
      <InvitationStyled>
        <InnerContentHolder paddingTop="2rem" paddingRight="3.5rem">
          <Header>Приведи друга и получите по уроку в подарок</Header>
          <Description paddingRight="2rem">
            Узнай, за что ты можешь получить бонусы и ценные призы!
          </Description>
        </InnerContentHolder>
      </InvitationStyled>
    </CardsStyled>
  );
};

export default Cards;
