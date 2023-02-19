import React, { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/UserRequest";
import BtnSubmit from "../Button/BtnSubmit";

const RegisterForm = () => {
  const dataUser = {
    email: "",
    name: "",
    password: "",
    confirmPassword: ""
  }

  const [register, setRegister] = useState(dataUser);
  const [error, setError] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const navigate = useNavigate();

  const handleForm = (e: any) => {
    setRegister({ ...register, [e.target.id]: e.target.value})
  }

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    if(register.email.length >= 5 && register.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      if (register.name.length >= 5) {
        if (register.password.length >= 5) {
          if(register.password == register.confirmPassword) {
            const successRegister = await registerUser(register)
            if (successRegister) {
              setRegister({ ...dataUser })
              setIsRegister(true)
              setError('')
              setTimeout(() => {
                navigate('/login')
              }, 2000)
            }
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
    console.log(error)
    console.log(isRegister)
  };

  const btnValidate = register.email !== "" && register.name !== "" && register.password !== "" ? false : true;

  const errorMsg = error !== "" && <div className="alert alert-danger mt-2" role="alert">{error}</div>

  const loginMsg = isRegister && <div className="alert alert-success mt-2" role="alert">Votre compte a bien été crée, veuillez vous rendre sur la page de connexion</div>

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center">
      {errorMsg}
      {loginMsg}
      <div className="d-flex flex-column my-2">
        <input
          type="email"
          value={register.email}
          id="email"
          className="form-control"
          placeholder="Votre email"
          onChange={handleForm}
          required={true}
        />
        <div className="form-text">
          Veuillez rentrer une adresse mail de type: johndoe@gmail.com.
        </div>
      </div>
      <div className="d-flex flex-column my-2">
        <input
          type="text"
          value={register.name}
          id="name"
          className="form-control"
          placeholder="Votre pseudo"
          onChange={handleForm}
          required={true}
          minLength={5}
        />
        <div className="form-text">
          Veuillez rentrer au minimum 5 charactères
        </div>
      </div>
      <div className="d-flex flex-column my-2">
        <input
          type="password"
          value={register.password}
          id="password"
          className="form-control"
          placeholder="Votre mot de passe"
          onChange={handleForm}
          required={true}
          minLength={5}
        />
        <div className="form-text">
          Veuillez rentrer au minimum 5 charactères
        </div>
      </div>
      <div className="d-flex flex-column my-2">
        <input
          type="password"
          value={register.confirmPassword}
          id="confirmPassword"
          className="form-control"
          placeholder="Confirmez votre mot de passe"
          onChange={handleForm}
          required={true}
          minLength={5}
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
