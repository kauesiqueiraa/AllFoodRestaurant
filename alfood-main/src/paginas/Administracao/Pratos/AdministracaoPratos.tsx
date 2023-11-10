import { useEffect, useState } from "react"
import { Link as RouterLink } from 'react-router-dom';

import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link } from "@mui/material"
import IPrato from "../../../interfaces/IPrato"
import http from "../../../http"

export default function AdministracaoPratos() {
  const [pratos, setPratos] = useState<IPrato[]>([])

  useEffect(() => {
    http.get<IPrato[]>("pratos/")
      .then(res => setPratos(res.data))
  }, [])

  const excluir = (pratoAhSerExcluido: IPrato) => {
    http.delete(`pratos/${pratoAhSerExcluido.id}/`)
      .then(() => {
        const listaPratos = pratos.filter(prato => prato.id !== pratoAhSerExcluido.id)
        setPratos([...listaPratos])
      })
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Nome
            </TableCell>
            <TableCell>
              Descrição
            </TableCell>
            <TableCell>
              Tag
            </TableCell>
            <TableCell>
              Imagem
            </TableCell>
            <TableCell>
              Editar
            </TableCell>
            <TableCell>
              Excluir
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {pratos.map(prato =>
            <TableRow key={prato.id}>
              <TableCell>
                {prato.nome}
              </TableCell>
              <TableCell>
                {prato.descricao}
              </TableCell>
              <TableCell>
                {prato.tag}
              </TableCell>
              <TableCell>
                <Button variant="contained">
                  <a href={prato.imagem} target="_black" rel="noreferrer" >Ver Imagem</a>
                </Button>
              </TableCell>
              <TableCell>
                <Link component="button" variant="body2">
                  [ <RouterLink to={`/admin/pratos/${prato.id}`}>editar</RouterLink>]
                </Link>
              </TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => excluir(prato)}
                >
                  Excluir
                </Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}