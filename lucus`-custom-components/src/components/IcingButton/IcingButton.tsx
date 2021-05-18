import styled, { keyframes } from 'styled-components';

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
  cursor: ${(props) => (props.isDisabled ? 'auto' : 'pointer')};

  &:hover {
    opacity: 92%;
  }

  &::before {
    /* Content under the drip */
    content: ${(props) => props.btnName};
    font-size: 1.2rem;
    font-family: sans-serif;
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
  size: string;
  btnName: string;
  isDisabled: boolean;
  onClick?: () => void;
}

const IcingOnButton: React.FC<ButtonType> = ({
  btnName,
  isDisabled,
  onClick,
}) => {
  return (
    <>
      <IcingOn btnName={btnName} isDisabled={isDisabled} onClick={onClick} />
    </>
  );
};

const IcingOffButton: React.FC<ButtonType> = ({
  btnName,
  isDisabled,
  onClick,
}) => {
  return (
    <>
      <IcingOff btnName={btnName} isDisabled={isDisabled} onClick={onClick} />
    </>
  );
};

const IcingButton: React.FC<ButtonType> = ({
  btnName,
  isDisabled,
  onClick,
}) => {
  return (
    <>
      {!isDisabled ? (
        <IcingOffButton
          btnName={btnName}
          isDisabled={isDisabled}
          onClick={onClick}
        />
      ) : (
        <IcingOnButton
          btnName={btnName}
          isDisabled={isDisabled}
          onClick={onClick}
        />
      )}
    </>
  );
};

export default IcingButton;
