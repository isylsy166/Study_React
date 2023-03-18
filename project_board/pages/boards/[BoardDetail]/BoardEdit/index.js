//수정페이지

import { FETCH_BOARD } from "@/src/components/units/board/detail/BoardDetail.queries";
import BoardWrite from "@/src/components/units/board/write/BoardWrite.container";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardEditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.BoardDetail },
  });

  return <BoardWrite isEdit={true} data={data} />;
}
