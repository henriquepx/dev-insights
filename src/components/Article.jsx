import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const showingArticle = keyframes`
  0% {
        opacity: 0;
    }
    100% {
      opacity: 1;
    }
`
const ArticleContainer = styled.div`
    display: flex;
    gap: 20px;
    animation: ${showingArticle} 1.4s ease-in-out;
    transition: .4s;
    @media (max-width: 754px) {
      flex-direction: column;
    }
`
const LinkWrapper = styled(Link)`
  transition: transform 0.3s ease-in-out;
  img {
        max-width: 100%;
        width: 700px;
        border-radius: 20px;
        @media (max-width: 754px) {
          max-width: 100%;
        }
    }
`
const LinkToKnowBetter = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  margin-top: 0.5rem;
  text-decoration: none;
  cursor: pointer;

  a {
    color: #000; 
    text-decoration: none;

    &:visited {
      color: #000; 
    }
  }
`
const TextArticle = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: .65rem 0rem;
    h2 {
        font-size: 1.1rem;
        font-weight: 500;
    }
    @media (max-width: 900px) {
      padding: .7rem 0rem;
    }


`
const DescriptionArticle = styled.p`
    font-size: .6rem;
    font-style: normal;
    @media (max-width: 1024px) {
      font-size: 1rem;
      margin: 10px0;
    }
`

const Article = ({ imgproject, imgalt, titlearticle, descriptionarticle, linktoknowbetter }) => {
  
  return (
      <ArticleContainer>
        <LinkWrapper to={linktoknowbetter}><img src={imgproject} alt={imgalt} /></LinkWrapper>
        <TextArticle>
          <h2>{titlearticle}</h2>
          <DescriptionArticle>{descriptionarticle}</DescriptionArticle>
          <LinkToKnowBetter><Link to={linktoknowbetter}>Saiba mais »</Link></LinkToKnowBetter>
        </TextArticle>
      </ArticleContainer>
    )
  }
  
  Article.propTypes = {
    imgproject: PropTypes.any.isRequired,
    imgalt: PropTypes.any.isRequired,
    titlearticle: PropTypes.any.isRequired,
    descriptionarticle: PropTypes.any.isRequired,
    linktoknowbetter: PropTypes.any.isRequired,
  };
  
  export default Article;