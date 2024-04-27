import { Link } from 'react-router-dom'
import styled, {keyframes} from 'styled-components'
import PropTypes from 'prop-types';
import { FiExternalLink } from "react-icons/fi";

const showingArticle = keyframes`
  0% {
        opacity: 0;
    }
    100% {
      opacity: 1;
    }
`

const ComponentContainer = styled(Link)`
    width: 100%;
    animation: ${showingArticle} 1.4s ease-in-out;
`
const TitleLink = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const TitleComponent = styled.h2`
    font-weight: 700;
    font-size: 1.5rem;
    color: #000;
`
const DescriptionComponent = styled.p`
    margin-top: .4rem;
    color: #000;
`

const Components = ( { linkcomponent, titlecomponent, descriptioncomponent }) => {
  return (
      <ComponentContainer to={linkcomponent}>
          <TitleLink>
              <TitleComponent>{titlecomponent}</TitleComponent>
              <FiExternalLink size={24} style={{ color: '#000000' }} />
          </TitleLink>
          <DescriptionComponent>{descriptioncomponent}</DescriptionComponent>
    </ComponentContainer>
  )
}

Components.propTypes = {
    descriptioncomponent: PropTypes.string.isRequired,
    titlecomponent: PropTypes.string.isRequired,
    linkcomponent: PropTypes.any.isRequired
  };

export default Components