import useAxiosInstance from "@hooks/useAxiosInstance";
import type { TodoItem } from "@pages/TodoInfo";
import TodoListItem from "@pages/TodoListItem";
import { useEffect, useState } from "react";
import { Link } from "react-router";

interface TodoList {
  items: TodoItem[];
}

function TodoList() {

  const axiosInstance = useAxiosInstance();

  const [ data, setData ] = useState<TodoList | null>(null);

  // 할일 목록을 API 서버에서 조회
  const fetchTodoList = async () => {
    console.log('API 서버에 목록 요청');
    // TODO API 서버에 목록 요청
    const res = await axiosInstance.get<TodoList>('/todolist');

    // 더미 데이터로 지정
    setData(res.data);
  };

  // 삭제 처리
  const handleDelete = (_id: number) => {
    console.log('API 서버에 삭제 요청', _id);
    // TODO API 서버에 삭제 요청

    alert('삭제가 완료되었습니다.');

    // TODO API 서버에 목록 요청
    fetchTodoList();
  };

  useEffect(() => {
    fetchTodoList();
  }, []); // 빈 배열을 전달해서 마운트시에만 실행

  const itemList = data?.items.map(item => 
    <TodoListItem key={ item._id } item={ item } handleDelete={ handleDelete } />
  );

  return (
    <div id="main">
      <h2>할일 목록</h2>
      <div className="todo">
        <Link to="/add">추가</Link>
        <br />
        <form className="search">
          <input type="text" autoFocus />
          <button type="submit">검색</button>
        </form>
        <ul className="todolist">
          { itemList }
        </ul>
      </div>
    </div>
  );
}

export default TodoList;