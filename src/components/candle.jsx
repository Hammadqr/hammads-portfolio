import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the flame flicker animation
const flameAnimation = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-5px) scale(1.1, 0.9);
    opacity: 0.6;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 0.7;
  }
`;

// Container for the candle
const CandleContainer = styled.div`
  position: absolute; /* Position relative to the parent */
  top: 50%;
  left: 90%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10; /* Ensure candle is above other content */
`;

// Candle body
const CandleBody = styled.div`
  width: 30px; /* Wider candle */
  height: 120px; /* Taller candle */
  background-color: #f0e6d2; /* Light beige for a realistic candle color */
  border-radius: 5px 5px 0 0; /* Rounded top, flat bottom */
  box-shadow: inset 0 -10px 10px rgba(0, 0, 0, 0.1); /* Inner shadow for depth */
  position: relative;
  opacity: 0.9; /* Lower opacity for subtlety */
`;

// Flame
const Flame = styled.div`
  width: 20px; /* Smaller flame */
  height: 50px; /* Taller flame */
  background: linear-gradient(to bottom, #ffcc00, #ff6600); /* Gradient for a realistic flame */
  border-radius: 50% 50% 20% 50%; /* Flame shape */
  position: relative;
  top: -10px; /* Position above the candle body */
  animation: ${flameAnimation} 1.5s ease-in-out infinite; /* Smooth flicker animation */
  opacity: 0.7; /* Lower opacity for subtlety */
  box-shadow: 0 0 10px rgba(255, 153, 0, 0.5), 0 0 20px rgba(255, 102, 0, 0.5); /* Subtle glow effect */
  z-index: 2; /* Ensure flame is above the dark background */

  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: 25%;
    width: 50%;
    height: 60%;
    background: linear-gradient(to bottom, #ff9900, #ff3300); /* Inner flame gradient */
    border-radius: 50%;
    opacity: 0.6; /* Lower opacity for subtlety */
  }
`;

// Dark background around the flame
const FlameBackground = styled.div`

`;

// Wick
const Wick = styled.div`

`;

// Glow effect around the candle
const GlowEffect = styled.div`
  position: absolute;
  top: -100px; /* Adjust based on candle position */
  left: 50%;
  transform: translateX(-50%);
  width: 200px; /* Width of the glow */
  height: 200px; /* Height of the glow */
  background: radial-gradient(circle, rgba(255, 153, 0, 0.2), rgba(255, 102, 0, 0.1), transparent 70%); /* Glow gradient */
  border-radius: 50%;
  z-index: 0; /* Behind everything */
  pointer-events: none; /* Ensure it doesn't block interactions */
`;

// Candle component
const Candle = () => {
  return (
    <CandleContainer>
      <GlowEffect /> {/* Glow effect around the candle */}
      <FlameBackground /> {/* Dark background around the flame */}
      <Flame>
        <Wick /> {/* Wick inside the flame */}
      </Flame>
      <CandleBody /> {/* Candle body below the flame */}
    </CandleContainer>
  );
};

export default Candle;