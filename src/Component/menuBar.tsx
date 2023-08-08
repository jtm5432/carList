// ./list/MenuBar.tsx

import React, { useState, useEffect } from 'react';
import Button from './Button';
import Modal from './Modal';
import { CarTypeButtons, AreaTypeButtons, PriceSortTypeButtons } from './ButtonGroup';

import { useCarContext } from './Contexts/CarContexts';
import { useCarClasses } from "./Hooks";

const MenuBar: React.FC = () => {
    const [modalContent, setModalContent] = useState<"carType" | "areaType" | "PriceType" | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeButton, setActiveButton] = useState<string | null>(null); // 활성 버튼의 라벨을 상태로 관리
    const [position, setPosition] = useState<{ top: number, left: number }>({ top: 150, left: 410 });

    //const SearchContext = { state1: {}, state2: 'value2', state3: 'value3', state4: 'value4', state5: 'value5' };
    const carContext = useCarContext();
    const { data, loading, error } = useCarClasses(carContext);
   /*
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
                        console.log('carContext', carContext)

                    }}

                    isActive={carContext.state1[type]} // 활성 상태를 carContext.state1[type] 값으로 설정
                />
            ))}
        </>
    )
    
    const PriceSortTypeArray = ["낮은 가격순", "높은 가격순"];
    const PriceSortTypeButtons = (
        <>
            {PriceSortTypeArray.map((type, index) => (
                <Button
                    key={index}
                    label={type}
                    onClick={() => {
                        carContext.setState3(type); // 상태 변경 함수 사용
                        console.log('carContext', carContext);
                    }}
                    isActive={carContext.state3 === type} // 활성 상태를 현재 선택된 정렬 방식과 비교
                />
            ))}
        </>
    );
*/
    const handleButtonClick = (label: string) => {
        switch (label) {
            case '빠른대여':
                carContext.setState4(!carContext.state4);
                break;
            case '신차':
                carContext.setState5(!carContext.state5);
                break;
            case '인기':
                carContext.setState6(!carContext.state6);
                break;
            case '특가':
                carContext.setState7(!carContext.state7);
                break;
            // 여기에 '특가'에 대한 처리 로직도 추가하면 됩니다.
            default:
                break;
        }
        handleActiveButtonClick(label);
    };

    const handleActiveButtonClick = (label: string) => {
        carContext.setActiveButtons({
            ...carContext.activeButtons,
            [label]: !carContext.activeButtons[label],
          });
    };
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
    let buttons;
    if (modalContent === "carType") {
        buttons = <CarTypeButtons/>;
    } else if (modalContent === "areaType") {
        buttons = <AreaTypeButtons/>;
    }
    else if (modalContent === "PriceType") {
        buttons = <PriceSortTypeButtons/>;
    }
    return (
        <div className="menu-bar">
            {["차종", "지역", "가격",].map((label) => (
                <Button
                    key={label}
                    label={label}
                    onClick={() => {
                        if (label === '차종') setModalContent("carType")
                        else if (label === '지역') setModalContent("areaType")
                        else if (label === '가격') setModalContent("PriceType")
                        return openModal(label)
                    }}
                    isActive={label === activeButton} // 활성 상태를 전달합니다.
                />
            ))}
            {["빠른대여", "신차", "인기", "특가"].map((label) => (
                <Button
                    key={label}
                    label={label}
                    onClick={() => handleButtonClick(label)}
                    isActive={carContext.activeButtons[label]}
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
