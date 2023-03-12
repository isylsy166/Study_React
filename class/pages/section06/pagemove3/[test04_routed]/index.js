//라우팅을 이용해 동적 페이지 이동하기 실습

import { gql, useQuery } from "@apollo/client";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

//GraphQL 변수
const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

export default function DynamicRoutedPage() {
  //라우터 사용하기 위해 생성
  const router = useRouter();
  console.log(router); //라우터에 뭐가들어있나 보기
  console.log(router.query.test04_routed);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.test04_routed) },
  });

  return (
    <div>
      <h2>게시물 작성 완료!</h2>
      <p>동적라우팅 사용해서 페이지 이동하는거임</p>
      <div>{router.query.test04_routed}번째 페이지로 이동되었습니다.</div>
      <br />
      <div>작성자: {data && data.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div>내용: {data && data.fetchBoard.contents}</div>
    </div>
  );
}
