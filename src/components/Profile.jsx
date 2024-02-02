import styled, { keyframes } from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const showingText = keyframes`
  0% {
        transform: translate3d(-20%, 0, 0);
        opacity: .2;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
`;

const ProfileContainer = styled.div`
    animation: ${showingText} 2s ease-in-out;   
`
const TitlePage = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    margin-bottom: .8rem;
    font-weight: 700;
`
const DescriptionAboutMe = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: .6rem;
    max-width: 29ch;

    border-bottom: 1px solid #dfdfdf;
    padding-bottom: .7rem;
    @media (max-width: 1023px) {
        max-width: 100%;
    }
`
const SocialMedias = styled.div`
    padding-top: .7rem;
    border-bottom: 1px solid #dfdfdf;
    padding-bottom: 1rem;
    width: 270px;
    @media (max-width: 1023px) {
        width: 100%;
    }
    nav {
        ul {
            li {
                display: flex;
                align-items: center;
                gap: 15px;
                margin: 10px 0;
                max-width: 300px;
                a {
                    font-size: .8rem;
                    color: #000;
                    font-weight: 500;
                }
            }
        }
    }
`
const LinkToPages = styled.div`
    padding-top: 1rem;
    width: 270px;
    
    nav {
        ul {
            li {
                display: flex;
                align-items: center;
                gap: 15px;
                margin: 10px 0;

                max-width: 300px;
                a {
                    font-size: .8rem;
                    font-weight: 500;
                    color: #000000;
                }
            }
        }
    }
`
const PageActual = styled.a`
    color: #000000;
`

const Profile = () => {
  return (
      <ProfileContainer>
          <TitlePage>Henrique</TitlePage>
          <DescriptionAboutMe>Bem-vindo aos meus artigos de programação! Encontre ensinamentos, dicas, componentes para estudo, erros e mais.</DescriptionAboutMe>

          <SocialMedias>
            <nav>
                <ul>
                    <li>
                        <FaLinkedin size={18} />
                        <a href="">Henrique Pinheiro</a>
                    </li>
                    <li>
                        <FaGithub size={18} />
                        <a href="">@henriquepx</a>
                    </li>
                </ul>
            </nav>
          </SocialMedias>

          <LinkToPages>
            <nav>
                    <ul>
                        <li>
                            <PageActual href="">—————  Artigos »</PageActual>
                        </li>
                        <li>
                            <a href="">————— Sobre mim »</a>
                        </li>
                    </ul>
                </nav>
          </LinkToPages>
    </ProfileContainer>
  )
}

export default Profile