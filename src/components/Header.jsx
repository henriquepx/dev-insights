import { useState, useRef, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from "react-i18next";
import { AiOutlineGlobal } from 'react-icons/ai';
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import MenuMobileContent from './MenuMobileContent';

const HeaderContainer = styled.header`
    padding: 2rem 1rem 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
`
const TitleHeader = styled.h1`
    color: #000;
    font-weight: 600;
`
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
`
const NavHeader = styled.nav`
    display: flex;
    align-items: center;
`
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
const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`
const Dropdown = styled.div`
    position: absolute;
    top: 32px;
    left: 0;
    transform: translateX(-30%);
    width: 100%;
    padding: 1rem 2.4rem;
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
    li {
        font-weight: 500;
    }
`
const SearchInput = styled.input`
    padding: 3px;
    border: 1px solid #ccc;
    border-radius: 3px;
    animation: ${fadeIn} 0.3s ease-out;
`
const MenuHamburger = styled.div`
  cursor: pointer;
  padding: 3px 5px 0px 5px;
  border-radius: 10px;
  z-index: 10;
  display: none;
  @media (max-width: 640px) {
        display: block;
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
`

const Header = () => {

    const { t, i18n } = useTranslation();

    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    const handleChangeLanguage = (newLanguage) => {
        if (newLanguage !== currentLanguage) {
            i18n.changeLanguage(newLanguage);
            setCurrentLanguage(newLanguage);
            localStorage.setItem("newLanguage", newLanguage);
        }
    };

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); 

    const searchInputRef = useRef(null);
    const languageButtonRef = useRef(null);

    const handleSearchClick = () => {
        setIsSearchOpen(!isSearchOpen);
        setIsLanguageOpen(false);
        setHamburgerMenuOpen(false);
        setMobileMenuOpen(false);
    };

    const handleLanguageClick = () => {
        setIsLanguageOpen(!isLanguageOpen);
        setIsSearchOpen(false);
        setHamburgerMenuOpen(false);
        setMobileMenuOpen(false); 
    };

    const handleSearchOutsideClick = useCallback((e) => {
        if (searchInputRef.current && !searchInputRef.current.contains(e.target)) {
            setIsSearchOpen(false);
        }
    }, [setIsSearchOpen, searchInputRef]);

    const handleLanguageOutsideClick = useCallback((e) => {
        if (languageButtonRef.current && !languageButtonRef.current.contains(e.target)) {
            setIsLanguageOpen(false);
        }
    }, [setIsLanguageOpen, languageButtonRef]);

    const handleHamburgerClick = () => {
        setHamburgerMenuOpen(!isHamburgerMenuOpen);
        setMobileMenuOpen(!isMobileMenuOpen); 
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleSearchOutsideClick);
        document.addEventListener('mousedown', handleLanguageOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleSearchOutsideClick);
            document.removeEventListener('mousedown', handleLanguageOutsideClick);
        };
    }, [handleSearchOutsideClick, handleLanguageOutsideClick]);

    return (
        <HeaderContainer>
            <TitleHeader>HenriqueDev</TitleHeader>
            <div>
                <NavHeader>
                    <UlHeader>
                        <li><Link to="/">{t('header.start')}</Link></li>
                        <li><a href="https://github.com/henriquepx" target="_blank" rel="noopener noreferrer">{t('header.portfolio')}</a></li>
                        <ChangeLanguage ref={languageButtonRef}>
                            <LanguageToggle onClick={handleLanguageClick}>
                                <AiOutlineGlobal size={18} />
                                <IoIosArrowDown size={18} />
                            </LanguageToggle>
                            {isLanguageOpen && (
                                <Dropdown>
                                    <LanguageList>
                                        <li><a onClick={() => handleChangeLanguage('pt')} href="#">PT</a></li>
                                        <li><a onClick={() => handleChangeLanguage('en')} href="#">EN</a></li>
                                    </LanguageList>
                                </Dropdown>
                            )}
                        </ChangeLanguage>

                        {isSearchOpen ? (
                            <SearchInput
                                type="text"
                                placeholder="Search..."
                                ref={searchInputRef}
                            />
                        ) : (
                            <IoSearch size={18} onClick={handleSearchClick} />
                        )}
                    </UlHeader>
                    <MenuHamburger onClick={handleHamburgerClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </MenuHamburger>
                    {isMobileMenuOpen && <MenuMobileContent setMobileMenuOpen={setMobileMenuOpen} />}
                </NavHeader>
            </div>
        </HeaderContainer>
    );
};

export default Header;