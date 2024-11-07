import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import Cabecalho from './comum/componentes/Cabecalho/Cabecalho';
import Rodape from './comum/componentes/Rodape/Rodape';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


import BotaoContador from './paginas/BotaoContador/BotaoContador';
import ListaProdutos from './paginas/ListaProdutos/ListaProdutos';
import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';
import PaginaListaTarefas from './paginas/PaginaListaTarefas/PaginaListaTarefas';
import PaginaListaClientes from './paginas/PaginaListaClientes/PaginaListaClientes';
import PaginaCadastroCliente from './paginas/PaginaCadastroCliente/PaginaCadastroCliente';
import PaginaNovoUsuario from './paginas/PaginaNovoUsuario/PaginaNovoUsuario';
import PaginaLogin from './paginas/PaginaLogin/PaginaLogin';
import VerificarAutenticacao from './comum/componentes/VerificarAutenticacao/VerificarAutenticacao';



const router = createBrowserRouter([
  {
    path: 'login',
    element: <PaginaLogin />
  },
  {
    path: 'novo-usuario',
    element: <PaginaNovoUsuario />
  },
  {
    path: '',
    element: <VerificarAutenticacao />,
    children: [{
      path: '',
      element: <PaginaInicial />,
    },
    {
      path: 'lista-tarefas',
      element: <PaginaListaTarefas />,
    },
    {
      path: 'lista-clientes',
      element: <PaginaListaClientes />,
    },
    {
      path: 'cadastro-cliente/:id?',
      element: <PaginaCadastroCliente />,
    },]
  },

]);

function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={router} />
      <Rodape />
      <ToastContainer />
    </>
  );
}

export default App;
