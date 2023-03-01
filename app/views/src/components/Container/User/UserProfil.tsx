import { useContext } from 'react'
import { UserContext } from '../../../App';



const UserProfil = () => {
  const user = useContext(UserContext);

  if (user) {
    return (
      <div>
        <p>Bonjour <strong>{user?.name}</strong>!</p>
        <p>ID: <strong>{user?.idUser}</strong></p>
        <p>Email: <strong>{user?.email}</strong></p>
        <p>Role: <strong>{user?.role}</strong></p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Connectez-vous pour voir vos informations.</p>
      </div>
    );
  }
}

export default UserProfil