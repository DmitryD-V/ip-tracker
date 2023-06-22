import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  width: 100%;
  max-width: 740px;
  margin: 0 auto;
  padding: 20px 0;
  border-radius: 10px;
  background-color: #ffffff;
  transform: translateY(50%);
  box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 991px) {
    flex-direction: column;
    margin-top: 30px;
    padding: 0 30px;
    transform: none;
  }
`;

export const Item = styled.div`
  width: 25%;
  padding: 0 30px;
  border-right: 1px solid lightgray;
  
  &:last-child {
    border-right: 0;
  }

  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 20px 0;
    border-right: none;
    border-bottom: 1px solid lightgray;
    
    &:last-child {
      border-bottom: 0;
    }
  }
`;

export const ItemTitle = styled.div`
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 10px;
  color: grey;
`;

export const ItemDesc = styled.div`
  font-weight: bold;
  font-size: 18px;
  word-break: break-word;
`;
