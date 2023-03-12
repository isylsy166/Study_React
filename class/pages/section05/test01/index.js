import axios from "axios";
import { useState } from "react";

export default function RestGetPage() {
  //state
  const [title, setTitle] = useState("");

  //비동기통신 함수
  const onClickAsync = () => {
    const result = axios.get("https://koreanjson.com/posts/1");
    console.log(result);
  };

  //동기통신 함수
  const onClickSync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result.data);
    console.log(result.data.title);
    setTitle(result.data.title);
  };

  return (
    <div>
      <div>동기 비동기 통신 실습</div>
      <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
      <button onClick={onClickSync}>RESP-API(동기) 요청하기</button>
      <div>{title}</div>
    </div>
  );
}
