import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  margin-top: 60px;
  max-width: 450px;
  font-size: 48px;
  color: #f0f0f5;
  line-height: 56px;

  @media screen and (max-width: 600px) {
    font-size: 36px;
  }
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 715px;

  display: flex;

  input {
    flex: 1;
    height: 50px;
    border: 0;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 150px;
    height: 50px;
    background: #04d361;
    border: 0;
    border-radius: 0 5px 5px 0;
    color: #f0f0f5;
    font-weight: bold;
    transition: background 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;
