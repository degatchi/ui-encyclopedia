import styled from 'styled-components';
import ReactDom from 'react-dom';

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

const Backdrop = (props) => {
  return <Backdrop onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
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
  );
};

const ErrorModal = (props) => {
  return (
    // PORTAL: HTML code is rendered in a different place
    // passes JSX; `document.getElementById('backdrop-root')` is the API
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
