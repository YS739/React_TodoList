import React, { useState } from "react";
import "./App.css";

function ToDoList(props) {
  return (
    <div className="card">
      <div>{props.toDo.title}</div>
      <div>{props.toDo.body}</div>
      <button
        onClick={() => {
          props.handleDelete(props.toDo.id);
        }}
      >
        삭제하기
      </button>
      {/* <button onClick={()=>{
        props.
      }}>완료</button> */}
    </div>
  );
}

const App = () => {
  const [toDos, setToDos] = useState([
    {
      id: 1,
      title: "리액트",
      body: "리액트 입문 과제 제출하기",
      isDone: false,
    },
    {
      id: 2,
      title: "독서",
      body: "IT 책 10장 읽기",
      isDone: true,
    },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmitHandler = () => {
    const newToDo = {
      id: toDos.length + 1,
      title: title,
      body: body,
    };
    setToDos([...toDos, newToDo]);
  };

  const onChangeHandler = (id) => {
    const newToDoList = toDos.filter((toDo) => toDo.id !== id);
    setToDos(newToDoList);
  };

  return (
    <div>
      <div className="header">
        <p>My To Do List</p>
        <p>React</p>
      </div>
      <div className="add-todo-box">
        <input
          value={title}
          placeholder="제목을 입력해주세요"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          value={body}
          placeholder="내용을 입력해주세요"
          onChange={(e) => setBody(e.target.value)}
        />
        <button onClick={onSubmitHandler}>작성하기</button>
      </div>
      <div>Working</div>
      <div className="to-do-cards">
        {toDos.map((toDo) => {
          return (
            <ToDoList
              handleDelete={onChangeHandler}
              toDo={toDo}
              key={(toDo.id, toDo.isDone)}
            ></ToDoList>
          );
        })}
      </div>
      <div>Done!</div>
    </div>
  );
};

export default App;
