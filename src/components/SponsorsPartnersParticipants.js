import React from 'react';
import styled from 'styled-components';

// Import the actual logos
import americanredcross from '../images/americanredcross.jpg';
import blockclubs from '../images/blockclubs.jpg';
import twooneone from '../images/211.png';
import threeoneone from '../images/311.png';
import mission from '../images/buffalocitymission.png';
import fuel from '../images/nationalfuel.png';
import fuel from '../images/natfuel2.png';
import grid from '../images/nationalgrid.png';
import police from '../images/police.png';
import ecss from '../images/ecss.jpg';


const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: var(--color-accent);
`;

const OrgGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    align-items: stretch;  

    @media (max-width: 1425px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1057px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
    display: block;
  }

`;

const OrgCard = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    background-color: white;
    display: flex;        
    flex-direction: column; 

    @media (max-width: 768px) {
        margin: 0 auto 1rem auto;
      }

  img {
    width: 125px;
    margin-bottom: 1rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  a {
    display: inline-block;
    margin-top: auto;
    color: blue;
    text-decoration: underline;
    width: 100%;
    background-color: #E34A3A;
    padding: 1rem;
    border-radius: 5px;
    text-decoration: none;
    color: white;
    font-weight: 700;
    transition: all 0.3s ease 0s;
   
    &:hover {
        background-color: #d44127;
        box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
        transform: translateY(-7px);
      }
  }

  p {
    color: #010713;
  }

  h2 {
   color: #D24335;
   font-weight: 900;
  }
`;

const SponsorsPartnersParticipants = ({id}) => {
  const actualData = [
    {
      id: 1,
      name: 'American Red Cross',
      description: 'The American Red Cross is dedicated to preventing and alleviating human suffering in emergencies through volunteer efforts.',
      providing: 'Disaster preparedness training, including first aid and emergency response, as well as an information table filled with important brochures and resources.',
      website: 'http://www.redcross.org',
      logo: americanredcross
    },
    {
      id: 2,
      name: 'Board of Block Club',
      description: 'The Board of Block Club aims to empower local communities through neighborhood involvement and awareness.',
      providing: 'Offering crucial information about local happenings, crime reports, and community improvement initiatives.',
      website: 'https://www.buffalony.gov/734/Buffalo-Board-of-Block-Clubs',
      logo: blockclubs
    },
    {
      id: 3,
      name: '211',
      description: '211 serves as a comprehensive hub for community, social, health, and disaster services.',
      providing: 'Information on various community services, including emergency food, housing, and mental health support.',
      website: 'http://www.211.org',
      logo: twooneone
    }, 
    {
        id: 4,
        name: 'National Fuel',
        description: 'National Fuel is a diversified energy company focused on the distribution of natural gas.',
        providing: 'Winter Kits containing essentials like blankets, hand warmers, and tips on conserving energy.',
        website: 'http://www.nationalfuel.com',
        logo: fuel
      }, 
      {
        id: 5,
        name: 'Buffalo City Mission',
        description: ' Buffalo City Mission aims to provide essential services to Buffalo homeless and impoverished population.',
        providing: ' Tabling at events, connecting with Project Homeless and Homeless Alliance, and distributing printouts that detail shelter locations and services offered.',
        website: 'http://www.buffalocitymission.org',
        logo: mission
      }, 
      {
        id: 6,
        name: 'National Grid',
        description: 'National Grid is one of the largest investor-owned energy companies, focused on electric and gas utility.',
        providing: 'Resources and information about power outages, including how to prepare and what to do when an outage occurs.',
        website: 'http://www.nationalgrid.com',
        logo: grid
      }, 
      {
        id: 7,
        name: 'Buffalo Police',
        description: 'The Buffalo Police Department is committed to maintaining public order and enhancing the quality of life for all Buffalo citizens.',
        providing: ' A meet-and-greet session with constituents to discuss concerns and engage with the community.',
        website: 'https://www.bpdny.org/',
        logo: police
      }, 
      {
        id: 8,
        name: '311',
        description: '311 is the go-to service for Buffalo residents to report non-emergency issues and get information.',
        providing: 'Providing residents with information about city services, local ordinances, and reporting mechanisms.',
        website: 'https://www.buffalony.gov/463/Contact-311',
        logo: threeoneone
      }, 
      {
        id: 9,
        name: 'Erie County Department of Social Services',
        description: 'The Erie County Department of Social Services provides various assistance programs and services to support the well-being of residents.',
        providing: 'The department will offer guidance on HEAP, SNAP, and STAR for warmth and food security, as well as emergency home repair services for a safe winter.',
        website: 'https://www3.erie.gov/socialservices/',
        logo: ecss
      }, 
  ];

  return (
    <Wrapper id={id}>
      <SectionTitle>Sponsors, Partners, and Participants</SectionTitle>
      <OrgGrid>
        {actualData.map((org) => (
          <OrgCard key={org.id}>
            <img src={org.logo} alt={org.name} />
            <h2>{org.name}</h2>
            <p>{org.description}</p>
            <h4>What They Will Be Providing:</h4>
            <p>{org.providing}</p>
            <a href={org.website}>Learn More</a>
          </OrgCard>
        ))}
      </OrgGrid>
    </Wrapper>
  );
};

export default SponsorsPartnersParticipants;
