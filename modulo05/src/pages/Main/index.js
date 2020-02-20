import React, { Component } from 'react'
import { FaGithubAlt, FaPlus } from 'react-icons/fa'

import api from '../../services/api'
import { Conteiner, Form, SubmitButton } from './styles'

export default class Main extends Component {
  state = {
    newRepo: '',
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value })
  }

  handleSubmit = async e => {
    e.preventDefault()

    const { newRepo } = this.state
    const response = await api.get(`/repos/${newRepo}`)

    console.log(response.data)
  }

  render() {
    const { newRepo } = this.state

    return (
      <Conteiner>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton disabled>
            <FaPlus color="#FFF" size={14} />
          </SubmitButton>
        </Form>
      </Conteiner>
    )
  }
}
