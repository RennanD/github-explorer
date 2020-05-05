import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Container, Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/images/logo.svg';

interface RepositoryParams {
  name: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/15038553?s=460&u=86c88160916f81df81c7c7c15b021a171d341771&v=4"
            alt=""
          />
          <div>
            <strong>RennanD/Fastfeet</strong>
            <p>Descrição</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>4545</strong>
            <span>stars</span>
          </li>

          <li>
            <strong>48</strong>
            <span>forks</span>
          </li>

          <li>
            <strong>5</strong>
            <span>issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="/repositories/">
          <div>
            <strong>aslfkhjdhfd</strong>
            <p>fafdfhdjfhdufyu</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </Container>
  );
};

export default Repository;
