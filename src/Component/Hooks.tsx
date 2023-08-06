import { useState, useEffect } from 'react';
import { getCarClasses } from '../api/api';
import { CarClass } from "../types/CarClass";  // CarClass 타입 임포트
  
  

export const useCarClasses = () => {
  const [data, setData] = useState<CarClass[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const carClasses = await getCarClasses();
        setData(carClasses);
      } catch (e) {
        const error = e as Error;
        setError(error.message);
    }
      setLoading(false);
    };

    fetchData();
  }, []);  // 의존성 배열을 비워서 컴포넌트가 마운트될 때만 fetchData가 실행되도록 함

  return { data, loading, error };
};


