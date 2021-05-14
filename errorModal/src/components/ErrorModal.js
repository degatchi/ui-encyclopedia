import styled from 'styled-components';

import Card from './Card';
import Button from './Button';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const Modal = styled.div`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
  background: white;
  border-radius: 15px;

  @media (min-width: 768px) {
    left: calc(50% - 15rem);
    width: 30rem;
  }
`;

const Header = styled.header`
    background: #4f005f;
    padding: 1rem;
  
  & h2 {
    margin: 0;
    color: white;
`;

const Paragraph = styled.p`
  padding: 1rem;
`;

const Footer = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const ErrorModal = (props) => {
  return (
    <div>
      <Backdrop onClick={props.onConfirm}>
        <Card>
          <Modal>
            <Header>
              <h2>{props.title}</h2>
            </Header>
            <div>
              <Paragraph>{props.message}</Paragraph>
            </div>
            <Footer>
              <Button onClick={props.onConfirm}>Okay</Button>
            </Footer>
          </Modal>
        </Card>
      </Backdrop>
    </div>
  );
};

export default ErrorModal;
