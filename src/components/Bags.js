import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../images/buffalosnow.png';
import { Link } from "gatsby";

const Wrapper = styled.div`
  position: relative;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 1rem;
  color: white;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8); 
    z-index: 0;
  }
`;

const ContentWrapper = styled.div`
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const TextWrapper = styled.div`
  text-align: left;
  font-size: 1.5rem;
`;

const WhatTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--color-accent);
  margin-bottom: 1rem;
  z-index: 10;
  padding-bottom: 1rem;
`;

const ListItem = styled.li`
  font-size: 1.4rem;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
`;

const SuppliesList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  z-index: 100;
`;

const Checkmark = styled.span`
  font-size: 1.5rem;
  margin-right: 1rem;
  color: #e74c3c;
`;

const Note = styled.p`
  font-size: 1.5rem;
  margin-top: 2rem;
`;

const RegisterButton = styled.button`

  color: red;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e74c3c;
  }
`;

const Bags = () => {
  return (
    <Wrapper>
      <WhatTitle>Build Your Own Emergency Preparedness Bag</WhatTitle>
      <ContentWrapper>
        <TextWrapper>
          <p>
            Each registered participant at our event will have the opportunity to build their own emergency preparedness bag. Supplies included in the bag are as follows:
          </p>
          <SuppliesList>
            <ListItem>
              <Checkmark>✓</Checkmark>
              Totes
            </ListItem>
            <ListItem>
              <Checkmark>✓</Checkmark>
              Winter gloves and/or neck warmers
            </ListItem>
            <ListItem>
              <Checkmark>✓</Checkmark>
              Can opener
            </ListItem>
            <ListItem>
              <Checkmark>✓</Checkmark>
              Flashlight & batteries
            </ListItem>
            <ListItem>
              <Checkmark>✓</Checkmark>
              Emergency Blankets
            </ListItem>
            <ListItem>
              <Checkmark>✓</Checkmark>
              First aid kit
            </ListItem>
            <ListItem>
              <Checkmark>✓</Checkmark>
              Matches
            </ListItem>
            <ListItem>
              <Checkmark>✓</Checkmark>
              Hand warmers
            </ListItem>
            <ListItem>
              <Checkmark>✓</Checkmark>
              Winter Ride Guides
            </ListItem>
            <ListItem>
              <Checkmark>✓</Checkmark>
              National Fuel Bags
            </ListItem>
            <ListItem>
              <Checkmark>✓</Checkmark>
              COVID tests
            </ListItem>
            <ListItem>
              <Checkmark>✓</Checkmark>
              Candles
            </ListItem>
          </SuppliesList>
          <Note>And more! Only registered guests will be guaranteed bags, so register today!</Note>
          <RegisterButton><Link to="https://forms.gle/76ZgbPz9XiLwcbpu6">Register Now</Link></RegisterButton>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Bags;
