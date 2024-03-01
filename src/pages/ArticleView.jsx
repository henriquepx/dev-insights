import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import BackToTop from '../components/BackToTop';
import PropTypes from 'prop-types';

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
  gap: 50px;
  text-align: left;
`
const ShareArticle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
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
  font-size: .7rem;
  color: #000;
  text-align: left; 
  &:visited {
    color: #000;
  }
`

const ArticleView = ({ title, date, image, content }) => {
  return (
    <ArticleViewContainer>
      <ArticleViewIntro>
        <LinkGoBack to="/">{'< Voltar para Home'}</LinkGoBack>
        <h1>{title}</h1>
        <p>{date}</p>
      </ArticleViewIntro>
      <ImgBg src={image} alt={`Wallpaper ${title}`} />
      <DescriptionArticleView>
        <TextsArticle>
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </TextsArticle>
        <ShareArticle>
          <p>Compartilhar artigo</p>
          <div>
            <a href="#"><ImgRedes src="/twitter.svg" alt="" /></a>
            <a href="#"><ImgRedes src="/linkedin.svg" alt="" /></a>
            <a href="#"><ImgRedes src="/instagram.svg" alt="" /></a>
          </div>
        </ShareArticle>
      </DescriptionArticleView>
      <BackToTop />
    </ArticleViewContainer>
  );
};

ArticleView.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ArticleView