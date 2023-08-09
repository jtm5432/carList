import { useState, useEffect } from 'react';
import { getCarClasses } from '../api/api';
import { CarClass } from "../types/CarClass";  // CarClass 타입 임포트
import { CarContextProps } from './Contexts/CarContexts'; // CarContextProps 타입 임포트

const filterCarClasses = (carState: Record<string, boolean>, allCarClasses: any[], key: string) => {
  const trueCount = Object.values(carState).filter(value => value === true).length;

 // console.log('filterCarClasses',trueCount)
  
  return allCarClasses.filter((carClass: any) => {
    const carClassKey = carClass[key];
    console.log('carClassKey',carClassKey,carState)
    // carClassKey가 배열인 경우
    if (Array.isArray(carClassKey)) {
      
      return trueCount === 0 || carClassKey.some((item: string) => carState[item] === true);
    }
    // carClassKey가 배열이 아닌 경우 (문자열인 경우)
    else return trueCount === 0 || carState[carClassKey] === true;
  });
};
const sortCarClasses = (sortOrder: string | null, carClasses: any[]) => {
  if (sortOrder === "낮은 가격순") {
    return carClasses.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "높은 가격순") {
    return carClasses.sort((a, b) => b.price - a.price);
  }
  return carClasses; // sortOrder가 null인 경우 그대로 반환
};

    
  const filterByTags = (
    carClasses: any[],
    tagsState: { [key: string]: boolean }
  ) => {
    console.log('tagsState',tagsState)
    return carClasses.filter((carClass: any) => {
      const carTypeTags = carClass.carTypeTags;
      return Object.keys(tagsState).every((tagKey) => {
        if (tagsState[tagKey]) {
          return carTypeTags.includes(tagKey);
        }
        return true;
      });
    });
  };
export const useCarClasses = (carContext: CarContextProps) => {
  const [data, setData] = useState<CarClass[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // 로딩 시작
      try {
       // console.log('state1',carContext)
        const allCarClasses = await getCarClasses();
   
        let filteredCarClasses = filterCarClasses(carContext.state1, allCarClasses,"carModel" );
        filteredCarClasses = filterCarClasses(carContext.state2, filteredCarClasses,"regionGroups");
        filteredCarClasses = filterByTags(filteredCarClasses, {
          빠른대여: carContext.state4,
          신차: carContext.state5,
          인기: carContext.state6,
          특가: carContext.state7
        });
        // 정렬 순서에 따라 정렬 수행
         filteredCarClasses = sortCarClasses(carContext.state3, filteredCarClasses);
      
        setData(filteredCarClasses);
      } catch (e) {
        const error = e as Error;
        setError(error.message);
    }
      setLoading(false);
    };

    fetchData();
  }, [carContext]);  // 의존성 배열을 비워서 컴포넌트가 마운트될 때만 fetchData가 실행되도록 함

  return { data, loading, error };
};


