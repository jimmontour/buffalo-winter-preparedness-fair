import React from 'react';
import styled from 'styled-components';


const ContactWrapper = styled.div`
  background-color: #010713;
  color: white;
  padding: 2rem;
  text-align: center;
  font-size: 0.8rem;  // Smaller base font size

  h2, h3 {
    color: var(--color-accent);
    font-size: 1.2rem;  // Smaller heading font size
  }
`;

const ContactList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.5rem;
`;

const ContactItem = styled.li`
  font-size: 0.9rem;  // Smaller font size
`;

const ContactLink = styled.a`
  color: #e74c3c;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = styled.footer`
  margin-top: 1rem;
`;

const Contact = ({id}) => {
  return (
    <ContactWrapper id={id}>
      <h2>Get Involved:</h2>
      <ContactList>
        <ContactItem><ContactLink href="#registration">Resident Registation</ContactLink></ContactItem>
        <ContactItem><ContactLink href="#volunteer">Volunteer Opportunities</ContactLink></ContactItem>
        <ContactItem><ContactLink href="#organization">Become A Sponsor</ContactLink></ContactItem>
        <ContactItem><ContactLink href="mailto:info@example.com">Media Inquiries</ContactLink></ContactItem>
      </ContactList>
      <h3>Follow the Buffalo Common Council:</h3>
      <ContactList>
        <ContactItem><ContactLink href="#facebook">Facebook</ContactLink></ContactItem>
        <ContactItem><ContactLink href="#twitter">Twitter</ContactLink></ContactItem>
        <ContactItem><ContactLink href="#instagram">Instagram</ContactLink></ContactItem>
      </ContactList>
      <Footer>
        © 2023 Buffalo Common Council. All Rights Reserved.
      </Footer>
    </ContactWrapper>
  );
};

export default Contact;
