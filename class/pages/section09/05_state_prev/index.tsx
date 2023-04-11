import { useState } from "react";

export default function CounterStatePage() {
   const [count, setCount] = useState(0); //state 변수 생성

   function onClickCountUP() {
      setCount((prevState) => prevState + 1);
   }

   return (
      <div>
         <div>{count}</div>
         <button onClick={onClickCountUP}>카운트 올리기!</button>
      </div>
   );
}
