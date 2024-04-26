import styled, { keyframes } from 'styled-components';
import { FaGoogle, FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { IoIosArrowForward } from "react-icons/io";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;


const ContainerMobileContent = styled.div`
    background-color: #f8f8f8;
    height: 100%;
    width: 100%;
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 777;
    animation: ${slideInFromRight} 0.5s ease-in-out; 
    @media (min-width: 640px) {
        display: none;
    }
`;
const ContainerHeaderMobileContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    gap: 50px;
    padding: 2.45rem 1.3rem;
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
    li {
        a {
            color: #000;
            font-weight: 700;
            &:visited {
                color: #000;
            }
        }
    }
`

const MenuMobileContent = ({ handleChangeLanguage, setMobileMenuOpen }) => {

    const handleCloseMenu = () => {
        setMobileMenuOpen(false);
    };

    const { t } = useTranslation();

  return (
      <ContainerMobileContent>
        <ContainerMainMobileContent>
            <ContainerHeaderMobileContent>
                <ChangingLanguageMobile>
                      <li><a onClick={() => handleChangeLanguage('pt')} href="#">PT</a></li>
                      <li><a onClick={() => handleChangeLanguage('en')} href="#">EN</a></li>
                </ChangingLanguageMobile>
                  <ClosingMenu onClick={handleCloseMenu}>
                      <span></span>
                      <span></span>
                  </ClosingMenu>
            </ContainerHeaderMobileContent>
              
            <ContainerLinksMobileContent>
                <ul>
                      <li>
                          <Link to="/" onClick={handleCloseMenu}>
                              {t('menumobile.home')}
                              <IoIosArrowForward size={22} />
                          </Link>
                          
                      </li>
                      <li>
                          <a href="https://henriqdev.vercel.app/" target='_blank' rel='noreferrer'>
                              {t('menumobile.portfolio')}
                                <IoIosArrowForward size={22} />
                          </a>
                          
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/in/henriquepinheiroxavier/" target='_blank' rel='noreferrer'>
                              {t('menumobile.contact')}
                              <IoIosArrowForward size={22} />
                          </a>
                          
                      </li>
                </ul>
            </ContainerLinksMobileContent>
        </ContainerMainMobileContent>

        <ContainerFooterMobileContent>
              <p>{t('menumobile.credits')}</p>
            <div>
                <ul>
                      <li><a href="https://www.linkedin.com/in/henriquepinheiroxavier/" target='_blank' rel='noreferrer'><FaLinkedin /></a></li>
                      <li><a href="mailto:henriquepinheiroxavier@gmail.com" target='_blank' rel='noreferrer'><FaGoogle /></a></li>
                      <li><a href="https://github.com/henriquepx" target='_blank' rel='noreferrer'><FaGithub /></a></li>
                      <li><a href="https://api.whatsapp.com/send?phone=5521964823939&text=Ol%C3%A1,%20Henrique.%20Tenho%20uma%20ideia%20de%20trabalho%20e%20voc%C3%AA%20%C3%A9%20o%20Desenvolvedor%20que%20eu%20preciso!" target='_blank' rel='noreferrer'><FaWhatsapp /></a></li>
                      <li><a href="https://www.instagram.com/henriquepxx/" target='_blank' rel='noreferrer'><FaInstagram /></a></li>
                </ul>
            </div>
          </ContainerFooterMobileContent>
    </ContainerMobileContent>
  )
}

MenuMobileContent.propTypes = {
    setMobileMenuOpen: PropTypes.func.isRequired,
    handleChangeLanguage: PropTypes.func.isRequired,
    isMobileMenuOpen: PropTypes.bool.isRequired,
};


export default MenuMobileContent