import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Time } from './styles';

export default function Profile() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#FFF" />
        </button>
        <strong>31 de Maio</strong>
        <button type="button">
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <strong>Adriano Regis</strong>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <strong>Em aberto</strong>
        </Time>
        <Time>
          <strong>10:00</strong>
          <strong>Adriano Regis</strong>
        </Time>
        <Time>
          <strong>11:00</strong>
          <strong>Adriano Regis</strong>
        </Time>
      </ul>
    </Container>
  );
}
