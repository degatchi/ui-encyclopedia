import styled from 'styled-components';

const StyledCard = styled.div`
  margin: 2rem 40rem 2rem 40rem;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
`;

const Card = (props) => {
  return <StyledCard>{props.children}</StyledCard>;
};

export default Card;
