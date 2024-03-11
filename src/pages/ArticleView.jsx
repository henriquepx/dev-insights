import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import BackToTop from '../components/BackToTop';
import PropTypes from 'prop-types';
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
const ArticleViewContainer = styled.div`
    padding: 5rem 0rem 5rem 0rem;

    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    text-align: center;

    animation: ${showingText} .7s ease-in-out;
    @media (max-width: 500px) {
      padding-top: 2.5rem;
    }
    h1 {
      color: #000;
      font-weight: 600;
      font-size: 1.8rem;
      @media (max-width: 1023px) {
        font-size: 1rem;
      }
    }
    p {
      margin-bottom: 1rem;
      font-size: .8rem;
    }
`
const ArticleViewIntro = styled.div`

`
const ImgBg = styled.img`
  border-radius: 20px;
  width: 100%;
  @media (max-width: 1023px) {
    width: 90%;
  }
`
const ImgRedes = styled.img`
  width: 35px;
  margin: 0 4px;
`
const DescriptionArticleView = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  margin-top: 1.5rem;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  text-align: left;
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
const TextsArticle = styled.div`
  p {
    font-size: 1rem;
    max-width: 400ch;
    margin: 10px 0;
  }
  @media (max-width: 1023px) {
    margin: 20px 0;
  }
`
const LinkGoBack = styled(Link)`
  font-size: 1rem;
  color: #000;
  text-align: left; 
  &:visited {
    color: #000;
  }
`

const ArticleView = ({ title, date, image, content, projectId }) => {
  const { t } = useTranslation();
  const translatedTitle = t(`projects.${projectId}.title`);

  const translatedContent = content.map((paragraph, index) => t(`projects.${projectId}.content.${index}`));

  return (
    <ArticleViewContainer>
      <ArticleViewIntro>
        <h1>{translatedTitle}</h1>
        <p>{date}</p>
      </ArticleViewIntro>
      <ImgBg src={image} alt={`Wallpaper ${title}`} />
      <DescriptionArticleView>
        <TextsArticle>
          {translatedContent.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </TextsArticle>
        <ShareArticle>
          <p>{t('viewarticle.shareArticle')}</p>
          <div>
            <a href="#"><ImgRedes src="/twitter.svg" alt="" /></a>
            <a href="#"><ImgRedes src="/linkedin.svg" alt="" /></a>
            <a href="#"><ImgRedes src="/instagram.svg" alt="" /></a>
          </div>
        </ShareArticle>
        <LinkGoBack to="/">{'< Voltar para Home'}</LinkGoBack>
      </DescriptionArticleView>
      <BackToTop />
    </ArticleViewContainer>
  );
};

ArticleView.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  projectId: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ArticleView