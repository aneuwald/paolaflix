import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function CadastroCategoria() {
    return (
        <PageDefault>
            <h1>CADASTRO DE CATEGORIA</h1>
            <Link to="/cadastro/video">
                Cadastrar Vídeo
            </Link>
            <br /><br />
            <Link to="/">
                Go HOME!
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria
