import styled, { keyframes } from 'styled-components';

const Base = styled.button<ButtonType>`
  margin: 10px;
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

export const PlainButton: React.FC<ButtonType> = ({
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
