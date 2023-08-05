// ./list/CarItem.tsx

import React from 'react';

import { CarClass } from "../types/CarClass";  // CarClass 타입 임포트

type CarItemProps = {
  car: CarClass;
};
/**
 * 추후에 이미지 등도 다 컴포넌트로 수정해야함
 * 
 */
const CarItem: React.FC<CarItemProps> = ({ car }) => {
  console.log('caris',car)
  return (
    <div>
      <h2>{car.carClassName}</h2>
      <p>Model: {car.carModel}</p>
      <p>Year: {car.year}</p>
    </div>
  );
};

export default CarItem;
