import styled from 'styled-components'
import { FaGooglePlus, FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { IoIosArrowForward } from "react-icons/io";
import PropTypes from 'prop-types';

const ContainerMobileContent = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    width: 100%;
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 777;
    @media (min-width: 640px) {
        display: none;
    }
`
const ContainerHeaderMobileContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
const ContainerLinksMobileContent = styled.div`
    ul {
        li {
            a {
                font-size: 1.4rem;
                display: flex;
                justify-content: space-between;
                width: 100%;
                color: #000;
                font-weight: 600;
            }
        }
    }
`
const ClosingMenu = styled.div`
    span {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        transition: all 0.3s ease-in-out;
        background-color: #000000;

        &:nth-child(1) {
            transform: rotate(45deg) translate(2px, 3px);
        }

        &:nth-child(2) {
            transform: rotate(-45deg) translate(2px, -3px);
        }
    }
`
const ContainerMainMobileContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding: 3rem 2rem;
`
const ContainerFooterMobileContent = styled.div`
    position: absolute;
    bottom: 0;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
    p {
        margin-bottom: 10px;
        font-size: .8rem;
    }
    div {
        ul {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            width: 100%;
            li {
                a {
                    position: relative;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    padding: 6px;
                    box-sizing: border-box;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    background: linear-gradient(0deg, #ddd, #fff);
                    transition: 0.5s;
                    &:hover {
                        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
                    }
                    svg {
                        width: 70%;
                        height: 70%;
                        line-height: 60px;
                        color: #262626;
                        transition: 0.5s;
                    }
                }
            }

            li:nth-child(1) a:hover svg {
                color: #00aced;
            }
            li:nth-child(2) a:hover svg {
                color: #ff2002;
            }
            li:nth-child(3) a:hover svg {
                color: #000000;
            }
            li:nth-child(4) a:hover svg {
                color: #31a801;
            }
            li:nth-child(5) a:hover svg {
                color: #a5007c;
            }
        }
    }
`;
const ChangingLanguageMobile = styled.div`
    display: flex;
    gap: 5px;
    p {
        font-size: .7rem;
    }
`

const MenuMobileContent = ({ setMobileMenuOpen }) => {

    const handleCloseMenu = () => {
        setMobileMenuOpen(false);
    };


  return (
    <ContainerMobileContent>
          
        <ContainerMainMobileContent>
            <ContainerHeaderMobileContent>
                <ChangingLanguageMobile>
                    <p>PT</p>
                    <p>EN</p>
                    <p>ES</p>
                </ChangingLanguageMobile>
                <ClosingMenu onClick={handleCloseMenu}>
                    <span></span>
                    <span></span>
                </ClosingMenu>
            </ContainerHeaderMobileContent>
              
            <ContainerLinksMobileContent>
                <ul>
                      <li>
                          <a href="#">
                              Home
                              <IoIosArrowForward size={22} />
                          </a>
                          
                      </li>
                      <li>
                          <a href="#">
                                Portfólio
                                <IoIosArrowForward size={22} />
                          </a>
                          
                      </li>
                      <li>
                          <a href="#">
                              Contact
                              <IoIosArrowForward size={22} />
                          </a>
                          
                      </li>
                </ul>
            </ContainerLinksMobileContent>
        </ContainerMainMobileContent>

        <ContainerFooterMobileContent>
            <p>@2024 Henrique. Todos os direitos reservados. Desenvolvido em ReactJS & Styled-Components.</p>
            <div>
                <ul>
                    <li><a href="https://www.facebook.com/"><FaLinkedin /></a></li>
                    <li><a href="https://twitter.com/"><FaGooglePlus /></a></li>
                    <li><a href="https://plus.google.com/"><FaGithub /></a></li>
                    <li><a href="https://www.linkedin.com/"><FaWhatsapp /></a></li>
                    <li><a href="https://www.instagram.com/"><FaInstagram /></a></li>
                </ul>
            </div>
        </ContainerFooterMobileContent>
          
    </ContainerMobileContent>
  )
}

MenuMobileContent.propTypes = {
    setMobileMenuOpen: PropTypes.func.isRequired,
};


export default MenuMobileContent