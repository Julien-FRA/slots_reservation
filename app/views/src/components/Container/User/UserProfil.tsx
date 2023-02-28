import { useContext } from 'react'
import { UserContext } from '../../../App';



const UserProfil = () => {
  const user = useContext(UserContext);

  if (user) {
    return (
      <div>
        <p>Bonjour {user?.name}!</p>
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