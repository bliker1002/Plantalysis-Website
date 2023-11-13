import React from 'react';
import styled from 'styled-components';
import page1Image from './PAGE 1.png'; // Adjust the path as needed

const IntroductionContainer = styled.section`
  width: 100%; // The container takes the full width of the viewport
  display: flex; // Use flexbox for centering
  justify-content: center; // Center horizontally
  align-items: center; // Center vertically
`;

const StyledImage = styled.img`
  width: 100vw; // Image takes the full width of the viewport
  max-width: 100%; // Limit the size to not exceed the container width
  height: auto; // Keep the aspect ratio of the image
`;

const Introduction = () => {
  return (
    <IntroductionContainer>
      <StyledImage src={page1Image} alt="Page 1" />
    </IntroductionContainer>
  );
};

export default Introduction;
