import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

import IRestaurante from '../../interfaces/IRestaurante';
import { IPaginacao } from '../../interfaces/IPaginacao';

import Restaurante from './Restaurante';

import style from './ListaRestaurantes.module.scss';

interface IParametrosBusca {
  ordering?: string
  search?: string
}

const ListaRestaurantes = () => {

  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
  const [proximaPagina, setProximaPagina] = useState('')
  const [paginaAnterior, setPaginaAnterior] = useState('')

  const [busca, setBusca] = useState('')
  const [ordenacao, setOrdenacao] = useState('')

  // agora, o carregarDados recebe opcionalmente opções de configuração
  const carregarDados = (url: string, opcoes: AxiosRequestConfig = {}) => {
    axios.get<IPaginacao<IRestaurante>>(url, opcoes)
      .then(res => {
        setRestaurantes(res.data.results)
        setProximaPagina(res.data.next)
        setPaginaAnterior(res.data.previous)
      })
      .catch(erro => {
        console.log(erro)
      })
  }

  // a cada busca, montamos um objeto de opções
  const buscar = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const opcoes = {
      params: {

      } as IParametrosBusca
    }
    if (busca) {
      opcoes.params.search = busca
    }
    carregarDados("http://localhost:8000/api/v1/restaurantes/", opcoes)
  }

  useEffect(() => {
    // obter restaurantes
    carregarDados("http://localhost:8000/api/v1/restaurantes/")
  }, [])

  return (<section className={style.ListaRestaurantes}>
    <h1>Os restaurantes mais <em>bacanas</em>!</h1>
    <form onSubmit={buscar}>
      <div>
        <input type="text" value={busca} onChange={event => setBusca(event.target.value)} />
      </div>
      <div>
        <label htmlFor="select-ordenacao">Ordenação</label>
        <select
          name="select-ordenacao"
          id="select-ordenacao"
          value={ordenacao}
          onChange={event => setOrdenacao(event.target.value)}
        >
          <option value="">Padrão</option>
          <option value="id">Por ID</option>
          <option value="nome">Por Nome</option>
        </select>
      </div>
      <div>
        <button type='submit'>buscar</button>
      </div>
    </form>
    {restaurantes?.map(item => <Restaurante restaurante={item} key={item.id} />)}
    {<button onClick={() => carregarDados(paginaAnterior)} disabled={!paginaAnterior}>
      Página Anterior
    </button>}
    {<button onClick={() => carregarDados(proximaPagina)} disabled={!proximaPagina}>
      Próxima Página
    </button>}
    {/* {proximaPagina && <button onClick={verMais}>
      ver mais
    </button>} */}
  </section>)
}

export default ListaRestaurantes