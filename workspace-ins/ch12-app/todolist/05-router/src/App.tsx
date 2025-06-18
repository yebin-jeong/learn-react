import Footer from "@components/Footer";
import Header from "@components/Header";
import About from "@pages/About";
import ErrorPage from "@pages/ErrorPage";
import Home from "@pages/Home";
import TodoAdd from "@pages/TodoAdd";
import TodoEdit from "@pages/TodoEdit";
import TodoInfo from "@pages/TodoInfo";
import TodoList from "@pages/TodoList";

function App() {
  return (
    <div className="todoapp">
      <Header />
      <Home />
      <About />
      <ErrorPage />
      
      <TodoList />
      <TodoInfo />
      <TodoAdd />
      <TodoEdit />
      <Footer />
    </div>
  );
}

export default App
