import styled from 'styled-components';

const ArticleViewContainer = styled.div`
    margin: 10rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    h1 {
        text-align: center;
        color: #000;
        font-weight: 600;
        font-size: 1.8rem;
        max-width: 30ch;
    }
    p {
        margin-bottom: 2.5rem;
        font-size: .8rem;
    }
`
const DescriptionArticleView = styled.div`

`

const ArticleView = () => {
  return (
    <ArticleViewContainer>
          <h1>Qual melhor Framework após aprender JavaScript?</h1>
          <p>20/02/2024</p>
          <img src="/angualrvuereact.png" alt="Wallpaper Angular x React x Vue" />
          <DescriptionArticleView>
              
            </DescriptionArticleView>
      </ArticleViewContainer>
  )
}

export default ArticleView