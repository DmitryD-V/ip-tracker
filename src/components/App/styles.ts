import styled, {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%;
    width: 100%;
  }

  #root {
    height: 100%;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: linear-gradient(90deg, rgba(9, 9, 121, 1) 0%, rgba(0, 212, 255, 1) 100%);
`;

export const Content = styled.div`
  padding: 40px 20px 0;

  @media screen and (max-width: 991px) {
    width: 100%;
    padding-bottom: 40px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
  color: #ffffff;
`;
