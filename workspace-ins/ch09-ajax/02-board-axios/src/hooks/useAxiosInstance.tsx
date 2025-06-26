import axios from "axios";

const API_SERVER = 'https://fesp-api.koyeb.app/market';

function useAxiosInstance() {
  const instance = axios.create({
    baseURL: API_SERVER, // 기본 URL
    timeout: 1000*5,
    headers: {
      'Content-Type': 'application/json', // 요청 바디의 데이터 타입
      // 설정하지 않으면 크롬일 경우 "application/json, text/plain, */*"
      Accept: 'application/json', // 응답 바디의 데이터 타입이 json이면 좋겠음
      'Client-Id': 'openmarket',
    }
  });

  // 요청 인터셉터 추가하기
  instance.interceptors.request.use((config) => {
    console.log('요청 인터셉터 호출', config);
    // 요청이 전달되기 전에 필요한 공통 작업 수행
    config.params = {
      delay: 2000,
      ...config.params, // 기존 쿼리스트링 복사
    };
    return config;
  }, (error) => {
    // 공통 에러 처리

    return Promise.reject(error);
  });

  // 응답 인터셉터 추가하기
  instance.interceptors.response.use((response) => {
    console.log('정상 응답 인터셉터 호출', response);
    // 2xx 범위에 있는 상태 코드는 이 함수가 호출됨
    // 응답 데이터를 이용해서 필요한 공통 작업 수행
    if(response.data.ok !== undefined){
      response.data.ok = !!response.data.ok;
    }
    return response;
  }, (error) => {
    console.error('에러 응답 인터셉터 호출', error);
    // 2xx 외의 범위에 있는 상태 코드는 이 함수가 호출됨
    // 공통 에러 처리

    return Promise.reject(new Error('잠시 후 다시 이용해 주시기 바랍니다.'));
  });

  return instance;
}

export default useAxiosInstance;