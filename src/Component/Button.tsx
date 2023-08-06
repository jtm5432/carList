// Button.tsx
import React, { useState } from 'react';

type Filter = 'Button 1' | 'Button 2' | 'Button 3' | 'Button 4' | 'Button 5';

type ButtonProps = {
    label: string;
    isActive: boolean; // 활성 상태를 나타내는 prop
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  };
const Button: React.FC<ButtonProps> = ({ label,isActive, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
   
    onClick?.(e); // e를 전달합니다.
  };

  const buttonStyle = {
    backgroundColor: isActive ? 'blue' : 'white',
    color: isActive ? 'white' : 'black',
  };

  return <button style={buttonStyle} onClick={handleClick}>{label}</button>;
};

export default Button;
