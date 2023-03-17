//상세페이지

import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";

export default function BoardDetail(props) {
  //페이지 이동을 위해 라우터 사용
  const router = useRouter();

  //먼저 GraphQL에 있는 FetchBoard에 있는 데이터 가져와야됨
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.BoardDetail },
  });

  const [deleteBoard] = useMutation(DELETE_BOARD);

  //목록으로
  const onClickMoveBoardList = () => {
    router.push("/boards/BoardList");
  };

  //수정하기
  const onClickEdit = () => {
    console.log(router);
    console.log(data);

    // router.push(`/boards/${router.query}/BoardEdit`);
    router.push(`/boards/${data.fetchBoard._id}/BoardEdit`);
  };

  //삭제하기
  const onClickBoardDelete = async (event) => {
    await deleteBoard({
      variables: { boardId: event.target.id },
      refetchQueries: [{ query: FETCH_BOARD }],
    });
    alert("게시글이 삭제되었습니다.");
    router.push("/boards/BoardList");
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveBoardList={onClickMoveBoardList}
      onClickBoardDelete={onClickBoardDelete}
      onClickEdit={onClickEdit}
      isEdit={props.isEdit}
    />
  );
}
