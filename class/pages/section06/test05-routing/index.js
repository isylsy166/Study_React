//라우팅을 이용해 동적 페이지 이동하기 실습

import { useRouter } from "next/router";

export default function DynamicRoutingPage() {
  const router = useRouter();

  const onClickPMove1 = () => {
    router.push("/section06/pagemove2/265871");
  };
  const onClickPMove2 = () => {
    router.push("/section06/pagemove2/265869");
  };
  const onClickPMove3 = () => {
    router.push("/section06/pagemove2//265881");
  };
  const onClickPMove100 = () => {
    router.push("/section06/pagemove2/26588");
  };

  return (
    <div>
      <h2>Dynamic Routing Page</h2>
      <p>동적으로</p>
      <button onClick={onClickPMove1}>페이지 이동하기265871</button>
      <br />
      <button onClick={onClickPMove2}>페이지 이동하기265869</button>
      <br />
      <button onClick={onClickPMove3}>페이지 이동하기265881</button>
      <br />
      <button onClick={onClickPMove100}>페이지 이동하기26588</button>
      <br />
    </div>
  );
}
