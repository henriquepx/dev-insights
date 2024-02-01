import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;


const Spinner = styled.div`
    top: 50%;
    left: 50%;
    color: #ffffff;
    position: absolute;
    width: 5em; 
    border-radius: 50%;
    height: 5em; 
    box-shadow: inset 0 0 0 0.5em;
    transform: translate3d(-50%, -50%, 0);
    &::before, &::after {
        position: absolute;
        content: '';
        border-radius: 50%;
    }
    &::before {
        width: 2.6em; 
        height: 5.1em; 
        background: #07051a;
        border-radius: 5.1em 0 0 5.1em;
        top: -0.1em;
        left: -0.1em;
        transform-origin: 2.6em 2.55em; 
        animation: ${spin} 2s infinite ease 1.5s;
    }
    &::after {
        width: 2.6em; 
        height: 5.1em; 
        background: #07051a;
        border-radius: 0 5.1em 5.1em 0;
        top: -0.1em;
        left: 2.5em;
        transform-origin: 0px 2.55em; 
        animation: ${spin} 2s infinite ease;
    }
`;

const Preloader = () => {
  return (
    <Spinner />
  );
};

export default Preloader;
