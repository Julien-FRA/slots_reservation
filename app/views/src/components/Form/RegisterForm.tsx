import React, { useEffect, useState } from "react";
import { registerUser } from "../../services/UserRequest";
import BtnSubmit from "../Button/BtnSubmit";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const user = await registerUser(email, pseudo, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column">
      <div className="d-flex flex-column input-group mx-2 my-2">
        <input
          type="email"
          name={email}
          className="form-control w-100"
          placeholder="Votre email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="form-text">
          Veuillez rentrer une adresse mail de type: johndoe@gmail.com.
        </div>
      </div>
      <div className="d-flex flex-column input-group mx-2 my-2">
        <input
          type="text"
          name={pseudo}
          className="form-control w-100"
          placeholder="Votre pseudo"
          onChange={(e) => setPseudo(e.target.value)}
          required={true}
          minLength={3}
        />
        <div className="form-text">
          Veuillez rentrer au minimum 3 charactères
        </div>
      </div>
      <div className="d-flex flex-column input-group mx-2 my-2">
        <input
          type="password"
          name={password}
          className="form-control w-100"
          placeholder="Votre mot de passe"
          onChange={(e) => setPassword(e.target.value)}
          required={true}
          minLength={5}
        />
        <div className="form-text">
          Veuillez rentrer au minimum 5 charactères
        </div>
      </div>
      <BtnSubmit variant="dark" value="register" placeholder="Envoyer" />
    </form>
  );
};

export default RegisterForm;
