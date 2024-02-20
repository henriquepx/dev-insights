import styled from 'styled-components';
import { AiOutlineGlobal } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const HeaderContainer = styled.header`
    padding: 2rem 1rem 1rem 1rem;
    display: flex;
    justify-content: space-between;
    gap: 50px;

    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
`
const TitleHeader = styled.h1`
    color: #000;
    font-weight: 500;
`
const NavHeader = styled.nav`
    ul {
        display: flex;
        align-items: center;
        gap: 30px;
        li {
            a {
                color: #000;
                font-weight: 500;
                font-size: .9rem;
            }
        }
    }
`

const ChangeLanguage = styled.li`
    display: flex;
    align-items: center;
    gap: 3px;
    cursor: pointer;
`

const Header = () => {
  return (
      <HeaderContainer>
          <TitleHeader>Henrique</TitleHeader>
          <div>
              <NavHeader>
                  <ul>
                    <IoSearch size={18} />
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Portfólio</a></li>
                    <ChangeLanguage>
                        <AiOutlineGlobal size={18} />
                        <a href="#">PT</a>
                        <IoIosArrowDown size={18} />
                    </ChangeLanguage>
                  </ul>
              </NavHeader>
          </div>
    </HeaderContainer>
  )
}

export default Header