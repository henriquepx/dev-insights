import styled from 'styled-components'
import PropTypes from 'prop-types';

const ArticleContainer = styled.div`
    display: flex;
    img {
        width: 270px;
        border-radius: 15px;
    }
`
const LinkToKnowBetter = styled.a`
    font-size: .7rem;
    font-style: normal;
    color: #000;
    font-weight: 600;
    margin-top: .5rem;
`
const TextArticle = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: .5rem 1rem;
    cursor: pointer;
    &:hover {
        ${LinkToKnowBetter} {
            color: #20a6ff;
        }
    }
    h2 {
        font-size: 1.1rem;
        font-weight: 500;
    }
`
const DateArticle = styled.p`
    font-size: .1rem;
    font-style: italic;
`
const DescriptionArticle = styled.p`
    font-size: .6rem;
    font-style: normal;
`

const Article = ({ imgproject, imgalt, titlearticle, datearticle, descriptionarticle, linktoknowbetter }) => {
    return (
      <ArticleContainer>
        <img src={imgproject} alt={imgalt} />
        <TextArticle>
          <h2>{titlearticle}</h2>
          <DateArticle>{datearticle}</DateArticle>
          <DescriptionArticle>{descriptionarticle}</DescriptionArticle>
          <LinkToKnowBetter href={linktoknowbetter}>Saiba mais »</LinkToKnowBetter>
        </TextArticle>
      </ArticleContainer>
    );
  };
  
  Article.propTypes = {
    imgproject: PropTypes.any.isRequired,
    imgalt: PropTypes.any.isRequired,
    titlearticle: PropTypes.any.isRequired,
    datearticle: PropTypes.any.isRequired,
    descriptionarticle: PropTypes.any.isRequired,
    linktoknowbetter: PropTypes.any.isRequired,
  };
  
  export default Article;