import React from 'react'
import './Login.css'
import FormDefault from '../../components/macro/Forms/FormDefault/FormDefault'
import Input from '../../components/micro/Forms/Input/Input'
import Button from '../../components/micro/Button/Button'

function Login(props) {

    return(
        <>
        <FormDefault title="Faça seu Login">
            <Input label="E-mail" type="text"/>
            <Input label="Senha" type="password"/>
            <Button label="Fazer Login" onclick="null" class="conversao"/>
            <Button label="Cadastrar" onclick="null" class="conversao" navigation route="register"/>
            <Button label="Esqueci minha senha" onclick="null" class="apoio"/>
        </FormDefault>
        </>
    )
}

export default Login