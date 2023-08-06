// ./list/MenuBar.tsx

import React, { useState, useEffect } from 'react';
import Button from './Button';
import Modal from './Modal';
import { useCarContext } from './Contexts/CarContexts';
import { useCarClasses } from "./Hooks";

const MenuBar: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeButton, setActiveButton] = useState<string | null>(null); // 활성 버튼의 라벨을 상태로 관리
    const [position, setPosition] = useState<{ top: number, left: number }>({ top: 150, left: 410 });
    
    //const SearchContext = { state1: {}, state2: 'value2', state3: 'value3', state4: 'value4', state5: 'value5' };
    const carContext = useCarContext();
    const { data, loading, error } = useCarClasses(carContext);
    //경형/소형, 준중형, 중형/대형, 수입, SUV 
        const CarTypeArray = ["경형/소형", "준중형", "중형/대형", "수입", "SUV"]
        const CarTypeButtons = (
            <>
              {CarTypeArray.map((type, index) => (
                <Button
                  key={index}
                  label={type}
                  onClick={() => {
                    const newState1 = { ...carContext.state1, [type]: !carContext.state1[type] };
                    carContext.setState1(newState1); // 상태 변경 함수 사용
                    console.log('carContext',carContext)
                  }}
                  isActive={type === activeButton}
                />
              ))}
        </>
    );
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);

    const openModal = (label: string) => {
        setActiveButton(label); // 버튼을 활성화합니다.
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setActiveButton(null); // 모든 버튼을 비활성화합니다.
    };

    return (
        <div className="menu-bar">
            {["차종", "Button 2", "Button 3", "Button 4", "Button 5"].map((label) => (
                <Button
                    key={label}
                    label={label}
                    onClick={() => openModal(label)}
                    isActive={label === activeButton} // 활성 상태를 전달합니다.
                />
            ))}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                position={position}
                buttons={CarTypeButtons} // 버튼 컴포넌트를 prop으로 전달
            />
        </div>
    );
};

export default MenuBar;
