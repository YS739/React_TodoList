import "./style.css";
import CustomButton from "../form/form.jsx";

function ToDoList(props) {
  return (
    <div className="card">
      <div className="todo-title">{props.toDo.title}</div>
      <div className="todo-body">{props.toDo.body}</div>
      <div className="list-btn">
        <CustomButton
          color="white"
          onClick={() => {
            props.handleDelete(props.toDo.id);
          }}
        >
          삭제하기
        </CustomButton>
        <CustomButton
          color="#f9d9ff"
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

export default ToDoList;
