import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import http from "../../../http";


export default function FormularioRestaurante() {
  const [nomeRestaurante, setNomeRestaurante] = useState('')

  const parametros = useParams()

  useEffect(() => {
    if (parametros.id) {
      http.get(`restaurantes/${parametros.id}/`)
        .then(res => setNomeRestaurante(res.data.nome))
    }
  }, [parametros])

  const aoSubmeterForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (parametros.id) {
      http.put(`restaurantes/${parametros.id}/`, {
        nome: nomeRestaurante
      })
        .then(() => {
          alert("Restaurante atualizado com Sucesso!")
        })
    } else {
      http.post("restaurantes/", {
        nome: nomeRestaurante
      })
        .then(() => {
          alert("Restaurante cadastrado com Sucesso!")
        })
    }

  }

  return (

    <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", flexGrow: 1 }}>
      <Typography component="h1" variant="h6">Formulário de Restaurantes</Typography>
      <Box component="form" sx={{ width: '100%' }} onSubmit={aoSubmeterForm}>
        <TextField
          value={nomeRestaurante}
          onChange={event => setNomeRestaurante(event.target.value)}
          id="standard-basic"
          label="Nome do Restaurante:"
          variant="standard"
          fullWidth
          required
        />
        <Button
          sx={{ marginTop: 1 }}
          type="submit"
          variant="outlined"
          fullWidth
        >
          Salvar
        </Button>
      </Box>
    </Box>


  )
}