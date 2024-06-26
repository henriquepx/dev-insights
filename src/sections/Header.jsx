import { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import LanguageControl from '../components/LanguageControl';
import MenuMobileContent from '../components/MenuMobileContent'; 

const HeaderContainer = styled.header`
    padding: 2rem 1rem 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    @media (max-width: 1024px) {
        padding: 2rem 3rem 1rem 3rem;
    }
    @media (max-width: 600px) {
        padding: 2rem 1.2rem 1rem 1.2rem;
    }
`;
const TitleHeader = styled.h1`
    color: #000;
    font-weight: 600;
`;
const UlHeader = styled.ul`
    display: flex;
    align-items: center;
    gap: 30px;
    li {
        a {
            color: #000;
            font-weight: 500;
            font-size: 0.9rem;
        }
    }
    @media (max-width: 640px) {
        display: none;
    }
`;
const NavHeader = styled.nav`
    display: flex;
    align-items: center;
`;
const MenuHamburger = styled.div`
    cursor: pointer;
    padding: 3px 5px 0px 5px;
    border-radius: 10px;
    z-index: 10;
    display: none;
    position: absolute;
    right: 15px;
    z-index: 999;
    @media (max-width: 640px) {
        display: block;
    }
    &.open {
        right: 0;
    }
    span {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto 0px auto;
        transition: all 0.3s ease-in-out;
        background-color: #000000;
        &:nth-child(1) {
            transform: translateY(${props => (props.open ? '8px' : '0')}) rotate(${props => (props.open ? '45deg' : '0')});
        }
        &:nth-child(2) {
            opacity: ${props => (props.open ? '0' : '1')};
        }
        &:nth-child(3) {
            transform: translateY(${props => (props.open ? '-8px' : '0')}) rotate(${props => (props.open ? '-45deg' : '0')});
        }
    }
`;

const Header = () => {
    const { t, i18n } = useTranslation();

    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const languageButtonRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    const handleChangeLanguage = (newLanguage) => {
        if (newLanguage !== currentLanguage) {
            i18n.changeLanguage(newLanguage);
            setCurrentLanguage(newLanguage);
        }
    };

    const handleLanguageClick = () => {
        setIsLanguageOpen(!isLanguageOpen);
    };

    const handleLanguageOutsideClick = useCallback((e) => {
        if (languageButtonRef.current && !languageButtonRef.current.contains(e.target)) {
            setIsLanguageOpen(false);
        }
    }, [setIsLanguageOpen, languageButtonRef]);

    useEffect(() => {
        document.addEventListener('mousedown', handleLanguageOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleLanguageOutsideClick);
        };
    }, [handleLanguageOutsideClick]);

    return (
        <HeaderContainer>
            <TitleHeader>HenriqueDev</TitleHeader>
            <div>
                <NavHeader>
                    <UlHeader>
                        <li><Link to="/">{t('header.start')}</Link></li>
                        <li><a href="https://henriquepx.vercel.app/" target="_blank" rel="noopener noreferrer">{t('header.portfolio')}</a></li>
                        <LanguageControl
                            isOpen={isLanguageOpen}
                            onToggle={handleLanguageClick}
                            onLanguageChange={handleChangeLanguage}
                            languageButtonRef={languageButtonRef}
                        />
                    </UlHeader>
                    <MenuHamburger onClick={toggleMenu} isOpen={isOpen} open={isOpen} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </MenuHamburger>
                    <MenuMobileContent
                        handleChangeLanguage={handleChangeLanguage}
                        isOpen={isOpen}
                    />
                </NavHeader>
            </div>
        </HeaderContainer>
    );
};

export default Header;
