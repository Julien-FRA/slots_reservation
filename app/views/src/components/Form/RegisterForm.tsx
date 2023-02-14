import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/UserRequest";
import BtnSubmit from "../Button/BtnSubmit";

const RegisterForm = () => {
  const loginUser = {
    email: "",
    name: "",
    password: "",
    confirmPassword: ""
  }

  const [login, setLogin] = useState(loginUser);
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState("");

  const handleForm = (e: any) => {
    setLogin({ ...login, [e.target.id]: e.target.value})
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if(login.email.length >= 5 && login.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      if (login.name.length >= 5) {
        if (login.password.length >= 5) {
          if(login.password == login.confirmPassword) {
            registerUser(login.email, login.name, login.password)
            .then(() => {
              setLogin({ ...loginUser })
              setIsLogin('Votre compte a bien été crée, veuillez vous rendre sur la page de connexion');
            })
            .catch((error) => {
              setError(error);
            })
          } else {
            setError('Vos mots de passe de correspondent pas');
          }
        } else {
          setError('Votre mot de passe est invalide');
        }
      } else {
        setError('Votre pseudo est invalide');
      }
    } else {
      setError('Votre email est invalide');
    }
  };

  const btnValidate = login.email !== "" && login.name !== "" && login.password !== "" ? false : true;

  const errorMsg = error !== "" && <div className="alert alert-danger mt-2" role="alert">{error}</div>

  const loginMsg = isLogin !== "" && <div className="alert alert-success mt-2" role="alert">{isLogin}</div>

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center">
      {errorMsg}
      {loginMsg}
      <div className="d-flex flex-column my-2">
        <input
          // type="email"
          value={login.email}
          id="email"
          className="form-control"
          placeholder="Votre email"
          onChange={handleForm}
          // required={true}
        />
        <div className="form-text">
          Veuillez rentrer une adresse mail de type: johndoe@gmail.com.
        </div>
      </div>
      <div className="d-flex flex-column my-2">
        <input
          type="text"
          value={login.name}
          id="name"
          className="form-control"
          placeholder="Votre pseudo"
          onChange={handleForm}
          // required={true}
          // minLength={5}
        />
        <div className="form-text">
          Veuillez rentrer au minimum 5 charactères
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
          // required={true}
          // minLength={5}
        />
        <div className="form-text">
          Veuillez rentrer au minimum 5 charactères
        </div>
      </div>
      <div className="d-flex flex-column my-2">
        <input
          type="password"
          value={login.confirmPassword}
          id="confirmPassword"
          className="form-control"
          placeholder="Confirmez votre mot de passe"
          onChange={handleForm}
          // required={true}
          // minLength={5}
        />
        <div className="form-text">
          Veuillez rentrer au minimum 5 charactères
        </div>
      </div>
      <BtnSubmit variant="dark" value="register" placeholder="Envoyer" disabled={btnValidate} />
    </form>
  );
};

export default RegisterForm;
