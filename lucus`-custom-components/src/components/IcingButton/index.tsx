import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { scaleVariants } from './theme';

// Animation for icing onto button
const spinDownOn = keyframes`{
  0% {
    transform: translateX(2%) translateY(-35%) rotate(-35deg);
  }
  100% {
    transform: translateX(0%) translateY(30%) rotate(390deg);
  }
}`;

// Animation for icing off of button
const spinDownOff = keyframes`{
  0% {
    transform: translateX(0%) translateY(53%) rotate(390deg);
  }
  100% {
    transform: translateX(0%) translateY(135%) rotate(780deg);
  }
}`;

// Default button styling
const Base = styled.button<ButtonType>`
  margin: 10px;
  position: relative;
  background: #303032; /* Background insde box - change if white or dark theme */
  border: 0.22rem solid #303032;
  border-radius: 0.75rem; /* Gives border a curve */
  height: 3rem;
  width: 10rem;
  outline: 0;
  overflow: hidden;
  opacity: ${(props) => (props.isDisabled ? '80%' : '100%')};
  cursor: ${(props) =>
    props.isDisabled || props.isLoading ? 'auto' : 'pointer'};

  &:hover {
    opacity: ${(props) => (props.isDisabled ? '80%' : '92%')};
  }

  &::before {
    /* Content under the drip */
    content: '${(props) => props.btnName}';
    font-size: 1.2rem;
    color: white; /* Color of text - change if white or dark theme */
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    flex-wrap: nowrap;
  }
`;

// Icing falling & filling button
const IcingOn = styled(Base)`
  &::after {
    content: "";
    position: absolute;
    bottom: -50%;
    left: -25%;
    height: 550%;
    width: 150%;
    background: linear-gradient(to right, hsl(321, 98%, 60%), hsl(321, 98%, 75%)); /* Color of moving object */
    border-radius: 40%;
      animation: ${spinDownOn} 6s ease-out forwards;
    }
  }`;

// Icing falling off the button
const IcingOff = styled(Base)`
  &::after {
    content: "";
    position: absolute;
    bottom: -50%;
    left: -25%;
    height: 550%;
    width: 150%;
    background: linear-gradient(to right, hsl(321, 98%, 60%), hsl(321, 98%, 75%));
    border-radius: 40%;
      animation: ${spinDownOff} 6s ease-out forwards;
    }
  }`;

interface ButtonType {
  btnName: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}

// Icing animation starts off button and falls on.
const IcingOnButton: React.FC<ButtonType> = ({
  btnName,
  isLoading,
  isDisabled,
  onClick,
}) => {
  return (
    <>
      <IcingOn
        btnName={btnName}
        isLoading={isLoading}
        isDisabled={isDisabled}
        onClick={isDisabled || isLoading ? undefined : onClick}
      >
        {btnName}
      </IcingOn>
    </>
  );
};

// Icing animation starts on button & falls off.
const IcingOffButton: React.FC<ButtonType> = ({
  btnName,
  isLoading,
  isDisabled,
  onClick,
}) => {
  return (
    <>
      <IcingOff
        btnName={btnName}
        isLoading={isLoading}
        isDisabled={isDisabled}
        onClick={isDisabled || isLoading ? undefined : onClick}
      >
        {btnName}
      </IcingOff>
    </>
  );
};

// Determines which icing animation to render based off loading condition.
const RenderIcingButton: React.FC<ButtonType> = ({
  btnName,
  isLoading,
  isDisabled,
  onClick,
}) => {
  return (
    <>
      {!isLoading ? (
        <IcingOffButton
          btnName={btnName}
          isLoading={isLoading}
          isDisabled={isDisabled}
          onClick={isDisabled || isLoading ? undefined : onClick}
        />
      ) : (
        <IcingOnButton
          btnName={btnName}
          isLoading={isLoading}
          isDisabled={isDisabled}
          onClick={isDisabled || isLoading ? undefined : onClick}
        />
      )}
    </>
  );
};

// Handles initial button & what animated button to render.
const IcingButton: React.FC<ButtonType> = ({
  btnName,
  isLoading,
  isDisabled,
  onClick,
}) => {
  const [initialInteraction, setInitialInteraction] = useState(false);

  // Calls onClick manually & sets :after animations.
  const setInitialInteractionHandler = () => {
    onClick(); // If error, make a function that uses this & it will go away
    setInitialInteraction(true);
  };

  // If first interaction, call handler to set animations & call onClick together.
  return (
    <>
      {!initialInteraction ? (
        <Base
          btnName={btnName}
          isDisabled={isDisabled}
          onClick={isDisabled ? undefined : setInitialInteractionHandler}
        />
      ) : (
        <RenderIcingButton
          btnName={btnName}
          isLoading={isLoading}
          isDisabled={isDisabled}
          onClick={onClick}
        />
      )}
    </>
  );
};

export default IcingButton;
