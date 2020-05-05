import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #f0f0fd;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #f0f0fd;
      }

      span {
        display: block;
        font-size: 18px;
        color: #6c6c80;
        margin-top: 4px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    header {
      display: flex;
      align-items: center;

      img {
        height: 60px;
        width: 60px;
        border-radius: 50%;
      }

      div {
        strong {
          font-size: 30px;
        }

        p {
          font-size: 15px;
        }
      }
    }

    ul {
      margin-top: 20px;

      li {
        & + li {
          margin-left: 50px;
        }

        strong {
          font-size: 28px;
        }

        span {
          font-size: 14px;
        }
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

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
