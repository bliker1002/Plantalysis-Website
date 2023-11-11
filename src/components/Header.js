import React from 'react';
import styled from 'styled-components';
import logoImage from 'P_Logo White.png';

// Styled components
const StyledHeader = styled.header`
  background: black;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
`;

// Button with gradient border
const Button = styled.button`
  background: black;
  color: white;
  border: 2px solid transparent;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-family: 'Aleo', sans-serif;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: color 0.4s, background-color 0.4s;

  &:after {
    content: '';
    position: absolute;
    top: -2px; right: -2px; bottom: -2px; left: -2px;
    z-index: -1;
    background: linear-gradient(0deg, #F7B859, #84B685);
    border-radius: 3px; // Adjust border-radius if needed
  }

  // Hover styles
  &:hover {
    color: black;
    background-color: white;
  }
`;

// Header Component
const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoImage = styled.img`
  height: 50px; // Adjust the size as necessary
  margin-right: 10px; // Adds some space between the logo image and the text
`;

const LogoText = styled.h1`
  font-family: 'Aleo', sans-serif;
  font-weight: 700;
  margin: 0;
  color: white; // If you want the text to be white
`

// Header Component
const Header = ({ scrollToSection }) => {
  return (
    <StyledHeader>
      <Button onClick={() => scrollToSection('home')}>Menu</Button>
      <Logo onClick={() => scrollToSection('home')}>
        <LogoImage src={logoImage} alt="Plantalysis Logo" />
        <LogoText>Plantalysis</LogoText>
      </Logo>
      <Button onClick={() => scrollToSection('join-waitlist')}>Join Waitlist</Button>
    </StyledHeader>
  );
};

export default Header;
