import React from 'react';
import Sign from '../Sign/Sign';
import SignForm from '../SignForm/SignForm';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import { SERVER_ERROR } from '../../utils/constants';
import './Login.css';

function Login({ onLogin, signInSuccess }) {
  const formWithValidation = useFormWithValidation();
  const { email, password } = formWithValidation.values;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }

    onLogin({ email, password }).then(formWithValidation.resetForm());
  };

  return (
    <Sign title="Рады вас видеть!" isSuccess={signInSuccess}>
      <SignForm onSubmitForm={handleSubmit} formData={formWithValidation} />
    </Sign>
  );
}

export default Login;
