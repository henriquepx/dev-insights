import styled, {keyframes} from 'styled-components'
import { Link } from 'react-router-dom';
import BackToTop from '../components/BackToTop';
import { useTranslation } from 'react-i18next';

const showingText = keyframes`
  0% {
        transform: translate3d(0, 3%, 0);
        opacity: .2;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
`
const HoverContainerButtons = styled.div`
    animation: ${showingText} .7s ease-in-out;
`
const ShareArticle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin: 1rem 0rem 3rem 0rem;
  p {
    font-size: 1rem;
    margin: 0;
  }
`
const ImgRedes = styled.img`
  width: 35px;
  margin: 0 4px;
`
const LinkGoBack = styled(Link)`
  font-size: 1rem;
  color: #000;
  text-align: center; 
  &:visited {
    color: #000;
  }
`

const HoverEffects = () => {
    const { t } = useTranslation();

  return (
      <HoverContainerButtons>
          
          <ShareArticle>
          <p>{t('viewarticle.shareArticle')}</p>
          <div>
          <a href="" target="_blank" rel="noreferrer">
              <ImgRedes src="/twitter.svg" alt="Twitter" />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <ImgRedes src="/linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </ShareArticle>
        <LinkGoBack to="/">{'< Voltar para Home'}</LinkGoBack>
        <BackToTop />
    </HoverContainerButtons>
  )
}

export default HoverEffects