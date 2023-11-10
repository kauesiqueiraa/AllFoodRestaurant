import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import http from "../../../http";
import ITag from "../../../interfaces/ITag";
import IRestaurante from "../../../interfaces/IRestaurante";


export default function FormularioPrato() {
  const [nomePrato, setNomePrato] = useState('')
  const [descricao, setDescricao] = useState('')
  const [tags, setTags] = useState<ITag[]>([])
  const [tag, setTag] = useState('')
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
  const [restaurante, setRestaurante] = useState('')
  const [imagem, setImagem] = useState<File | null>(null)

  const parametros = useParams()

  useEffect(() => {
    http.get<{ tags: ITag[] }>('tags/')
      .then(res => setTags(res.data.tags))
    http.get<IRestaurante[]>('restaurantes/')
      .then(res => setRestaurantes(res.data))
  }, [])

  const selecionarArquivo = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      setImagem(event.target.files[0])
    } else {
      setImagem(null)
    }
  }

  const aoSubmeterForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData();

    formData.append('nome', nomePrato)
    formData.append('descricao', descricao)
    formData.append('tag', tag)
    formData.append('restaurante', restaurante)

    if (imagem) {
      formData.append('imagem', imagem)
    }

    http.request({
      url: 'pratos/',
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: formData
    })
      .then(() => {
        setNomePrato('')
        setDescricao('')
        setTag('')
        setRestaurante('')
        alert('Prato cadastrado com Sucesso!')
      })
      .catch(err => console.log(err))
  }

  return (

    <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", flexGrow: 1 }}>
      <Typography component="h1" variant="h6">Formulário de Pratos</Typography>
      <Box component="form" sx={{ width: '100%' }} onSubmit={aoSubmeterForm}>
        <TextField
          value={nomePrato}
          onChange={event => setNomePrato(event.target.value)}
          id="standard-basic"
          label="Nome do Prato:"
          variant="standard"
          fullWidth
          required
          margin="dense"
        />
        <TextField
          value={descricao}
          onChange={event => setDescricao(event.target.value)}
          id="standard-basic"
          label="Descrição do Prato:"
          variant="standard"
          fullWidth
          required
          margin="dense"
        />
        <FormControl margin="dense" fullWidth >
          <InputLabel id="select-tag">Tag</InputLabel>
          <Select labelId="select-tag" value={tag} onChange={event => setTag(event.target.value)}>
            {tags.map(tag => <MenuItem key={tag.id} value={tag.value}>
              {tag.value}
            </MenuItem>)}
          </Select>
        </FormControl>

        <FormControl margin="dense" fullWidth >
          <InputLabel id="select-restaurante">Restaurante</InputLabel>
          <Select labelId="select-restaurante" value={restaurante} onChange={event => setRestaurante(event.target.value)}>
            {restaurantes.map(restaurante => <MenuItem key={restaurante.id} value={restaurante.id}>
              {restaurante.nome}
            </MenuItem>)}
          </Select>
        </FormControl>

        <input type="file" onChange={selecionarArquivo}></input>
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