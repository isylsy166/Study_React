import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";

export default function BoardList() {
  //게시글 가져오기
  const { data } = useQuery(FETCH_BOARDS);
  //console.log(data?.fetchBoards);

  //페이지 이동
  const router = useRouter();

  const onClickMoveBoardWrite = () => {
    router.push("/boards/BoardWrite");
  };

  const onClickMoveBoardDetail = (event) => {
    router.push(`/boards/${event.target.id}`);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveBoardWrite={onClickMoveBoardWrite}
      onClickMoveBoardDetail={onClickMoveBoardDetail}
    />
  );
}
