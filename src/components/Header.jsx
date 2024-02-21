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
`;

const NavHeader = styled.nav``;

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

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const searchInputRef = useRef(null);
    const languageButtonRef = useRef(null);

    const handleSearchClick = () => {
        setIsSearchOpen(!isSearchOpen);
        setIsLanguageOpen(false); // Fechar o dropdown de idiomas ao abrir a pesquisa
    };

    const handleLanguageClick = () => {
        setIsLanguageOpen(!isLanguageOpen);
        setIsSearchOpen(false); // Fechar a pesquisa ao abrir o dropdown de idiomas
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
            <TitleHeader>Henrique</TitleHeader>
            <div>
                <NavHeader>
                    <UlHeader>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="https://github.com/henriquepx">Portfólio</Link></li>
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
                </NavHeader>
            </div>
        </HeaderContainer>
    );
};

export default Header;