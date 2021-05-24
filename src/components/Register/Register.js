import React from 'react';
import Sign from '../Sign/Sign';
import SignForm from '../SignForm/SignForm';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import './Register.css';

function Register({ onRegister, signUpSuccess }) {
  const formWithValidation = useFormWithValidation();
  const { name, email, password } = formWithValidation.values;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return;
    }

    onRegister({ name, email, password }).then(formWithValidation.resetForm());
  };

  return (
    <Sign title="Добро пожаловать!" isSuccess={signUpSuccess}>
      <SignForm onSubmitForm={handleSubmit} formData={formWithValidation} />
    </Sign>
  );
}

export default Register;
