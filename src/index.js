import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './pages/home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

import { BrowserRouter, Switch, Route } from 'react-router-dom'


const page404 = () => (<h1>Página não encontrada!</h1>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
