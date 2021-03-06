import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock} from 'react-icons/fi';
import { Form } from '@unform/web'
import LogoImg from '../../assets/logo.svg';
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import getValidationErrors from '../../utils/getvalidationErros'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);


  const handleSubmit = useCallback(async (data: object) => {
        // console.log(data)
        try {
          formRef.current?.setErrors({}); // setando a validação do erros para que ele possa sempre iniciar do 0.
          const schema = Yup.object().shape({
            name: Yup.string().required('Nome obrigatório'),
            email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
            password: Yup.string().min(6, 'No mínimo 6 dígitos'),
          });

          await schema.validate(data, {
            abortEarly: false,
          })

        } catch (err) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
    }, [])

  return (
      <Container>
        <Background />

        <Content >
          <img src={LogoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

            <Button type="submit">Entra</Button>

          </Form>

          <a href="register">
            <FiArrowLeft />
            Voltar para logon
          </a>
        </Content>
      </Container>
  )
}
export default SignUp;
