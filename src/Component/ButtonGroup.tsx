import React from 'react';
import Button from './Button';
import { useCarContext } from './Contexts/CarContexts';

export const CarTypeButtons: React.FC = () => {
  const carContext = useCarContext();
  const CarTypeArray = ["경형/소형", "준중형", "중형/대형", "수입", "SUV"];

  return (
    <>
      {CarTypeArray.map((type, index) => (
        <Button
          key={index}
          label={type}
          onClick={() => {
            const newState1 = { ...carContext.state1, [type]: !carContext.state1[type] };
            carContext.setState1(newState1);
          }}
          isActive={carContext.state1[type]}
        />
      ))}
     <Button
        label="초기화"
        onClick={carContext.resetStates("state1")} // 초기화 함수 호출
      />
    </>
  )
};

export const AreaTypeButtons: React.FC = () => {
  const carContext = useCarContext();
  const AreaTypeArray = ["서울/경기/인천", "부산/창원", "제주", "대구/경북", "대전", "광주"];

  return (
    <>
      {AreaTypeArray.map((type, index) => (
        <Button
          key={index}
          label={type}
          onClick={() => {
            const newState2 = { ...carContext.state2, [type]: !carContext.state2[type] };
            carContext.setState2(newState2);
          }}
          isActive={carContext.state2[type]}
        />
      ))}
      <Button
        label="초기화"
        onClick={carContext.resetStates("state2")} // 초기화 함수 호출
      />
    </>
  );
};

export const PriceSortTypeButtons: React.FC = () => {
  const carContext = useCarContext();
  const PriceSortTypeArray = ["낮은 가격순", "높은 가격순"];

  return (
    <>
      {PriceSortTypeArray.map((type, index) => (
        <Button
          key={index}
          label={type}
          onClick={() => {
            carContext.setState3(type);
          }}
          isActive={carContext.state3 === type}
        />
      ))}
      <Button
        label="초기화"
        onClick={carContext.resetStates("state3")} // 초기화 함수 호출
      />
    </>
  );
};
