import React from 'react'
import './Register.css'
import FormDefault from '../../components/macro/Forms/FormDefault/FormDefault'
import Input from '../../components/micro/Forms/Input/Input'
import Button from '../../components/micro/Button/Button'

function Register(props) {

    return(
        <>
            <FormDefault title="Faça seu Cadastro">
            <Input label="Nome" type="text"/>
            <Input label="Sobrenome" type="text"/>
            <Input label="E-mail" type="text"/>
            <Input label="Endereço" type="text"/>
            <Input label="Telefone" type="tel"/>
            <Input label="Senha" type="password"/>
            <Input label="Confirmar Senha" type="password"/>
            <Button label="Voltar" navigation route="login" class="apoio"/>
            <Button label="Cadastrar" onclick="null" class="conversao"/>
        </FormDefault>
        </>
    )
}

export default Register