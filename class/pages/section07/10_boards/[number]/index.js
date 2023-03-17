//상세페이지

import { FETCH_BOARD } from "@/src/components/units/board/08_write/BoardWrite.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardNewPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });

  const onClickEdit = () => {
    router.push(`/section07/10_boards/${router.query.number}/edit`);
  };

  return (
    <div>
      <h1>상세페이지</h1>
      <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div>내용: {data?.fetchBoard.contents}</div>
      <div>{router.query.number}번 페이지로 이동되었습니다.</div>
      <button onClick={onClickEdit}>수정하기</button>
    </div>
  );
}
