import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickButton = () => {
    router.push("/section06/test02");
  };

  return (
    <div>
      <h2>페이지 이동하기 실습</h2>
      <p>정적으로</p>
      <button onClick={onClickButton}>페이지 이동하기!</button>
    </div>
  );
}
