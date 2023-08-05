// services/api.ts

export const getCarClasses = async () => {
    // API 호출 코드...
    const response = await fetch('http://localhost:3001/carClasses');

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('getCarClassesis',data);
    return data;
  };
  