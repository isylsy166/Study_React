import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingPage() {
  //생성
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: 265863 },
  });

  //콘솔에 찍어보기
  console.log(data);

  return (
    <div>
      <div>1번 페이지 이동이 완료되었습니다.</div>
      <div>작성자: {data && data.fetchBoard.writer}</div>
      {/* 옵셔널체인지방식 */}
      <div>제목: {data?.fetchBoard.title}</div>
      <div>내용: {data && data.fetchBoard.contents}</div>
    </div>
  );
}
