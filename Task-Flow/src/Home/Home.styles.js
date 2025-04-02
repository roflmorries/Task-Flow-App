import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);

  .auth__container {
    display: flex;
    gap: 40px;

    a {
      color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
      text-decoration: none;
      font-size: 18px;
      font-weight: 550;
    }
  }
`

export const Title = styled.div`
margin-bottom: 50px;
  span {
    font-size: 64px;
    font-family: "Tektur", sans-serif !important;
    font-weight: 550;
    span {
      color: #9000FF;
    }
  }
`