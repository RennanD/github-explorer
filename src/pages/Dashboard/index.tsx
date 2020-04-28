import React from 'react';

import { Title, Form } from './styles';

import logo from '../../assets/images/logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input type="text" placeholder="Digite o nome do repositório" />
      <button type="submit"> Pesquisar </button>
    </Form>
  </>
);

export default Dashboard;
