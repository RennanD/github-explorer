import styled from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  margin-top: 60px;
  max-width: 450px;
  font-size: 48px;
  color: #f0f0f5;
  line-height: 56px;

  @media screen and (max-width: 680px) {
    font-size: 36px;
  }
`;

export const Form = styled.form<FormProps>`
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
    border: 1px solid ${(props) => (props.hasError ? '#c53030' : '#fff')};
    border-right: 0;

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

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #222;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    img {
      height: 64px;
      width: 64px;
      border-radius: 50%;
      background: #444;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #f0f0f5;
      }

      p {
        font-size: 18px;
        color: #666;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }

    &:hover {
      transform: translateY(-5px);
    }

    @media screen and (max-width: 680px) {
      padding: 15px;

      img {
        height: 50px;
        width: 50px;
      }

      div {
        strong {
          font-size: 16px;
        }

        p {
          font-size: 14px;
        }
      }
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
