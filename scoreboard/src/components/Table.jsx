import React from 'react'
import { DeleteOutlined } from '@ant-design/icons'

export default function TableUsers({ setUsers, users,deletePlayer , scorePlayer}) {
  return (
    <div>
      <table id='table' className='table'>
        <tbody>
          {
            users.map((user) => (
              <tr key={user.id}>
                <td> <button onClick={() => deletePlayer(user.id)}>
                  <DeleteOutlined/>
                </button>
                </td>

                <td id='name'>
                  {user.name}
                </td>
                <td>
                  <button onClick={()=>{
                    scorePlayer(user.id, "-")
                  }}>-</button>
                </td>
                <td>
                  {user.score}
                </td>
                <td>
                  <button onClick={()=>{
                    scorePlayer(user.id, "+")
                  }}>+</button>
                </td>
              </tr>
            ))
          }



        </tbody>

      </table>
    </div>
  )
}
