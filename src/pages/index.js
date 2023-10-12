import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";
import Hero from "../components/Hero";
import WhatsIncluded from '../components/WhatsIncluded';
import LocationsAndDates from '../components/LocationsAndDates';
import SponsorsPartnersParticipants from '../components/SponsorsPartnersParticipants';
import Contact from '../components/Contact';
import EventInfo from '../components/EventInfo';
import Navbar from '../components/Navbar';
import 'normalize.css';


const PageWrapper = styled.div`
  font-family: Arial, sans-serif;
`;

const RegisterLink = styled.a`
  background-color: #e74c3c;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
`;

const IndexPage = () => {
  return (
    <PageWrapper>
      <Hero />
      <EventInfo id="about" />
      <LocationsAndDates id="locations-dates"/>
      <WhatsIncluded />
      <SponsorsPartnersParticipants id="sponsors"/>
      <Contact />
    </PageWrapper>
  );
};

export default IndexPage;
