import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

import logo from '../../assets/images/logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input type="text" placeholder="Digite o nome do repositório" />
      <button type="submit"> Pesquisar </button>
    </Form>

    <Repositories>
      <a href="/teste">
        <img
          src="https://avatars1.githubusercontent.com/u/15038553?s=460&u=86c88160916f81df81c7c7c15b021a171d341771&v=4"
          alt="Avatar"
        />

        <div>
          <strong>rennand/fastfeet</strong>
          <p>The main challenge Rocketseats GoStack.</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="/teste">
        <img
          src="https://avatars1.githubusercontent.com/u/15038553?s=460&u=86c88160916f81df81c7c7c15b021a171d341771&v=4"
          alt="Avatar"
        />

        <div>
          <strong>rennand/fastfeet</strong>
          <p>The main challenge Rocketseats GoStack.</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="/teste">
        <img
          src="https://avatars1.githubusercontent.com/u/15038553?s=460&u=86c88160916f81df81c7c7c15b021a171d341771&v=4"
          alt="Avatar"
        />

        <div>
          <strong>rennand/fastfeet</strong>
          <p>The main challenge Rocketseats GoStack.</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
