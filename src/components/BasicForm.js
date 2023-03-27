import React, { useRef, useState } from 'react';
import config from '../config';



const initialState = {
    nome: "",
    cpf: "",
    telefone: "",
    endereco: "",
    cidade: "",
    estado: "",
    cep: "",
    pai: "",
    mae: "",
    nascimento: "",
    sexo: "",
    email: "",
  }

const BasicForm = () => {
  const [form, setForm] = useState(initialState)

  const firstInput = useRef()

  /**
   * @param {import('react').ChangeEvent} e 
   */
  function setValue(e) {
    const {name, value} = e.currentTarget

    setForm((current) => {
      return {...current, [name]: value}
    });
  }

  /**
   * @param {SubmitEvent} e
   */
  function handleSubmit(e) {
    e.preventDefault()

    // TODO submit to backend

    // localStorage user
    const users = JSON.parse(localStorage.getItem(config.USER_KEY) || '[]')

    // append form
    users.push({
      id: users.length + 1,
      ...form
    })

    // reset form
    setForm(initialState)

    // save
    localStorage.setItem(config.USER_KEY, JSON.stringify(users))

    firstInput.current.focus()

    alert('Enviado com sucesso!')
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>

      <label htmlFor="nome">Nome</label>
      <input ref={firstInput} name="nome" id="nome" type="text" value={form.nome} onChange={setValue} placeholder="Digite seu nome completo" />
      
      <label htmlFor="cpf">CPF</label>
      <input name="cpf" id="cpf" type="number" value={form.cpf} onChange={setValue} placeholder="Digite seu CPF" />

      <label htmlFor="telefone">Telefone</label>
      <input name="telefone" id="telefone" type="tel" value={form.telefone} onChange={setValue} placeholder="(xx) xxxxx-xxxx" />

      <label htmlFor="endereco">Endereço</label>
      <input
       ref={firstInput} name="endereco" id="endereco" type="text" value={form.endereco} onChange={setValue} placeholder="Digite o nome da rua e número"
      />

      <label htmlFor="cidade">Cidade</label>
      <input ref={firstInput} name="cidade" id="cidade" type="text" value={form.cidade} onChange={setValue} placeholder="Digite sua cidade" />
      <label htmlFor="estado">Estado</label>
      <input ref={firstInput} name="estado" id="estado" type="text" value={form.estado} onChange={setValue} placeholder="Digite seu estado" />
      <label htmlFor="cep">CEP</label>
      <input ref={firstInput} name="cep" id="cep" type="text" value={form.cep} onChange={setValue} placeholder="Digite seu CEP" />
      <label htmlFor="pai">Nome do Pai</label>
      <input ref={firstInput} name="pai" id="pai" type="text" value={form.pai} onChange={setValue} placeholder="Digite o nome do seu pai" />
      <label htmlFor="mae">Nome da Mãe</label>
      <input ref={firstInput} name="mae" id="mae" type="text" value={form.mae} onChange={setValue} placeholder="Digite o nome da sua mãe" />
      <label htmlFor="nascimento">Data de nascimento</label>
      <input
        ref={firstInput} name="nascimento" id="nascimento" type="text" value={form.nascimento} onChange={setValue} placeholder="Digite sua data de nascimento"
      />
      <label htmlFor="sexo">Sexo</label>
      <input ref={firstInput} name="sexo" id="sexo" type="text" value={form.sexo} onChange={setValue} placeholder="Digite seu sexo" />
      <label htmlFor="email">Email</label>
      <input ref={firstInput} name="email" id="email" type="text" value={form.email} onChange={setValue} placeholder="Digite seu email" />
      <button className="button">Enviar</button>
    </form>
  );
};
export default BasicForm;
