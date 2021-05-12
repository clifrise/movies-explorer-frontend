import React from 'react';
import Sign from '../Sign/Sign';
import SignForm from '../SignForm/SignForm';
import './Login.css';

function Login() {
  return (
    <Sign title="Рады вас видеть!">
      <SignForm />
    </Sign>
  );
}

export default Login;
