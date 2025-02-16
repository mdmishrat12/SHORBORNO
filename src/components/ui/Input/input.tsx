import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({
    type = 'text',
    label,
    placeholder,
    value,
    onChange,
    name,
    id,
    className = '',
    error,
    disabled = false,
    ...props
  }) => {
    return (
      <div className={`mb-4 ${className}`}>
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
            error ? 'border-red-500' : 'border-gray-300'
          } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
          {...props}
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  };
  
  export default Input;