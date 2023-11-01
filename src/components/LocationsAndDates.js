import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Wrapper = styled.div`
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

const LocationsTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--color-accent);
  z-index: 100;
  margin: 0;
  padding: 1rem 0 3rem 0;
`;

const DatesList = styled.div`
z-index: 100;
display: grid;
grid-template-columns: repeat(5, 1fr); 
width: 80%;
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

const DateItem = styled.div`
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

const EventDate = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--color-accent);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const EventTime = styled.div`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const LocationName = styled.div`
  font-size: 1.2rem;
  margin-top: 10px;
`;

const LocationAddress = styled.div`
  margin-top: 10px;
  padding-bottom: 1rem;
  a {
    color: #010713;
    text-decoration: none;
   
  }
`;

const StyledImg = styled(Img)`
  border-radius: 8px; // Add any styles you want
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;


const StyledParagraph = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2rem;
  z-index: 100;
`;

const LocationsAndDates = ({id}) => {
    const data = useStaticQuery(graphql`
    query {
      northwest: file(relativePath: { eq: "northwest.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      belle: file(relativePath: { eq: "belle.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      centrallibrary: file(relativePath: { eq: "centrallibrary.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      delavan: file(relativePath: { eq: "delavan.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tosh: file(relativePath: { eq: "tosh.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Wrapper id={id}>
      <LocationsTitle>Locations & Dates</LocationsTitle>
      <DatesList>
        <DateItem>
          <EventDate>November 2, 2023</EventDate>
          <EventTime>5:30 PM - 7:30 PM</EventTime>
          <StyledImg as={Img} fluid={data.northwest.childImageSharp.fluid} alt="Northwest Buffalo Community Center" />
          <LocationName>Northwest Buffalo Community Center</LocationName>
          <LocationAddress><a href="https://maps.google.com/?q=155+Lawn+Avenue" target="_blank">155 Lawn Avenue</a></LocationAddress>
         
        </DateItem>
        <DateItem>
          <EventDate>November 8, 2023</EventDate>
          <EventTime>5:30 PM - 7:30 PM</EventTime>
          <StyledImg as={Img}fluid={data.belle.childImageSharp.fluid} alt="The Belle Center" />
          <LocationName>The Belle Center</LocationName>
          <LocationAddress><a href="https://maps.google.com/?q=104+Maryland+Street" target="_blank">104 Maryland Street</a></LocationAddress>
          
        </DateItem>
        <DateItem>
          <EventDate>November 11, 2023</EventDate>
          <EventTime>10:00 AM - 2:00 PM</EventTime>
          <StyledImg as={Img} fluid={data.centrallibrary.childImageSharp.fluid} alt="Buffalo Central Library" />
          <LocationName>Buffalo Central Library</LocationName>
          <LocationAddress><a href="https://maps.google.com/?q=1+Lafayette+Square" target="_blank">1 Lafayette Square</a></LocationAddress>
         
        </DateItem>
        <DateItem>
          <EventDate>November 14, 2023</EventDate>
          <EventTime>5:30 PM - 7:30 PM</EventTime>
          <StyledImg as={Img} fluid={data.delavan.childImageSharp.fluid} alt="Delavan Grider Community Center" />
          <LocationName>Delavan Grider Community Center</LocationName>
          <LocationAddress><a href="https://maps.google.com/?q=877+E+Delavan+Street" target="_blank">877 E. Delavan Street</a></LocationAddress>
         
        </DateItem>
        <DateItem>
          <EventDate>November 16, 2023</EventDate>
          <EventTime>5:30 PM - 7:30 PM</EventTime>
          <StyledImg as={Img} fluid={data.tosh.childImageSharp.fluid} alt="Tosh Collins Community Center" />
          <LocationName>Tosh Collins Community Center</LocationName>
          <LocationAddress><a href="https://maps.google.com/?q=35+Cazenovia+Street" target="_blank">35 Cazenovia Street</a></LocationAddress>
         
        </DateItem>
      </DatesList>
    </Wrapper>
  );
};

export default LocationsAndDates;