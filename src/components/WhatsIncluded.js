import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import backgroundImage from '../images/buffalowinterbackground.jpg'; 

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

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  z-index: 100;
  display: flex;
  flex-direction: column;  // Changed from row to column
  align-items: center;  // Center-aligned items
  justify-content: center;
  width: 100%;
  color: white;
`;

const TextWrapper = styled.div`
flex: 1;
padding: 20px;
text-align: left;  // Changed from center to left
`;

const WhatTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--color-accent);
  text-align: center;
  z-index: 100;
`;

const ListItem = styled.li` 
font-size: 1.2rem;
  margin: 0.5rem 0;
  transition: margin-left 0.3s ease, color 0.3s ease;

  &:hover {
    margin-left: 1rem;
    color: #F39C12;
  }
`;

const BenefitsList = styled.ul`
  list-style-type: none;
  margin-left: 20px;
  z-index: 100;

  li {
    position: relative;
    padding-left: 1.5em;

    &::before {
      content: "✓";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1.2em;
      font-weight: bold;
      color: #e74c3c;
    }
  }
`;

const WhatsIncluded = () => {

    const animationProps = useSpring({
        to: { opacity: 1, transform: 'translateY(0)' },
        from: { opacity: 0, transform: 'translateY(-20px)' },
        config: { duration: 800 },
        delay: 300
      });
      
  return (
    <Wrapper>
        <animated.div style={animationProps}></animated.div>
      <WhatTitle>Equip Yourself for Winter Challenges</WhatTitle>
      <ContentWrapper>
        <TextWrapper>
          <BenefitsList>
            <ListItem>"Build Your Own" Winter Weather Care Kits</ListItem>
            <ListItem>Hands-on trainings and educational opportunities</ListItem>
            <ListItem>Food & Shelter Resources: Information on local shelters and food resources.</ListItem>
            <ListItem>Register for Assistance Programs: Sign up for crucial support programs.</ListItem>
            <ListItem>Community Engagement: Foster a sense of community and shared responsibility.</ListItem>
          </BenefitsList>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default WhatsIncluded;
