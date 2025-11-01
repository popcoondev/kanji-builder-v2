import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-kanji-primary text-white hover:bg-blue-700 active:bg-blue-800': variant === 'primary',
            'bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400': variant === 'secondary',
            'border-2 border-gray-300 bg-white hover:bg-gray-50 active:bg-gray-100': variant === 'outline',
            'hover:bg-gray-100 active:bg-gray-200': variant === 'ghost',
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-4 py-2 text-base': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
