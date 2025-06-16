import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

// API 서버 엔드포인트 주소 상수 정의
const API_SERVER = "https://fesp-api.koyeb.app/todo";

// axios 호출 시 필요한 파라미터 타입 정의
interface FetchParams {
  url: string;
}

// Todo 아이템의 타입 정의
interface Todo {
  _id: number;
  title: string;
  done: boolean;
}

// Todo 목록 조회 성공시 응답 데이터 타입 정의
interface TodoListRes {
  ok: 1;
  items: Todo[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// 에러 응답 데이터 타입 정의
interface ErrorRes {
  ok: 0;
  error: Error;
}

// 응답 데이터 타입 정의
type ResData = TodoListRes | ErrorRes;

function useAxios(fetchParams: FetchParams) {
  const [data, setData] = useState<TodoListRes | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const requestFetch = async (params: FetchParams) => {
    console.log("axios 요청 시작", params);
    setIsLoading(true);

    try {
      const res = await axios.get<ResData>(API_SERVER + params.url);
      const jsonRes = res.data;
      console.log("서버 응답:", jsonRes);

      if (jsonRes.ok) {
        setData(jsonRes);
        setError(null);
      } else {
        throw new Error(jsonRes.error.message);
      }
    } catch (err) {
      console.error("에러 발생:", err);
      if (axios.isAxiosError(err)) {
        setError(err as AxiosError);
      } else {
        setError(err as Error);
      }
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestFetch(fetchParams);
  }, []);

  return { isLoading, error, data };
}

export default useAxios;
