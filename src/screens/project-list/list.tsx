import React from "react"
interface ListProps {
  list: any[],
  users: any[]
}

const List = ({list, users}: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>

      <tbody>
        {
          list.map(item => {
            return (
              <tr key={item.personId}>
                <td> {item.name} </td>
                <td> {users.find(user => user.id === item.personId)?.name} </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default List