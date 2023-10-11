import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from "gatsby"
import styled from 'styled-components';
import YouTube from 'react-youtube';
import logo from '../images/logo.png'; 
import backgroundImage from '../images/buffalowinterbackground.jpg'; 

const HeroSection = styled.section`
  position: relative;
  color: #fff;
  padding: 3rem 0;
  text-align: center;

  @media (max-width: 1370px) {
    padding: 6rem 0;
}

@media (max-width: 1081px) {
    position: relative;


background-size: cover;
background-position: center;
}



  @media (max-width: 768px) {
    background: #00005A;
    height: 70vh;
  }
  
`;

const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80vh;
  z-index: -2;
  overflow: hidden;
  
  iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100vw;
    min-height: 100vh; 
 
    transform: translate(-50%, -50%);

    @media (max-width: 1081px) {
        display: none;
      }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 150, 0.6); // Blue, semi-transparent
  z-index: -1;
`;

const Logo = styled.img`
  width: 60%;
  height: auto;
  margin: 4rem 0 0 0;

  @media (max-width: 768px) {
    width: 90%;
`;

const CenterText = styled.div`
  opacity: ${props => props.isVisible ? '1' : '0'};
  transform: translateY(${props => props.isVisible ? '0' : '50%'});
  transition: opacity 1s ease-out, transform 1s ease-out;

  z-index: 0;
  text-align: center;

  h1 {
    font-size: 4rem;
    color: var(--color-accent);
    margin: 0 0 2rem 0;
    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.8);  /* horizontal, vertical, blur, color */
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 2.5rem;
      }
}
  
  h3 {
    margin: 2rem auto 4rem auto;
    color: var(--color-text);
    max-width: 800px;
    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.8);  /* horizontal, vertical, blur, color */
    font-family: 'Roboto', sans-serif;
    font-weight: 300;

    @media (max-width: 768px) {
        display: none;
      }
  }
`;


const RegisterButton = styled.a`
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
  padding: 15px 30px;
  font-size: 18px;

  &:hover {
    background-color: #d44127;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-7px);
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    padding: 1rem;
    font-size: 2rem;
  }
`;

const Hero = () => {
  const videoOptions = {
    playerVars: {
      autoplay: 1,
      loop: 1,
      controls: 0,
      mute: 1,
      playlist: 'QL_96Thsil0', // Repeat the video by using the same video as a playlist
    },
  };

  const animationProps = useSpring({
    to: { opacity: 1, transform: 'translateY(0)' },
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: { duration: 1000 },
    delay: 300  // Optional: Add a delay for better visibility
  });

  return (
    <HeroSection>
      <VideoWrapper>
        <YouTube videoId="QL_96Thsil0" opts={videoOptions} />
      </VideoWrapper>
      <Overlay />
      <CenterText as={animated.div} style={animationProps}>
        <Logo src={logo} alt="Buffalo Common Council Logo" />
        <h3>
          A free event series taking place at five locations in Buffalo...
        </h3>
        <RegisterButton href="https://forms.gle/fHducFesGRuNT3X57">Register for Free</RegisterButton>
      </CenterText>
    </HeroSection>
  );
};

export default Hero;