'use client'
import LoginForm from '@/components/login/login-form';
import React from 'react';

const LoginPage: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    // Handle login logic here
    console.log('Logging in with:', email, password);
    // You can call an API or perform any other action here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">Login</h1>
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;