/* eslint-disable */

import "./App.css";
import { useState } from "react";

function App() {
  let post = "React Blog";
  let [title, setTitle] = useState(["가", "나", "다"]);
  let [content, contentChange] = useState([
    "추천내용1",
    "추천내용2",
    "추천내용3",
  ]);
  let [like, likeChange] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [count, setCount] = useState(0);
  let [value, setValue] = useState("");
  return (
    <>
      <h4 className={"title"}>{post}</h4>
      {title.map(function (a, i) {
        return (
          <div className="list">
            <h4>
              <span
                onClick={() => {
                  setCount(i);
                }}
              >
                {title[i]}
              </span>
              <span
                onClick={() => {
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  likeChange(copy);
                }}
              >
                👍{like[i]}
              </span>
            </h4>
            <p>{content[i]}</p>
            <button
              onClick={() => {
                let copy = [...title];
                copy.splice(i, 1);
                setTitle(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        모달 버튼
      </button>

      <input
        onChange={(e) => {
          setValue(e.target.value);
          console.log(value);
        }}
      />

      <button
        onClick={() => {
          let copy = [...title];
          copy.unshift(value);
          setTitle(copy);
        }}
      >
        글발행
      </button>

      {modal == true ? (
        <Modal count={count} color="orange" title={title} setTitle={setTitle} />
      ) : null}
    </>
  );

  function Modal(props) {
    return (
      <div className="modal" style={{ backgroundColor: props.color }}>
        <h4>{props.title[props.count]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button
          onClick={() => {
            props.setTitle(["파", "나", "다"]);
          }}
        >
          글수정
        </button>
        {/* 글수정 버튼누르면 첫 글제목이 "파"로 바뀜 */}
      </div>
    );
  }
}

export default App;
