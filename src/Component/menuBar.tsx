// ./list/MenuBar.tsx

import React, { useState, useEffect } from 'react';
import Button from './Button';
import Modal from './Modal';
import { useCarContext } from './Contexts/CarContexts';

const MenuBar: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeButton, setActiveButton] = useState<string | null>(null); // 활성 버튼의 라벨을 상태로 관리
    const [position, setPosition] = useState<{ top: number, left: number }>({ top: 150, left: 410 });
    const { cars } = useCarContext(); // 컨텍스트에서 cars 값을 가져옵니다.
    const buttons = (
        <>
            <Button
                key={1}
                label={"test"}
                onClick={() =>  console.log("Cars from context: ", cars)}
                isActive={"test" === activeButton} // 활성 상태를 전달합니다.
            />
            {/* 추가적인 버튼들... */}
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
            {["Button 1", "Button 2", "Button 3", "Button 4", "Button 5"].map((label) => (
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
                buttons={buttons} // 버튼 컴포넌트를 prop으로 전달
            />
        </div>
    );
};

export default MenuBar;
