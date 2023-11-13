import logoImage from './Plantalysis logo text.png';
import React from 'react';
import styled from 'styled-components';

// Styled components for the header
const StyledHeader = styled.header`
  background: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 1rem 4%; /* 4% padding on the left and right */
`;

// Button with gradient effect
const ButtonWrapper = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.2vw; // Fixed border-radius based on your spec
  width: 12vw; // Responsive width
  height: calc(12vw * .3); // Responsive height
  margin: 0 4%; // 4% margin from the edges

  &:before {
    content: '';
    position: absolute;
    top: -2px; left: -2px; bottom: -2px; right: -2px;
    background: linear-gradient(to right, #F7B859, #EAF295, #84B685);
    border-radius: 1.2vw; // Slightly larger to account for the border
    z-index: -1;
  }
`;

const Button = styled.button`
  background: black;
  color: white;
  border: none;
  font-family: 'Aleo', sans-serif;
  font-weight: bold;
  font-size: 1.15vw; // Responsive font size
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  position: relative;
  border-radius: 1.2vw;
  width: 100%; // Take up full width of the wrapper
  height: 100%; // Take up full height of the wrapper

  &:hover {
    color: black;
    background-color: white;
  }
`;

// Logo component combined with text
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const LogoImage = styled.img`
  height: 5vw; // Responsive logo height
`;


// Header component with logo and buttons
const Header = ({ scrollToSection }) => {
  return (
    <StyledHeader>
      <ButtonWrapper>
        <Button onClick={() => scrollToSection('home')}>menu</Button>
      </ButtonWrapper>
      <Logo onClick={() => scrollToSection('home')}>
        <LogoImage src={logoImage} alt="Plantalysis Logo" />
      </Logo>
      <ButtonWrapper>
        <Button onClick={() => scrollToSection('join-waitlist')}>join waitlist</Button>
      </ButtonWrapper>
    </StyledHeader>
  );
};

export default Header;
