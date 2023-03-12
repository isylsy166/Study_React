//라우팅을 이용해 페이지 이동하기 실습

import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickPMove1 = () => {
    router.push("/section06/pagemove/page2");
  };
  const onClickPMove2 = () => {
    router.push("/section06/pagemove/page3");
  };
  const onClickPMove3 = () => {
    router.push("/section06/pagemove/page4");
  };

  return (
    <div>
      <h2>페이지 이동하기 실습</h2>
      <p>정적으로</p>
      <button onClick={onClickPMove1}>페이지 이동하기1</button>
      <br />
      <button onClick={onClickPMove2}>페이지 이동하기2</button>
      <br />
      <button onClick={onClickPMove3}>페이지 이동하기3</button>
      <br />
    </div>
  );
}
