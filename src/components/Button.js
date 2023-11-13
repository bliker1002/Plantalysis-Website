import React from 'react';
import styled from 'styled-components';

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

