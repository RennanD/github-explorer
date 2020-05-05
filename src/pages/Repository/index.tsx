import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Container, Header, RepositoryInfo, Issues } from './styles';

import HeaderSkeleton from '../../components/HeaderSkeleton';

import logoImg from '../../assets/images/logo.svg';

import api from '../../services/api';

interface RepositoryParams {
  name: string;
}

interface Repository {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  description: string;
}

interface Issue {
  id: string;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    setLoading(true);

    api.get(`/repos/${params.name}`).then((response) => {
      setRepository(response.data);
    });

    api.get(`/repos/${params.name}/issues`).then((response) => {
      setIssues(response.data);
    });

    setLoading(false);
  }, [params.name]);

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository ? (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>stars</span>
            </li>

            <li>
              <strong>{repository.forks_count}</strong>
              <span>forks</span>
            </li>

            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>issues</span>
            </li>
          </ul>
        </RepositoryInfo>
      ) : (
        <HeaderSkeleton />
      )}

      <Issues>
        {issues.map((issue) => (
          <a
            key={issue.id}
            target="_blank"
            rel="noopener noreferrer"
            href={`${issue.html_url}`}
          >
            <div>
              <strong>{issue.title}</strong>
              <p>fafdfhdjfhdufyu</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </Container>
  );
};

export default Repository;
