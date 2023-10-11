import React from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  background: transparent;
  padding: 1rem;
  z-index: 1000;
  position: absolute;
  width: 100%;
`;

const NavItem = styled.a`
  margin-left: 1.5rem;
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffd700; // Change to your desired hover color
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavItem href="#about">ABOUT</NavItem>
      <NavItem href="#locations-dates">LOCATIONS AND DATES</NavItem>
      <NavItem href="#sponsors">SPONSORS</NavItem>
      <NavItem href="#register">REGISTER</NavItem>
    </NavbarWrapper>
  );
};

export default Navbar;
