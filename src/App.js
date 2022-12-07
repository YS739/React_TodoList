import React, { useState } from "react";
import "./App.css";
import CustomButton from "./components/CustomButton";

function ToDoList(props) {
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
          color="white"
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

// const setBtn = (toDos) => {
//   if ((toDos.isDone === false)) {
//     return { ...toDos, isDone: true };
//   } else {
//     return { ...toDos, isDone: false };
//   }
// };

const App = () => {
  const [toDos, setToDos] = useState([
    // { id: 0, title: "", body: "", isDone: false },
    {
      id: 1,
      title: "독서",
      body: "IT 책 10장 읽기",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트",
      body: "리액트 입문 과제 제출",
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

  const onChangeList = (id) => {
    console.log(id);
    return id === false
      ? [...toDos, (toDos.isDone = true)]
      : [...toDos, (toDos.isDone = false)];
  };

  // toDos.map((toDo) => {
  //   return toDo.isDone === false
  //     ? setToDos([...toDos, (toDos.isDone = true)])
  //     : setToDos([...toDos, (toDos.isDone = false)]);
  // });
  // console.log(toDos[0].isDone, toDos[1].isDone);
  // const onChangeList = (id) => {
  //   toDos.map((toDo) => {
  //     if (toDo.isDone === false) {
  //       return setToDos([...toDos, (toDos.isDone = true)]);
  //     } else {
  //       return setToDos([...toDos, (toDos.isDone = false)]);
  //     }
  //   });
  // };

  return (
    <div>
      <div className="header">
        <h1>My To Do List</h1>
      </div>
      <h3 className="react">React</h3>

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
