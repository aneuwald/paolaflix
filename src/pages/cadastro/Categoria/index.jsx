import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button'

const valoresIniciais = {
  nome: '',
  descricao: '',
  cor: '#000'
}

const CadastroCategoria = () => {

  const [categorias, setCategorias] = useState([])

  const [categoria, setCategoria] = useState(valoresIniciais)

  const handleChange = e => {
    let campo = e.target.getAttribute('name')
    let valor = e.target.value
    setCategoria({
      ...categoria,
      [campo]: valor
    })
  }

  const handleAddCategoria = e => {
    e.preventDefault()
    setCategorias([...categorias, categoria])
    setCategoria(valoresIniciais)
  }
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {categoria.nome}</h1>

      <form style={{ background: categoria.cor }} onSubmit={handleAddCategoria}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={categoria.nome}
          onChange={handleChange} />

        <FormField
          label="Descrição da Categoria:"
          type="textarea"
          name="descricao"
          value={categoria.descricao}
          onChange={handleChange} />

        <FormField
          label="Cor da Categoria"
          type="color"
          name="cor"
          value={categoria.cor}
          onChange={handleChange} />


        <Button onClick={handleAddCategoria}>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((cat, i) => (
          <li key={i} style={{ background: cat.cor }}>
            {cat.nome} {cat.cor}
          </li>
        ))}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;
