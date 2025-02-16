'use client'
import RegisterForm from '@/components/signup/signup-form';
import React from 'react';

const RegisterPage: React.FC = () => {
  const handleRegister = (name: string, email: string, password: string) => {
    // Handle registration logic here
    console.log('Registering with:', name, email, password);
    // You can call an API or perform any other action here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">Register</h1>
        <RegisterForm onSubmit={handleRegister} />
      </div>
    </div>
  );
};

export default RegisterPage;