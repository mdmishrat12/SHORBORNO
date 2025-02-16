import React from 'react';

export interface InputProps {
  type?: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id?: string;
  className?: string;
  error?: string;
  disabled?: boolean;
}