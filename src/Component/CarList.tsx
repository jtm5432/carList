// ./list/CarList.tsx

import React from "react";
import CarItem from "./CarItem";
import MenuBar from "./menuBar";
import TitleHeader from "./TitleHeader";
import { CarClass } from "../types/CarClass";
import { CarProvider, useCarContext } from './Contexts/CarContexts';
import { useCarClasses } from "./Hooks";
import  LoadingSpinner from "./LoadingBar";
const CarListContent: React.FC = () => {

  const carContext = useCarContext();
  const { data, loading, error } = useCarClasses(carContext);
  const cars = data; // 또는 data를 원하는 형태로 변환

  // 여기서 data는 cars 객체가 될 것입니다.

  return (
    <>
      <MenuBar />
      {loading ? (
        <LoadingSpinner /> // 로딩 중이면 스피너를 보여줍니다.
      ) : (
        cars && cars.map((car, index) => (
          <CarItem key={index} car={car} />
        ))
      )}
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
