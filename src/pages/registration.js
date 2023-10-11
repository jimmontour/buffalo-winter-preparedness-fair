// registration.js
import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../images/councilchambers.jpeg'; 

const RegistrationWrapper = styled.div`
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
    z-index: -100;
  }
`;

const FormContainer = styled.div`
  background-color: rgba(1, 7, 19, 0.8);
  padding: 3rem;
  border-radius: 15px;
  z-index: 50;
  text-align: center;
`;

const RegistrationTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  z-index: 100;
  color: var(--color-accent);
`;

const Registration = () => {
  return (
    <RegistrationWrapper>
      <FormContainer>
        <RegistrationTitle>Registration Form</RegistrationTitle>
        <p>Please fill out the form below to register to attend one Winter Preparedness Event. </p>
        <iframe 
          title="Google Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSeN23P1JXUPmZ_YigzLgV0aFAifgJv1yYUWTAVLBx7f0zamkg/viewform?embedded=true" 
          width="800" 
          height="1000" 
          frameborder="0" 
          marginheight="0" 
          marginwidth="0">
          Loading…
        </iframe>
      </FormContainer>
    </RegistrationWrapper>
  );
};

export default Registration;
