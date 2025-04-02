import styled from 'styled-components';
import { Button } from 'antd';

export const ContentWrapper = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  height: 91vh !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const LogOutButton = styled(Button)`
    margin-top: 20px;
    align-self: flex-start;
    background: none;
    border: none;
    font-size: 34px;
    margin-bottom: 3%;
    font-weight: 500;
    box-shadow: none;
    color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')} !important;
    &:hover {
      background: none !important;
    }
`