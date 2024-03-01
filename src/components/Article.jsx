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
const LinkToKnowBetter = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  margin-top: 0.5rem;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  &::after {
    display: inline-block;
    opacity: 0;
    -webkit-transition: -webkit-transform 0.3s, opacity 0.2s;
    -moz-transition: -moz-transform 0.3s, opacity 0.2s;
    transition: transform 0.3s, opacity 0.2s;
  }
  &:after {
    margin-left: 0px;
    content: '»';
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    transform: translateX(-20px);
  }


  a {
    color: #000; 
    text-decoration: none;

    &:visited {
      color: #000; 
    }
  }
`
const ArticleContainer = styled.div`
    display: flex;
    gap: 20px;
    animation: ${showingArticle} 1.4s ease-in-out;
    transition: .4s;
    &:hover {
      ${LinkToKnowBetter}::after {
      opacity: 1;
      transform: translateX(0);
    }
    }
    @media (max-width: 754px) {
      flex-direction: column;
      gap: 0px;
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
const TextArticle = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 1rem 0rem;
    h2 {
        font-size: 1.1rem;
        font-weight: 500;
    }


`
const DescriptionArticle = styled.p`
    font-size: 1rem;
`

const Article = ({ imgproject, imgalt, titlearticle, descriptionarticle, linktoknowbetter }) => {
  
  return (
      <ArticleContainer>
        <LinkWrapper to={linktoknowbetter}><img src={imgproject} alt={imgalt} /></LinkWrapper>
        <TextArticle>
          <h2>{titlearticle}</h2>
          <DescriptionArticle>{descriptionarticle}</DescriptionArticle>
        <LinkToKnowBetter><Link to={linktoknowbetter}>Saiba mais</Link></LinkToKnowBetter>
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