import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ServicoAutenticacao from "../../servicos/ServicoAutenticacao";

const instanciaServicoAutenticacao = new ServicoAutenticacao();


const VerificarAutenticacao = () => {
    const usuarioEstaLogado = instanciaServicoAutenticacao.usuarioEstaLogado();
    const navigate = useNavigate()
    useEffect(() => {
        if (!usuarioEstaLogado) {
            navigate('/login')
        }
    }, [navigate, usuarioEstaLogado])
    return usuarioEstaLogado ? <Outlet /> : null;



}

export default VerificarAutenticacao;