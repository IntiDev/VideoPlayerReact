import React from 'react';
import '../assets/styles/components/Footer.scss';

const Footer = () => (
  <footer className='footer'>
    <a href='/'>Terminos de uso</a>
    <a href='/'>Declaración de privacidad</a>
    <a href='/'>Centro de ayuda</a>
    <a href='/' className='footer-author'>
      {' '}
Con ♡ por
      <strong>IntiDev</strong>
      {' '}

    </a>
  </footer>
);

export default Footer;
