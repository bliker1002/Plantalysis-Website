import React from 'react';
import styled from 'styled-components';
import supportedEquipmentImage from './image67.png'; // Update the path as needed

const SupportedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  flex-basis: 100%;
  img {
    width: 100%;
    height: auto;
    animation: slideInFromLeft 4s ease-out forwards;
  }

  @keyframes slideInFromLeft {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(5%);
    }
  }
`;

const TextContainer = styled.div`
  flex-basis: 85%; 
  padding-right: 8vw; 
  animation: slideInFromRight 4s ease-out forwards;
  color: white;

  @keyframes slideInFromRight {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-10%);
    }
  }
`;

const Title = styled.h2`
  font-size: 3vw;
  font-family: 'Aleo', sans-serif;
  font-style: italic;
  font-weight: 300; // Light weight
  text-transform: lowercase;
  background: linear-gradient(to right, #FFAB2C, #DBC180, #71CA73);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 0.5em;
`;

const HorizontalLine = styled.hr`
  border: none;
  height: 2px;
  background-color: white;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 1.5em;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap; // Allows items to wrap to the next line
  gap: 2vw; // Space between items
  font-size: 3vw;
  font-style: italic;
  font-weight: 300; // Light weight;
  margin-bottom: 1em;
`;

const ButtonWrapper = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.5vw; // Fixed border-radius based on your spec
  width: 20vw; // Responsive width
  height: calc(20vw * .2); // Responsive height
  margin: 0 4%; // 4% margin from the edges

  &:before {
    content: '';
    position: absolute;
    top: -2px; left: -2px; bottom: -2px; right: -2px;
    background: linear-gradient(to right, #F7B859, #EAF295, #84B685);
    border-radius: 2vw; // Slightly larger to account for the border
    z-index: -1;
  }
`;

const Button = styled.button`
  background: black;
  color: white;
  border: none;
  font-family: 'Aleo', sans-serif;
  font-weight: 300;
  font-size: 2vw; // Responsive font size
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  position: relative;
  border-radius: 2vw;
  width: 100%; // Take up full width of the wrapper
  height: 100%; // Take up full height of the wrapper

  &:hover {
    color: black;
    background-color: white;
  }
`;

const Supported = () => {
  return (
    <SupportedContainer>
      <ImageContainer>
        <img src={supportedEquipmentImage} alt="Supported Equipment" />
      </ImageContainer>
      <TextContainer>
        <Title>supported equipment</Title>
        <HorizontalLine />
        <List>
          <li>LCMS</li>
          <li>HPLC</li>
          <li>GCUV</li>
          <li>ICPMS</li>
          <li>GCMS</li>
          <li>qPCR</li>
        </List>
        <Title>supported manufacturers</Title>
        <HorizontalLine />
        <List>
          <li>Agilent</li>
          <li>Shimadzu</li>
          <li>Waters</li>
          <li>Thermo Fisher</li>
          <li>PerkinElmer</li>
        </List>
          <ButtonWrapper>
        <Button>join the waitlist</Button>
          </ButtonWrapper>
      </TextContainer>
    </SupportedContainer>
  );
};

export default Supported;
