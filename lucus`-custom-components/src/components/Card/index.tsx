import styled, { keyframes } from 'styled-components';
// import { PlainButton } from '../Buttons/Button';

const Base = styled.button<ButtonType>`
  position: relative;
  background: #303032; /* Background insde box - change if white or dark theme */
  border: 0.22rem solid #303032;
  border-radius: 0.75rem; /* Gives border a curve */
  height: ${(props) => (props.height ? props.height : '3rem')};
  width: ${(props) => (props.width ? props.width : '10rem')};
  outline: 0;
  overflow: hidden;
  cursor: ${(props) => (props.isDisabled ? 'auto' : 'pointer')};

  &:hover {
    opacity: 92%;
  }

  &::before {
    /* Content under the drip */
    content: '${(props) => props.btnName}';
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

interface ButtonType {
  height?: string;
  width?: string;
  btnName: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

const PlainButton: React.FC<ButtonType> = ({
  height,
  width,
  btnName,
  isDisabled,
  onClick,
}) => {
  return (
    <>
      <Base
        height={height}
        width={width}
        btnName={btnName}
        isDisabled={isDisabled}
        onClick={onClick}
      >
        {btnName}
      </Base>
    </>
  );
};

const CardBase = styled.div<CardType>`
  margin: 50px;
  text-align: center;
  background: hsl(239, 19%, 40%);
  border-radius: 0.75rem; /* Gives border a curve */
  height: ${(props) => (props.height ? props.height : '10rem')};
  width: ${(props) => (props.width ? props.width : '10rem')};
`;

const CardContent = styled.div`
  padding: 14px 24px 24px 24px;

  & h2 {
    color: hsl(305, 20%, 98%);
    font-size: 1.2rem;
    font-family: sans-serif;
  }

  & p {
    color: hsl(305, 20%, 85%);
    font-size: 1rem;
    font-family: sans-serif;
  }
`;

interface CardType {
  width?: string;
  height?: string;
}

export const Card: React.FC<CardType> = ({ width, height }) => {
  return (
    <>
      <CardBase width={width} height={height}>
        <CardContent>
          <h2>Multi-chain AMM</h2>
          <p>
            Isolated lending markets, elastic interest rates. Leverage long
            short or create your own market.
          </p>
          <PlainButton width={'100%'} btnName='Enter Exchange' />
        </CardContent>
      </CardBase>
    </>
  );
};
