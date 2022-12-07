import React, { useState } from "react";
import "./App.css";

function CustomButton(props) {
  const { color, onClick, children } = props;
  if (color) {
    return (
      <button
        style={{ backgroundColor: color, color: "black" }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

function ToDoList(props) {
  // const setBtn = (toDo) => {
  //   if ((toDo.isDone = false)) {
  //     return { ...toDo, isDone: true };
  //   } else {
  //     return { ...toDo, isDone: false };
  //   }
  // };
  return (
    <div className="card">
      <div className="todo-title">{props.toDo.title}</div>
      <div className="todo-body">{props.toDo.body}</div>
      <div className="list-btn">
        <CustomButton
          color="#fdf0ff"
          onClick={() => {
            props.handleDelete(props.toDo.id);
          }}
        >
          삭제하기
        </CustomButton>
        <CustomButton
          color="#fdf0ff"
          onClick={() => {
            props.handleList(props.toDo.isDone);
          }}
        >
          {props.toDo.isDone ? "취소" : "완료"}
        </CustomButton>
      </div>
    </div>
  );
}

const App = () => {
  const [toDos, setToDos] = useState([
    // { id: 0, title: "", body: "", isDone: false },
    {
      id: 1,
      title: "리액트",
      body: "리액트 입문 과제 제출",
      isDone: true,
    },
    {
      id: 2,
      title: "독서",
      body: "IT 책 10장 읽기",
      isDone: false,
    },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmitHandler = () => {
    const newToDo = {
      id: toDos.length + 1,
      title: title,
      body: body,
      isDone: false,
    };
    setToDos([...toDos, newToDo]);
  };

  const onChangeHandler = (id) => {
    const newToDoList = toDos.filter((toDo) => toDo.id !== id);
    setToDos(newToDoList);
  };

  const onChangeList = (toDo) => {
    if ((toDo.isDone = false)) {
      return { ...toDos, isDone: true };
    } else {
      return { ...toDos, isDone: false };
    }
  };

  return (
    <div>
      <div className="header">
        <h1>My To Do List</h1>
      </div>
      <div className="add-todo-box">
        <div className="input-group">
          <h3>제목</h3>
          <input
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <h3>내용</h3>
          <input
            className="input"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button className="submit-btn" onClick={onSubmitHandler}>
          작성하기
        </button>
      </div>
      <div className="list-container">
        <h2>Working..🔥🔥🔥</h2>
        <div className="to-do-cards">
          {toDos.map((toDo) => {
            if (toDo.isDone === false) {
              return (
                <ToDoList
                  handleDelete={onChangeHandler}
                  handleList={onChangeList}
                  toDo={toDo}
                  key={toDo.id}
                ></ToDoList>
              );
            } else {
              return null;
            }
          })}
        </div>
        <h2>Done!🎉🎉🎉</h2>
        <div className="to-do-cards">
          {toDos.map((toDo) => {
            if (toDo.isDone === true) {
              return (
                <ToDoList
                  handleDelete={onChangeHandler}
                  handleList={onChangeList}
                  toDo={toDo}
                  key={toDo.id}
                ></ToDoList>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
