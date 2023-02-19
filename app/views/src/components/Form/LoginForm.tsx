import React, { SyntheticEvent, useState } from 'react'
import { loginUser } from '../../services/UserRequest'
import BtnSubmit from '../Button/BtnSubmit'
import InputMail from '../Input/InputMail'
import InputPsw from '../Input/InputPsw'
import InputText from '../Input/InputText'

const LoginForm = () => {
  const dataUser = {
    email: "",
    password: ""
  }

  const [login, setLogin] = useState(dataUser);
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleForm = (e: any) => {
    setLogin({ ...login, [e.target.id]: e.target.value })
  }
  
  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    if(login.email !== "" && login.password !== "") {
      const successLogin = await loginUser(login)
      console.log(successLogin)

      if(successLogin) {
        if(successLogin.message !== "Echec de la connexion") {
          setIsLogin(true)
          setError("")
        } else {
          setIsLogin(false)
          setError("Echec de la connexion")
        }
      } else {
        setIsLogin(false)
        setError("Echec de la connexion")
      }
    }
  }

  const btnValidate = login.email !== "" && login.password !== "" ? false :  true;

  const errorMsg = error !== "" && <div className="alert alert-danger mt-2" role="alert">{error}</div>;

  const loginMsg = isLogin && <div className="alert alert-success mt-2" role="alert">Vous êtes connecté</div>

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center">
      {errorMsg}
      {loginMsg}
      <div className="d-flex flex-column my-2">
        <input
          type="email"
          value={login.email}
          id="email"
          className="form-control"
          placeholder="Votre email"
          onChange={handleForm}
          required={true}
        />
        <div className="form-text">
          Veuillez rentrer votre adresse mail.
        </div>
      </div>
      <div className="d-flex flex-column my-2">
        <input
          type="password"
          value={login.password}
          id="password"
          className="form-control"
          placeholder="Votre mot de passe"
          onChange={handleForm}
          required={true}
        />
        <div className="form-text">
          Veuillez rentrer votre mot de passe.
        </div>
      </div>
      <BtnSubmit variant="dark" value="register" placeholder="Envoyer" disabled={btnValidate} />
    </form>
  )
}

export default LoginForm