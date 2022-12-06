import React, { useState } from "react";
import "./App.css";

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
        <button
          onClick={() => {
            props.handleDelete(props.toDo.id);
          }}
        >
          삭제하기
        </button>
        <button
          onClick={() => {
            props.handleList(props.toDo.id);
          }}
        >
          {props.toDo.isDone ? "취소" : "완료"}
        </button>
      </div>
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
      isDone: false,
    };
    setToDos([...toDos, newToDo]);
  };

  const onChangeHandler = (id) => {
    const newToDoList = toDos.filter((toDo) => toDo.id !== id);
    setToDos(newToDoList);
  };

  const onChangeList = (isDone) => {
    if ((isDone = false)) {
      return { isDone: true };
    } else {
      return { isDone: false };
    }
  };

  return (
    <div>
      <div className="header">
        <p>My To Do List</p>
      </div>
      <div className="add-todo-box">
        <div className="input-group">
          <span>제목</span>
          <input
            className="input"
            value={title}
            placeholder="제목을 입력해주세요"
            onChange={(e) => setTitle(e.target.value)}
          />
          <span>내용</span>
          <input
            value={body}
            placeholder="내용을 입력해주세요"
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button className="submit-btn" onClick={onSubmitHandler}>
          작성하기
        </button>
      </div>
      <div>
        <div>Working</div>
        <div className="to-do-cards">
          {toDos.map((toDo) => {
            if (toDo.isDone === false) {
              return (
                <ToDoList
                  handleDelete={onChangeHandler}
                  handleList={onChangeList}
                  toDo={toDo}
                  key={(toDo.id, toDo.isDone)}
                ></ToDoList>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div>Done!</div>
        <div className="to-do-cards">
          {toDos.map((toDo) => {
            if (toDo.isDone === true) {
              return (
                <ToDoList
                  handleDelete={onChangeHandler}
                  handleList={onChangeList}
                  toDo={toDo}
                  key={(toDo.id, toDo.isDone)}
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
