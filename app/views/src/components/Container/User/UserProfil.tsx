import React, { useEffect, useState } from 'react'
import { getUser } from '../../../services/UserRequest';

const UserProfil = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    useEffect(() => {
        (
            async () => {
                const response = await getUser();
                setId(response.idUser)
                setName(response.name)
                setEmail(response.email)
                setRole(response.role)
            }
        )();
    })

  return (
    <div className='row m-5'>
        <div className="card col-6">
            <div className="list-group list-group-flush">
                <p className="list-group-item">ID: {id}</p>
                <p className="list-group-item">Nom: {name}</p>
                <p className="list-group-item">Email: {email}</p>
                <p className="list-group-item">Rôle: {role}</p>
            </div>
        </div>
    </div>
  )
}

export default UserProfil