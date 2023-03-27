import React, { useEffect, useState } from "react"
import config from '../../config'

import './style.css'


 const Consultar = function () {
  const [search, setSearch] = useState()
  const [users, setUsers] = useState([])

  useEffect(() => {
    const storageUsers = JSON.parse(localStorage.getItem(config.USER_KEY) || '[]')

    setUsers(storageUsers)
  }, [])

  /**
   * @param {SubmitEvent} e
   */
  function handleSubmit(e) {
    e.preventDefault()

    // TODO request to backend

    let usersStorage = JSON.parse(localStorage.getItem(config.USER_KEY) || '[]')

    usersStorage = usersStorage.filter(user => user.nome.toLowerCase().includes(search.toLowerCase()))

    setUsers(usersStorage)
  }

  /**
   * @param {number} id 
   */
 function handleRemove(id) {
    const users = JSON.parse(localStorage.getItem(config.USER_KEY) || '[]')

    const index = users.findIndex(user => user.id === id)

    users.splice(index, 1)

    localStorage.setItem(config.USER_KEY, JSON.stringify(users))

    setUsers(users)
  }
 return (
    <div className="consultar">
      <form onSubmit={handleSubmit}>
        <label htmlFor='search'>Buscar</label>
        <input type='text' id='search' onChange={e => setSearch(e.target.value)} />
        <button type="submit">
        Buscar
        </button>
      </form>

      <table>
        <thead>
          {users.map(user => (
          <tr key={user.id.toString()}>
            <td>
              {user.nome}
            </td>
            <td>
              {user.cpf}
            </td>
            <td>
              {user.telefone}
            </td>
            <td>
              {user.endereco}
            </td>
            <td>
              {user.cidade}
            </td>
            <td>
              {user.estado}
            </td>
            <td>
              {user.cep}
            </td>
            <td>
              {user.pai}
            </td>
            <td>
              {user.mae}
            </td>
            <td>
              {user.nascimento}
            </td>
            <td>
              {user.sexo}
            </td>
            <td>
              {user.email}
            </td>
            

            <td>
              <button onClick={() => handleRemove(user.id)}>x</button>
            </td>
          </tr>
        ))}
        </thead>
      </table>
    </div>
  )
}


export default Consultar;