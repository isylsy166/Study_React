//수정페이지

import BoardWrite from "@/src/components/units/board/08_write/BoardWrite.container";
import { FETCH_BOARD } from "@/src/components/units/board/08_write/BoardWrite.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardNewPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });

  return <BoardWrite isEdit={true} data={data} />;
}
