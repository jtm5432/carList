// Button.tsx
import React, { useState } from 'react';


type ButtonProps = {
  label: string;
  isActive?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  isCloseButton?: boolean; // 닫기 버튼인지 여부
  onCloseModal?: () => void; // 모달을 닫는 함수
};
const Button: React.FC<ButtonProps> = ({ label,isActive, onClick, onCloseModal, isCloseButton  }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
 
    onClick?.(e); // e를 전달합니다.
  };
  const handleCloseClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    onCloseModal?.(); // 모달 닫기 함수 호출
    e.stopPropagation(); // 부모 버튼의 클릭 이벤트 방지
  };

  const buttonStyle: React.CSSProperties = {
    padding: '10px',
    margin: '0 5px', 
    backgroundColor: isActive ? 'blue' : 'white',
    color: isActive ? 'white' : 'black',
    position: 'relative',  // "x"를 배치하기 위한 기본 스타일
  };
  const closeButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '-5px',
    right: '0px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '20px',
    color: 'black',
  };
  return (
    <button style={buttonStyle} onClick={handleClick}>
      {label}
      {isCloseButton && <span style={closeButtonStyle} onClick={handleCloseClick}>×</span>}
    </button>
  );

};

export default Button;
