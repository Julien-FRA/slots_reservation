import React from 'react'
import { Container } from 'react-bootstrap'
import LoginForm from '../components/Form/LoginForm'
import TextContent from '../components/Text/TextGeneric'
import Titre from '../components/Text/Titre'

const Login = () => {
  return (
    <Container fluid="xl">
        <Titre content='Page login'/>
        <TextContent content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, in! Reprehenderit at, aut corporis voluptatum nesciunt ex labore ipsa in, ducimus adipisci ut soluta non sint asperiores expedita quasi obcaecati.'/>
        <LoginForm />
    </Container>
  )
}

export default Login