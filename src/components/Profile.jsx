import styled, { keyframes } from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const showingText = keyframes`
  0% {
        opacity: 0;
    }
    100% {
      opacity: 1;
    }
`
const ProfileContainer = styled.div`
    animation: ${showingText} 1.4s ease-in-out;   
`
const DescriptionAboutMe = styled.p`
    font-family: 'Montserrat', sans-serif;
    max-width: 29ch;

    border-bottom: 1px solid #dfdfdf;
    padding-bottom: .7rem;
    @media (max-width: 1023px) {
        max-width: 100%;
        font-size: 1rem;
    }
`
const SocialMedias = styled.div`
    padding-top: .7rem;
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
                    font-size: 1rem;
                    color: #000;
                    font-weight: 500;
                }
            }
        }
    }
`

const Profile = () => {
    const { t } = useTranslation();

  return (
      <ProfileContainer>
          <DescriptionAboutMe>{t('profile.description')}</DescriptionAboutMe>
          <SocialMedias>
            <nav>
                <ul>
                    <li>
                        <FaLinkedin size={18} />
                        <a href="https://www.linkedin.com/in/henriquepinheiroxavier/" rel="noreferrer" target="_blank">Henrique Pinheiro</a>
                    </li>
                    <li>
                        <FaGithub size={18} />
                        <a href="https://github.com/henriquepx" rel="noreferrer" target="_blank">@henriquepx</a>
                    </li>
                </ul>
            </nav>
          </SocialMedias>
    </ProfileContainer>
  )
}

export default Profile