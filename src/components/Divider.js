import React from 'react';
import styled from 'styled-components';
import dividerImage from './DIV.png'; // Adjust the path as needed

const DividerContainer = styled.div`
  width: 100%; // The container takes the full width of the viewport
  display: flex; // Use flexbox for centering
  justify-content: center; // Center horizontally
  align-items: center; // Center vertically
`;

const StyledDivider = styled.img`
  width: 100vw; // Divider takes the full width of the viewport
  max-width: 100%; // Limit the size to not exceed the container width
  height: auto; // Keep the aspect ratio of the divider
`;

const Divider = () => {
  return (
    <DividerContainer>
      <StyledDivider src={dividerImage} alt="Divider" />
    </DividerContainer>
  );
};

export default Divider;
