import { useState } from 'react';
import styled from 'styled-components';

import IcingButton from './components/IcingButton/IcingButtonStyles';

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

  const setTxStatusHandler = () => {
    if (pendingTx) {
      setPendingTx(false);
    } else {
      setPendingTx(true);
    }
  };

  return (
    <CenterComponents>
      <button onClick={async () => setTxStatusHandler}>COMPLETE TX</button>

      <IcingButton
        btnName='DEPOSIT'
        isDisabled={pendingTx}
        onClick={pendingTx ? undefined : async () => setTxStatusHandler}
      />

      <IcingButton
        btnName='DEPOSIT'
        isDisabled={pendingTx}
        onClick={pendingTx ? undefined : async () => setTxStatusHandler}
      />
    </CenterComponents>
  );
}

export default App;
