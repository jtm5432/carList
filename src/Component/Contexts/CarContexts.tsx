// ./list/Contexts/CarContexts.tsx

import React, { useState, createContext, useContext,useEffect  } from 'react';
import { CarClass } from '../../types/CarClass'; // CarClass 타입 임포트
import { useCarClasses } from '../Hooks'; // useCarClasses 훅 임포트


function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // 초기 값을 로컬 스토리지에서 가져옴
  const storedValue = JSON.parse(localStorage.getItem(key) || 'null') || initialValue;

  const [value, setValue] = useState(storedValue);

  // 값이 변경될 때마다 로컬 스토리지 업데이트
  const setStoredValue = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  return [value, setStoredValue];
}



export interface CarContextProps {

  activeButton: string | null;
  setActiveButton: (value: string | null) => void;
  activeButtons: { [key: string]: boolean };
  setActiveButtons: (value: { [key: string]: boolean }) => void;
  state1: {[key: string]: boolean}; // 문자열의 키와 불리언 값으로 이루어진 객체
  setState1: (value: {[key: string]: boolean}) => void;
  state2: {[key: string]: boolean}; // 문자열의 키와 불리언 값으로 이루어진 객체
  setState2: (value: {[key: string]: boolean}) => void;
  state3: string | null; // 문자열 또는 null 값으로 이루어진 정렬 방식
  setState3: (value: string | null) => void;
  state4: boolean; // 불리언 값으로 이루어진 객체
  setState4: (value: boolean) => void;
  state5: boolean; // 불리언 값으로 이루어진 객체
  setState5: (value: boolean) => void;
  state6: boolean; // 불리언 값으로 이루어진 객체
  setState6: (value: boolean) => void;
  state7: boolean; // 불리언 값으로 이루어진 객체
  setState7: (value: boolean) => void
  resetStates: any;

}
interface CarProviderProps {
  children: React.ReactNode;
}

export const CarContext = createContext<CarContextProps | null>(null);

export const useCarContext = () => {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error('useCarContext must be used within CarProvider');
  }
  return context;
};

export const CarProvider: React.FC<CarProviderProps> = ({ children }) => {

  const [activeButton, setActiveButton] = useState<string | null>(null); // activeButton 상태 관리
  const [activeButtons, setActiveButtons] = useLocalStorage<{ [key: string]: boolean }>('activeButtons', {
    빠른대여: false,
    신차: false,
    인기: false,
    특가: false,
});
  const [state1, setState1] = useLocalStorage<{[key: string]: boolean}>('state1', {});
  const [state2, setState2] = useLocalStorage<{[key: string]: boolean}>('state2', {});
  const [state3, setState3] = useLocalStorage<string | null>('state3', null); // 정렬 상태 관리
  const [state4, setState4] = useLocalStorage<boolean>('state4', false);
  const [state5, setState5] = useLocalStorage<boolean>('state5', false);
  const [state6, setState6] = useLocalStorage<boolean>('state6', false);
  const [state7, setState7] = useLocalStorage<boolean>('state7', false);
  const resetStates = (stateName: string | null = null) => {
    if (stateName === null) {
      return () => {
        setActiveButton(null);
        setActiveButtons({});
        setState1({});
        setState2({});
        setState3(null);
        setState4(false);
        setState5(false);
        setState6(false);
        setState7(false);
      };
    }
  
    return () => {
      switch (stateName) {
        case 'activeButton':
          setActiveButton(null);
          break;
        case 'activeButtons':
          setActiveButtons({});
          break;
        case 'state1':
          setState1({});
          break;
        case 'state2':
          setState2({});
          break;
        case 'state3':
          setState3(null);
          break;
        case 'state4':
          setState4(false);
          break;
        case 'state5':
          setState5(false);
          break;
        case 'state6':
          setState6(false);
          break;
        case 'state7':
          setState7(false);
          break;
        default:
          console.error('Unknown state name:', stateName);
      }
    };
  };
  return (
    <CarContext.Provider   value={{
      activeButton,
      setActiveButton,
      activeButtons,
      setActiveButtons,
      state1,
      setState1,
      state2,
      setState2,
      state3,
      setState3,
      state4,
      setState4,
      state5,
      setState5,
      state6,
      setState6,
      state7,
      setState7,
      resetStates
     }}
     >
      {children}
    </CarContext.Provider>
  );
};
