import { useState } from 'react';
import styled from 'styled-components';

import { IcingButton } from '../components/Buttons/IcingButton';
import Modal from '../components/Modals/Modal';
import { Card } from '../components/Card/index';

// Centering to middle of screen
const CenterComponents = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: gray;
`;

const Home = () => {
  const [pendingTx, setPendingTx] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const setTxStatusHandler = () => {
    setPendingTx((prev: boolean) => !prev);
  };

  const setShowModalHandler = () => {
    setShowModal((prev: boolean) => !prev);
  };

  return (
    <>
      <button onClick={setTxStatusHandler}>COMPLETE TX</button>
      <button onClick={setShowModalHandler}>SHOW MODAL</button>
      <Modal
        title={'MODAL'}
        showModal={showModal}
        onDismiss={setShowModalHandler}
      />
      <IcingButton
        btnName='DEPOSIT'
        isDisabled={pendingTx}
        onClick={pendingTx ? undefined : setTxStatusHandler}
      />
      <Card width='18rem' height='14rem' />
    </>
  );
};

export default Home;
