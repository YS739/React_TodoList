import React from "react";
import "./App.css";

function App() {
  const clickBtn = () => {
    alert("내가 왔다!");
  };
  // <---- 자바스크립트 영역 ---->

  return (
    /* <---- HTML/JSX 영역  ---->*/
    <div className="styleTest">
      <span>내가 왔다!!!!!!!!</span>
      <button onClick={clickBtn}>클릭!</button>
      {/* 이곳에 퀴즈를 위한 html 코드를 작성해 주세요 */}
    </div>
  );
}

export default App;
