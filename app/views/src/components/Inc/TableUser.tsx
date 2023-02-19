import { Table } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { GetAllUsers } from '../../services/HttpRequests';
import { User } from '../../services/HttpRequests';

function UserList() {
  const [users, setUsers] = useState<User[]| any>([]);

  useEffect(() => {
    const loadUserList = async () => {
      try {
        const users = await GetAllUsers();
        setUsers(users)
      } catch(error) {
        console.log(error);
      }
    }; 
    loadUserList();
}, []);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th> 
        </tr>
      </thead>
      <tbody>
        {users.map((user: User) => (
          <tr>
            <td>{user.idUser}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default UserList;