// ./list/CarList.tsx

import React from "react";
import CarItem from "./CarItem";
import MenuBar from "./menuBar";
import TitleHeader from "./TitleHeader";
import { CarClass } from "../types/CarClass";
import { CarProvider, useCarContext } from './Contexts/CarContexts';
import { useCarClasses } from "./Hooks";

const CarListContent: React.FC = () => {

  const { state1, state2, state3, state4, state5 } = useCarContext();
  const carContext = useCarContext();
  const { data, loading, error } = useCarClasses(carContext);
  const cars = data; // 또는 data를 원하는 형태로 변환

  // 여기서 data는 cars 객체가 될 것입니다.

  return (
    <>
      <MenuBar />
      {cars && cars.map((car: CarClass, index: number) => (
        <CarItem key={index} car={car} />
      ))}
    </>
  );
};

const CarList: React.FC = () => {
  return (
    <div>
      <CarProvider>
        <TitleHeader title="Car List" />

        <CarListContent />
      </CarProvider>
    </div>
  );
};

export default CarList;
