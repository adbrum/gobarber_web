import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input type="email" placeholder="Seu e-mail" id="" />
        <input type="password" placeholder="Sua senha secreta" id="" />

        <button type="submit">Aceder</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}
