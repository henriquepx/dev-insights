import { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { AiOutlineGlobal } from 'react-icons/ai';
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    padding: 2rem 1rem 1rem 1rem;
    display: flex;
    justify-content: space-between;
    gap: 50px;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
`;
const TitleHeader = styled.h1`
    color: #000;
    font-weight: 500;
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
const ChangeLanguage = styled.li`
    display: flex;
    align-items: center;
    gap: 3px;
    cursor: pointer;
    position: relative;
`;
const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const Dropdown = styled.div`
    position: absolute;
    top: 32px;
    left: 0;
    transform: translateX(-30%);
    width: 100%;
    padding: 1rem 2.4rem;
    background-color: #fdfdfd;
    border: 1px solid #9b9b9b;
    z-index: 1;
    animation: ${fadeIn} 0.3s ease-out;
    &::before {
        content: '';
        display: block;
        position: absolute;
        top: -10px;
        left:  30%;
        width: 0px;
        height: 0px;
        border-bottom: 10px solid #eeeeee;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
    }
`;
const LanguageList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    li {
        font-weight: 500;
    }
`;
const SearchInput = styled.input`
    padding: 3px;
    border: 1px solid #ccc;
    border-radius: 3px;
    animation: ${fadeIn} 0.3s ease-out;
`;
const MenuHamburger = styled.div`
  cursor: pointer;
  padding: 3px 5px 0px 5px;
  border-radius: 10px;
  z-index: 999;
  display: none;
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
    @media (max-width: 640px) {
        display: block;
    }
  }
`;

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const searchInputRef = useRef(null);
    const languageButtonRef = useRef(null);

    const handleSearchClick = () => {
        setIsSearchOpen(!isSearchOpen);
        setIsLanguageOpen(false); 
    };

    const handleLanguageClick = () => {
        setIsLanguageOpen(!isLanguageOpen);
        setIsSearchOpen(false); 
    };

    const handleOutsideClick = (e) => {
        if (
            searchInputRef.current &&
            !searchInputRef.current.contains(e.target) &&
            languageButtonRef.current &&
            !languageButtonRef.current.contains(e.target)
        ) {
            setIsSearchOpen(false);
            setIsLanguageOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <HeaderContainer>
            <TitleHeader>HenriqueDev</TitleHeader>
            <div>
                <NavHeader>
                    <UlHeader>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="https://github.com/henriquepx" target="_blank" rel="noopener noreferrer">Portfólio</a></li>
                        <ChangeLanguage ref={languageButtonRef} onClick={handleLanguageClick}>
                            <AiOutlineGlobal size={18} />
                            {isLanguageOpen && (
                                <Dropdown>
                                    <LanguageList>
                                        <li>PT</li>
                                        <li>EN</li>
                                        <li>ES</li>
                                    </LanguageList>
                                </Dropdown>
                            )}
                            <IoIosArrowDown size={18} onClick={handleLanguageClick} />
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
                    <MenuHamburger>
                        <span></span>
                        <span></span>
                        <span></span>
                    </MenuHamburger>
                </NavHeader>
            </div>
        </HeaderContainer>
    );
};

export default Header;