import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import LoginForm from "../components/Form/LoginForm";
import TextContent from "../components/Text/TextGeneric";
import Titre from "../components/Text/Titre";
import { getAllUsers, User } from "../services/HttpRequests";

const Login = () => {
  const [users, setUsers] = useState<User[] | any>([]);

  useEffect(() => {
    const loadUserList = async () => {
      try {
        const users = await getAllUsers();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    loadUserList();
  }, []);

  console.log(users);

  return (
    <Container fluid="xl" className="mt-5">
      <Titre content="Page login" />
      <TextContent content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, in! Reprehenderit at, aut corporis voluptatum nesciunt ex labore ipsa in, ducimus adipisci ut soluta non sint asperiores expedita quasi obcaecati." />
      <LoginForm />
    </Container>
  );
};

export default Login;
