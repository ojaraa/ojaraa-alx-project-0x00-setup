import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button = ({ title, style, onClick } : ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${style} px-4 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-600 transition-colors`}
    >
      {title}
    </button>
  );
};

export default Button;