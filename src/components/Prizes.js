import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../images/snowbackground.jpg'; 
import giftcards from '../images/giftcards.jpg'; 

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  padding: 6rem 1rem;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(1, 7, 19, 0.9);
  padding: 3rem;
  border-radius: 15px;
  text-align: center;
  z-index: 50;

  @media (max-width: 950px) {
    display: block;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 3rem;
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: left;

  h1, h2, h3 {
    color: var(--color-accent);
  }
`;

const InfoTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const InfoParagraph = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
  line-height: 1.6;
`;

const Prizes = ({ id }) => {
  return (
    <InfoWrapper id={id}>
      <ContentContainer>
        <ImageContainer>
          <img src={giftcards} alt="Tops Gift Cards" />
        </ImageContainer>
        <TextContainer>
          <InfoTitle>Door Prizes At Each Event!</InfoTitle>
          <InfoParagraph>
          At every event in this series, we have exciting door prizes up for grabs, including a chance to win a $100 Tops Markets Gift Card! The best part? Everyone who registers for the event is automatically entered into these fantastic prize drawings. So, mark your calendars because these special drawings will take place at each event. Join us for a chance to walk away with some fantastic prizes and valuable information!
          </InfoParagraph>
          <h3>Thank you to Tops Markets for their generous partership!</h3>
        </TextContainer>
      </ContentContainer>
    </InfoWrapper>
  );
};

export default Prizes;
