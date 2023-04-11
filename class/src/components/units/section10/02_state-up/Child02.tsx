export default function Child02(props: any) {
   return (
      <>
         <div>자식 1의 카운트: {props.count}</div>
         <button onClick={props.onClickCountUp}>카운트 올리기</button>
      </>
   );
}
