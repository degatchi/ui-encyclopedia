import styled from 'styled-components';

const StyledButton = styled.button`
  font: inherit;
  border: 1px solid #4f005f;
  background: #4f005f;
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;

  .button:hover,
  .button:active {
    background: #741188;
    border-color: #741188;
  }

  .button:focus {
    outline: none;
  }
`;

const Button = (props) => {
  return (
    <StyledButton type={props.type || 'button'} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
