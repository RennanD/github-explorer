import React from 'react';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { Container } from './styles';

const HeaderSkeleton: React.FC = () => (
  <Container>
    <SkeletonTheme color="#333" highlightColor="#444">
      <div>
        <Skeleton circle width={80} height={80} />

        <main>
          <Skeleton width={500} height={30} count={2} />
        </main>
      </div>
    </SkeletonTheme>

    <SkeletonTheme color="#333" highlightColor="#444">
      <ul>
        <li>
          <Skeleton width={60} height={60} />
        </li>

        <li>
          <Skeleton width={60} height={60} />
        </li>

        <li>
          <Skeleton width={60} height={60} />
        </li>
      </ul>
    </SkeletonTheme>
  </Container>
);

export default HeaderSkeleton;
