import React, { useEffect } from 'react';


interface ModalProps {  
  isOpen: boolean;
  onClose: () => void;
  position: { top: number; left: number };
  buttons: React.ReactNode; // 버튼 컴포넌트를 받기 위한 prop
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, buttons }) => {
    if (!isOpen) return null;
  
    const overlayStyle = {
      display: isOpen ? 'block' : 'none',
      position: 'fixed' as 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 999, // 모달 위에 오버레이가 나타나게 하기 위한 z-index
    };
    const modalStyle: React.CSSProperties = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1000,
      backgroundColor: 'white',
      padding: 20,
      maxWidth: 420,
      width: '100%',
      boxSizing: 'border-box', // 이 부분의 타입이 'border-box'로 추론됩니다.
    };
    
  
    return (
      <>
        <div style={overlayStyle} onClick={onClose} /> {/* 배경 클릭 시 모달 닫기 */}
        <div style={modalStyle}>
          <div style={{ margin: '0 auto', padding: '20px', maxWidth: '500px', position: 'relative' }}>
            <button 
              onClick={onClose} 
              style={{
                position: 'absolute', // 절대 위치 지정
                top: 0,              // 상단에서 0px 위치
                right: 0,            // 오른쪽에서 0px 위치
                background: 'none',  // 배경 제거
                border: 'none',      // 테두리 제거
                fontSize: '1.5rem',  // 크기 지정
                cursor: 'pointer'    // 마우스 포인터 스타일 적용
              }}
            >
              ×
            </button>
            {buttons} {/* 전달받은 버튼 컴포넌트를 렌더링 */}
          </div>
        </div>
      </>
    );
    
  };
      

export default Modal;
