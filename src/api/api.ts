// services/api.ts

export const getCarClasses = async () => {
    // API 호출 코드.
    //loadingUI 테스트용 딜레이 코드
    await new Promise((resolve) => setTimeout(resolve, 500));
    const response = await fetch('http://localhost:3001/carClasses');

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('getCarClassesis',data);
    return data;
  };
  