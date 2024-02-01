import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ProfileContainer = styled.div``
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
    padding-bottom: 1rem;
`
const SocialMedias = styled.div`
    padding-top: 1rem;
    border-bottom: 1px solid #dfdfdf;
    padding-bottom: 1rem;
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
                }
            }
        }
    }
`
const PageActual = styled.a`
    color: #20a6ff;
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