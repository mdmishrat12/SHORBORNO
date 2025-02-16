import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'medium',
    className = '',
    ...rest
  }) => {
    // Define base styles
    const baseStyles = 'font-semibold rounded focus:outline-none transition-all duration-200';
  
    // Define variant styles
    const variantStyles = {
      primary: 'bg-blue-500 text-white hover:bg-blue-600',
      secondary: 'bg-gray-500 text-white hover:bg-gray-600',
      outline: 'bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50',
    };
  
    // Define size styles
    const sizeStyles = {
      small: 'px-3 py-1 text-sm',
      medium: 'px-4 py-2 text-base',
      large: 'px-6 py-3 text-lg',
    };
  
    // Combine all styles
    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
    return (
      <button className={combinedStyles} {...rest}>
        {children}
      </button>
    );
  };
  
  export default Button;