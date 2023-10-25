import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../images/trees.jpg'; 
import giftcards from '../images/flushots.jpg'; 

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

const Shots = ({ id }) => {
  return (
    <InfoWrapper id={id}>
      <ContentContainer>
        <ImageContainer>
          <img src={giftcards} alt="Wegmans Flu Shots" />
        </ImageContainer>
        <TextContainer>
          <InfoTitle>Get Your Free Flu Shot!</InfoTitle>
          <InfoParagraph>
          We're pleased to announce that Wegmans Pharmacy will be at select locations, where they'll be administering free flu and COVID shots! To ensure you receive your flu and/or COVID shot, it's important to register in advance.

If you plan to attend the event at the Northwest Buffalo Community Center or Central Library, please indicate this when signing up. We'll provide you with information on the nearest location where you can conveniently get your free flu and/or COVID shot. Your health and well-being are our priorities, and we want to make it easy for you to stay protected during the winter season. Register today to secure your spot and access this valuable service!
          </InfoParagraph>
          <h3>Thank you to Wegmans for their generous partership!</h3>
        </TextContainer>
      </ContentContainer>
    </InfoWrapper>
  );
};

export default Shots;
