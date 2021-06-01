import styled, {keyframes} from 'styled-components'
const Load = keyframes`{
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }`;
  
export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    animation: ${Load} 300ms ease-in forwards;
  `