import styled, { keyframes } from 'styled-components';
import { AiOutlineGlobal } from 'react-icons/ai';
import { IoIosArrowDown } from "react-icons/io";
import PropTypes from 'prop-types';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const ChangeLanguage = styled.li`
    display: flex;
    align-items: center;
    gap: 3px;
    cursor: pointer;
    position: relative;
`
const LanguageToggle = styled.div`
    display: flex;
    align-items: center;
`
const Dropdown = styled.div`
    position: absolute;
    top: 32px;
    left: 0;
    transform: translateX(-30%);
    background-color: #fff;  
    border: 1px solid #ddd;  
    z-index: 1;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);  
    animation: ${fadeIn} 0.3s ease-out;
    &::before {
        content: '';
        display: block;
        position: absolute;
        top: -10px;
        left: 30%;
        width: 0px;
        height: 0px;
        border-bottom: 10px solid #fff; 
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
    }
`
const LanguageList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 1rem;
    li {
        font-weight: 500;
    }
`

const LanguageControl = ({ isOpen, onToggle, onLanguageChange, languageButtonRef }) => (
    <ChangeLanguage ref={languageButtonRef}>
        <LanguageToggle onClick={onToggle}>
            <AiOutlineGlobal size={18} />
            <IoIosArrowDown size={18} />
        </LanguageToggle>
        {isOpen && (
            <Dropdown>
                <LanguageList>
                    <li><a onClick={() => onLanguageChange('pt')} href="#">PT</a></li>
                    <li><a onClick={() => onLanguageChange('en')} href="#">EN</a></li>
                </LanguageList>
            </Dropdown>
        )}
    </ChangeLanguage>
);

LanguageControl.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    onLanguageChange: PropTypes.func.isRequired,
    languageButtonRef: PropTypes.object.isRequired,
};

export default LanguageControl;
