// registration.js
import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../images/buffalowinterbackground.jpg'; 
import 'normalize.css';

const RegistrationWrapper = styled.div`
  position: relative;
  background-image: url(${backgroundImage});
  width: 100vw;
  height: 100vh;
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
  width: 50%;
  border-radius: 15px;
  z-index: 50;
  text-align: center;

  div {
    padding: 1rem 0;
  }
  input {
    width: 100%;
    text-align: center;
  }
  textarea {
    width: 100%;
    height: 7rem;
    text-align: center;
  }
  button {
    background: var(--color-accent);
    padding: 1rem 2rem;
    border-radius: 10px;
    width: 50%;
  }
  h1 {
    color: var(--color-accent);
  }
  
`;



const Contact = () => {
  return (
    <RegistrationWrapper>
       <FormContainer>
        <h1>Contact Us</h1>
       <form action="https://formspree.io/f/mrgwrpqv" method="POST">
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="_replyto" required />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
        </FormContainer> 
    </RegistrationWrapper>
  );
};

export default Contact;
