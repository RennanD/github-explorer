import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

export const Container = styled.header`
  margin-top: 80px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    main {
      margin-left: 24px;
    }
  }

  ul {
    margin-top: 45px;
    list-style: none;
    display: flex;
    align-items: center;

    li + li {
      margin-left: 10px;
    }
  }
`;
