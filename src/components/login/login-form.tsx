'use client'
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../ui/button/button';
import Input from '../ui/Input/input';


interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: SubmitHandler<LoginFormValues>;
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, className = '' }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`max-w-md mx-auto ${className}`}>
      <Input
        type="email"
        label="Email"
        placeholder="Enter your email"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        })}
        error={errors.email?.message}
        className="mb-4 text-black"
      />
      <Input
        type="password"
        label="Password"
        placeholder="Enter your password"
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters',
          },
        })}
        error={errors.password?.message}
        className="mb-4 text-black"
      />
      <Button type="submit" variant="primary" size="medium" className="w-full">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;