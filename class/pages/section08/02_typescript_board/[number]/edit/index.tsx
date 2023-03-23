//수정페이지

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../../../../src/components/units/board/08_typescript_board/BoardWrite.container";
import { FETCH_BOARD } from "../../../../../src/components/units/board/08_typescript_board/BoardWrite.queries";

export default function BoardNewPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });

  return <BoardWrite isEdit={true} data={data} />;
}
