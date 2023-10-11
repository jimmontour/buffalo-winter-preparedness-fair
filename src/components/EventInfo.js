import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../images/councilchambers.jpeg'; 

const TextBackground = styled.div`
  background-color: rgba(1, 7, 19, 0.9);
  padding: 3rem;
  border-radius: 15px;
  z-index: 50;
  text-align: center;
`;

const InfoWrapper = styled.div`
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

  h1, h2, h3 {
    color: var(--color-accent);
    z-index: 100;
  }
`;

const InfoTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  z-index: 100;
`;

const InfoParagraph = styled.p`
  font-size: 1.2rem;
  margin: 1rem auto;
  line-height: 1.6;
  z-index: 100;
`;

const ParagraphContainer = styled.div`
  width: 75%;
  margin: 0 auto;
`;

const EventInfo = ({id}) => {
  return (
    <InfoWrapper id={id}>
      <TextBackground>
        <InfoTitle>About This Series</InfoTitle>
        <InfoParagraph>
        After the historic December 2022 blizzard, we are all keenly aware of the challenges winter can bring our city. The Buffalo Common Council is focused on ensuring everyone is prepared for potential future emergencies by offering useful tools and resources.
        </InfoParagraph>
        <InfoParagraph>
        We invite you to join this special event series aimed at winter readiness. This series is in collaboration with trusted local organizations and will provide key tips and resources, from energy-saving measures to emergency kits.
        </InfoParagraph>
        <InfoParagraph>
        This event is free and open to all community members. It's a practical way to access important information that can benefit you and your neighbors. 
        </InfoParagraph>
        <h3>We hope to see you there!</h3>
      </TextBackground>
    </InfoWrapper>
  );
};

export default EventInfo;