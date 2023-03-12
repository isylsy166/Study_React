import { useState } from "react";

export default function CounterStatePage() {
  const [count, setCount] = useState(0); //state 변수 생성

  function onClickCountUP() {
    setCount(count + 1);
  }

  function onClickCountDown() {
    setCount(count - 1);
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUP}>카운트 올리기!</button>
      <button onClick={onClickCountDown}>카운트 내리기!</button>
    </div>
  );
}
