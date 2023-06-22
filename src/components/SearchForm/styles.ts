import styled, {css} from 'styled-components';

interface Props {
    error?: boolean
}

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

export const Field = styled.input`
  width: 100%;
  padding: 15px 20px;
  border-radius: 10px 0 0 10px;
  border: 0;
  outline: none;

  ${(props: Props) => props.error && css`
    border: 2px solid red;
  `}
`;

export const Button = styled.button`
  position: relative;
  flex-shrink: 0;
  width: 45px;
  border-radius: 0 10px 10px 0;
  border: 0;
  outline: none;
  background-color: #000000;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    border: solid #ffffff;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }
`;

export const ErrorText = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  color: red;
`;