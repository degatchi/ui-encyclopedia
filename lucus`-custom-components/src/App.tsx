import { useState } from 'react';
import styled from 'styled-components';

import IcingButton from './components/IcingButton/IcingButton';
import Modal from './components/Modals/Modal';


// Centering to middle of screen
const CenterComponents = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: gray;
`;

function App() {
  const [pendingTx, setPendingTx] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const setTxStatusHandler = () => {
    setPendingTx((prev: boolean) => !prev)
  };

  const setShowModalHandler = () => {
    setShowModal((prev: boolean) => !prev)
  };

  return (
    <CenterComponents>
      <button onClick={setTxStatusHandler}>COMPLETE TX</button>
      <button onClick={setShowModalHandler}>SHOW MODAL</button>
      <Modal title={'MODAL'} showModal={showModal} onDismiss={setShowModalHandler}/>
      <IcingButton
        btnName='DEPOSIT'
        isDisabled={pendingTx}
        onClick={pendingTx ? undefined : setTxStatusHandler}
      />
    </CenterComponents>
  );
}

export default App;
