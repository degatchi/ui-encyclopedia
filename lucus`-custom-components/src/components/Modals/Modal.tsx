import styled, { keyframes } from 'styled-components';

const CenterComponents = styled.div`
  width: 100%;
  height: 100%;
  // background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 400px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContext = styled.div`
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  h2 {
    position: relative;
    up: 50px;
    left: 10px;
  }

  p {
      margin-bottom: 1rem;
  }

  button {
      padding: 10px 24px;
      background: #141414;
      color: #fff;
      border: none;
  }
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding 0;
  z-index: 10;
`

interface ModalType {
  title: string;
  description?: string;
  showModal: boolean;
  onDismiss: () => void;
  // onClick?: () => void;
}

const Modal: React.FC<ModalType> = ({
  title,
  description,
  showModal,
  onDismiss,
}) => {
  return (
    <>
      {showModal ? (
        <CenterComponents onClick={onDismiss}>
          <ModalWrapper>
            <ModalContext>
              <h2>{title}</h2>
              {description && <p>{description}</p>}
              <CloseModalButton onClick={onDismiss}>X</CloseModalButton>
            </ModalContext>
          </ModalWrapper>
        </CenterComponents>
      ) : null}
    </>
  );
};

export default Modal;
