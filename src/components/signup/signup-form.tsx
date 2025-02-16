'use client'
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../ui/Input/input';
import Button from '../ui/button/button';

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterFormProps {
  onSubmit: SubmitHandler<RegisterFormValues>;
  className?: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, className = '' }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const password = watch('password'); // Watch the password field to compare with confirmPassword

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`max-w-md mx-auto ${className}`}>
      <Input
        type="text"
        label="Name"
        placeholder="Enter your name"
        {...register('name', {
          required: 'Name is required',
        })}
        error={errors.name?.message}
        className="mb-4 text-black"
      />
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
      <Input
        type="password"
        label="Confirm Password"
        placeholder="Confirm your password"
        {...register('confirmPassword', {
          required: 'Confirm Password is required',
          validate: (value) => value === password || 'Passwords do not match',
        })}
        error={errors.confirmPassword?.message}
        className="mb-4 text-black"
      />
      <Button type="submit" variant="primary" size="medium" className="w-full">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;