import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowAltCircleUp } from "react-icons/fa";

const BackToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  opacity: ${({ show }) => (show === 'true' ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
  background-color: transparent;
`;

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BackToTopButton show={showButton.toString()} onClick={scrollToTop}>
    <FaArrowAltCircleUp size={40} />
    </BackToTopButton>
  );
};

export default BackToTop;
