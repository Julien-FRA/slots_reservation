import React from 'react'
import { Container } from 'react-bootstrap'
import RegisterForm from '../components/Form/RegisterForm'
import TextContent from '../components/Text/TextGeneric'
import Titre from '../components/Text/Titre'

const Register = () => {
  return (
    <Container fluid="xl" className="mt-5">
        <Titre content='Page register'/>
        <TextContent content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, in! Reprehenderit at, aut corporis voluptatum nesciunt ex labore ipsa in, ducimus adipisci ut soluta non sint asperiores expedita quasi obcaecati.'/>
        <RegisterForm />
    </Container>
  )
}

export default Register