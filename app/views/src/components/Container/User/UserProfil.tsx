import { useContext, useEffect } from 'react'
import { UserContext } from '../../../App';


const UserProfil = ({value}: any) => {
    // Récupérer le context
    const [users, setUsers] = useContext(UserContext)
    useEffect(() => {
      console.log(users)
    }, [users])

  if (users) {
    return (
        <div className='row m-5'>
            <div className="card col-6">
                <div className="list-group list-group-flush">
                    <p className="list-group-item">ID: {users.idUser}</p>
                    <p className="list-group-item">Nom: {users.name}</p>
                    <p className="list-group-item">Email: {users.email}</p>
                    <p className="list-group-item">Rôle: {users.role}</p>
                </div>
            </div>
        </div>
      )
  } else {
    return (
        <h1>Aucun utilisateur connecté</h1>
    )
  }
}

export default UserProfil