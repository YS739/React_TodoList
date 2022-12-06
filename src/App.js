import React, { useState } from "react";
import "./App.css";

// function CheckButton(props) {
//   if ((props.toDo.isDone = true)) {
//     return (
//       <button
//         className="complete-btn"
//         onClick={() => {
//           props.handleDone((props.toDo.isDone = false));
//         }}
//       >
//         취소
//       </button>
//     );
//   }
//   <button
//     className="complete-btn"
//     onClick={() => {
//       props.handleDone((props.toDo.isDone = true));
//     }}
//   >
//     완료
//   </button>;
// }

function WorkList(props) {
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

      <button
        className="complete-btn"
        onClick={() => {
          props.handleDone((props.toDo.isDone = true));
        }}
      >
        완료
      </button>
    </div>
  );
}

function DoneList(props) {
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
      <button
        className="complete-btn"
        onClick={() => {
          props.handleDone((props.toDo.isDone = false));
        }}
      >
        취소
      </button>
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
    const newWorkList = toDos.filter((toDo) => toDo.id !== id);
    setToDos(newWorkList);
  };

  const onChangeStateHandler = (isDone) => {
    const doneToDoList = toDos.filter((toDo) => toDo.isDone === true);
    setToDos(doneToDoList);
  };

  return (
    <div>
      <div className="header">
        <p>My To Do List</p>
        <p>React</p>
      </div>
      <div className="add-todo-box">
        <div className="input-group">
          <span>제목</span>
          <input
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
        <button onClick={onSubmitHandler}>작성하기</button>
      </div>
      <div>
        <div>Working</div>
        <div className="to-do-cards">
          {toDos.map((toDo) => {
            return (
              <WorkList
                handleDelete={onChangeHandler}
                handleDone={onChangeStateHandler}
                toDo={toDo}
                key={(toDo.id, (toDo.isDone = false))}
              ></WorkList>
            );
          })}
        </div>
        <div>Done!</div>
        <div className="to-do-cards">
          {toDos.map((toDo) => {
            return (
              <DoneList
                handleDelete={onChangeHandler}
                handleDone={onChangeStateHandler}
                toDo={toDo}
                key={(toDo.id, (toDo.isDone = true))}
              ></DoneList>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
