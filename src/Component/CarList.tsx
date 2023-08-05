// ./list/CarList.tsx

import React, { useState, useEffect } from "react";
import CarItem from "./CarItem";
import MenuBar from "./menuBar";
import TitleHeader from "./TitleHeader";
import { useCarClasses } from "./Hooks";
import { CarClass } from "../types/CarClass";  // CarClass 타입 임포트


const CarList: React.FC = () => {
  const { data: cars, loading, error } = useCarClasses();
  console.log('cars',cars)
  // 추후에 API에서 데이터를 가져오는 부분을 구현해야함.
  useEffect(() => {
    
   }, []);
 
  return (
    <div>
        <TitleHeader title="Car List" />
       <MenuBar />
       {cars && cars.map((car: CarClass, index: number) => (
        <CarItem key={index} car={car} />
      ))}
    </div>
  );
};

export default CarList;
