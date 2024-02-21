import styled, { keyframes } from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const showingArticle = keyframes`
  0% {
        transform: translate3d(20%, 0, 0);
        opacity: .2;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
`;

const ArticleContainer = styled.div`
    display: flex;
    gap: 20px;
    animation: ${showingArticle} 2.2s ease-in-out;
    transition: .4s;
    img {
        max-width: 100%;
        width: 300px;
        border-radius: 20px;
        @media (max-width: 754px) {
          max-width: 100%;
        }
    }
    @media (max-width: 754px) {
      flex-direction: column;
    }
`
const LinkToKnowBetter = styled.a`
  font-size: .7rem;
  font-style: normal;
  color: ${({ visited }) => (visited ? '#000000' : '#000')};
  font-weight: 600;
  margin-top: .5rem;
  text-decoration: none;
  cursor: pointer;
  &:visited {
    color: #000000;
  }
`;
const TextArticle = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: .65rem 0rem;
    cursor: pointer;
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
`

const Article = ({ imgproject, imgalt, titlearticle, descriptionarticle, linktoknowbetter }) => {
  const [visited, setVisited] = useState(false);  
  
  return (
      <ArticleContainer>
        <img src={imgproject} alt={imgalt} />
        <TextArticle>
          <h2>{titlearticle}</h2>
          <DescriptionArticle>{descriptionarticle}</DescriptionArticle>
          <LinkToKnowBetter
            visited={visited}
            onClick={() => setVisited(true)}
          >
          <Link to={linktoknowbetter}>Saiba mais »</Link>
        </LinkToKnowBetter>
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