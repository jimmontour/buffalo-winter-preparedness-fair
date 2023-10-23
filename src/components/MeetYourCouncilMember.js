import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import pridgen from '../images/pridgen.png';
import scanlon from '../images/scanlon.png';
import rivera from '../images/rivera.png';
import feroleto from '../images/feroleto.png';
import bollman from '../images/bollman.png';
import golombek from '../images/golombek.png';
import wingo from '../images/wingo.png';
import wyatt from '../images/pridgen.png';
import nowakowski from '../images/nowakowski.png';

const CouncilWrapper = styled.div`
position: relative;
background-color: #05215E;  
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 6rem 1rem;
color: white;

&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8); // Adjust the last value for opacity
  z-index: 1;
}
`;

const CouncilTitle = styled.h2`
text-align: center;
font-size: 2.5rem;
font-weight: bold;
color: var(--color-accent);
z-index: 100;
margin: 0;
padding: 1rem 0 3rem 0;
`;

const CouncilList = styled.div`
z-index: 100;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 20px;  // Add a little space between each card
width: 70%;  // Make the cards smaller
justify-items: center;
align-items: top;

@media (max-width: 1200px) {
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 20px;
  }

@media (max-width: 768px) {
    width: 100%;
    display: block;
  }
`;

const CouncilItem = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between; 
align-items: center; // Center items horizontally
border: 2px solid #e74c3c;
padding: 15px;
border-radius: 8px;
text-align: center;
width: 90%;
height: 100%; // Take full height
border: 2px solid #e74c3c;
padding: 15px;
border-radius: 8px;
text-align: center;
width: 90%;
background-color: white;
color: #010713;

@media (max-width: 1300px) {

}

@media (max-width: 768px) {
  margin: 0 auto 1rem auto;
}

button {
  display: inline-block;
background-color: #e74c3c;
color: #fff;
padding: 15px 30px;
font-size: 18px;
border-radius: 5px;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
text-decoration: none;
transition: all 0.3s ease 0s;
text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.8);  /* horizontal, vertical, blur, color */

&:hover {
  background-color: #d44127;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
  transform: translateY(-7px);
}
}
`;

const MemberName = styled.div`
font-size: 1.6rem;  
margin-top: 10px;
`;

const MemberTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const MeetYourCouncilMember = () => {
  const members = [
    {
      id: 1,
      name: 'Darius G. Pridgen',
      title: 'Ellicott Council Member',
      website: 'https://www.buffalony.gov/1129/Darius-G-Pridgen',
      photo: pridgen,
    },
    {
      id: 2,
      name: 'Christopher P. Scanlon',
      title: 'South Council Member',
      website: 'https://www.buffalony.gov/1139/Christopher-P-Scanlon',
      photo: scanlon,
    },
    {
      id: 3,
      name: 'David A. Rivera',
      title: 'Niagara Council Member',
      website: 'https://www.buffalony.gov/1133/David-A-Rivera',
      photo: rivera,
    },
    {
      id: 4,
      name: 'Joel P. Feroleto',
      title: 'Delaware Council Member',
      website: 'https://www.buffalony.gov/1143/Joel-P-Feroleto',
      photo: feroleto,
    },
    {
      id: 5,
      name: 'Bryan Bollman',
      title: 'Lovejoy Council Member',
      website: 'https://www.buffalony.gov/1147/Bryan-Bollman',
      photo: bollman,
    },
    {
      id: 6,
      name: 'Mitch Nowakowski',
      title: 'Fillmore Council Member',
      website: 'https://www.buffalony.gov/1151/Mitch-Nowakowski',
      photo: nowakowski,
    },
    {
      id: 7,
      name: 'Joseph Golombek, Jr.',
      title: 'North Council Member',
      website: 'https://www.buffalony.gov/1155/Joseph-Golombek-Jr',
      photo: golombek,
    },
    {
      id: 8,
      name: 'Ulysees O. Wingo, Sr.',
      title: 'Masten Council Member',
      website: 'https://www.buffalony.gov/1159/Ulysees-O-Wingo-Sr',
      photo: wingo,
    },
    {
      id: 9,
      name: 'Rasheed N.C. Wyatt',
      title: 'University Council Member',
      website: 'https://www.buffalony.gov/1163/Rasheed-NC-Wyatt',
      photo: wyatt,
    },
  ];

  return (
    <CouncilWrapper>
      <CouncilTitle>Meet Your Council Member</CouncilTitle>
      <CouncilList>
        {members.map((member, index) => (
          <CouncilItem key={index}>
             <img src={member.photo} alt={member.name} />
            <MemberName>{member.name}</MemberName>
            <MemberTitle>{member.title}</MemberTitle>
            <button><a href={member.website} target="_blank" rel="noreferrer">Learn More</a></button>
          </CouncilItem>
        ))}
      </CouncilList>
    </CouncilWrapper>
  );
};

export default MeetYourCouncilMember;
