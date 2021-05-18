import React from 'react';
import Sign from '../Sign/Sign';
import SignForm from '../SignForm/SignForm';
import './Register.css';

function Register() {
  return (
    <Sign title="Добро пожаловать!">
      <SignForm />
    </Sign>
  );
}

export default Register;
