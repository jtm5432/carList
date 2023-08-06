// ./list/CarList.tsx

import React from "react";
import CarItem from "./CarItem";
import MenuBar from "./menuBar";
import TitleHeader from "./TitleHeader";
import { CarClass } from "../types/CarClass";
import { CarProvider, useCarContext } from './Contexts/CarContexts';

const CarListContent: React.FC = () => {
  const { cars } = useCarContext();

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
      <TitleHeader title="Car List" />
      <CarProvider>
        <CarListContent />
      </CarProvider>
    </div>
  );
};

export default CarList;
