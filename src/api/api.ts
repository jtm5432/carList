export const getCarClasses = async () => {
  try {
    // API 호출 코드.
    //loadingUI 테스트용 딜레이 코드
    await new Promise((resolve) => setTimeout(resolve, 500));
    const response = await fetch('http://localhost:3001/carClasses');

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    console.log('getCarClassesis', data);
    return data;
  } catch (error) {
    console.error(error);
    alert("차량 분류를 가져오는 중에 문제가 발생했습니다. 다시 시도해주세요."); // 또는 다른 사용자 인터페이스 요소를 사용하여 에러 메시지 표시
    throw error; // 필요에 따라 에러를 다시 던질 수 있습니다.
  }
};
