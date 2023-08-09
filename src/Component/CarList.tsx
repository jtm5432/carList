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
  
  return (
    <>
      <MenuBar />
      {loading ? (
        <LoadingSpinner /> // 로딩 중이면 스피너를 보여줍니다.
      ) : (
        <>
          {cars && cars.length > 0 ? (
            cars.map((car, index) => (
              <CarItem key={index} car={car} />
            ))
          ) : (
            <p>선택하신 조건에 맞는 차량이 없습니다.</p>
          )}
        </>
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
