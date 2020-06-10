import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector((state) => state.user.profile);

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="passwod" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Comfirmar senha"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="submit">Sair do GoBarber</button>
    </Container>
  );
}
