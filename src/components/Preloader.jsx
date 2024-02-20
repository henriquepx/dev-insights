import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const PreloaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 98vh;
`;

const Loader = styled.div`
  display: block;
  width: 50px; 
  height: 50px; 
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #000000;
  animation: ${spin} 2s linear infinite;

  &:before,
  &:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    border: 3px solid transparent;
    animation: ${spin} 3s linear infinite;
  }

  &:before {
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-top-color: #131313;
  }

  &:after {
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-top-color: #333333;
  }
`;

const Preloader = () => {
  return (
    <PreloaderContainer>
      <Loader />
    </PreloaderContainer>
  );
};

export default Preloader;
