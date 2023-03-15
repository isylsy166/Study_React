import { useMutation, useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, DELETE_BOARD } from "./BoardList.queries";

export default function BoardList() {
  //게시글 가져오기
  const { data } = useQuery(FETCH_BOARDS);
  //console.log(data?.fetchBoards);

  //게시글 삭제하기
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = async (event) => {
    await deleteBoard({
      variables: { boardId: Number(event.target.id) },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  return (
    <>
      <BoardListUI data={data} onClickDelete={onClickDelete} />
    </>
  );
}
