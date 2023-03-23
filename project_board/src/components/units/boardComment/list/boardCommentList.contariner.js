import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListUI from "./boardCommentList.presenter";
import { FETCH_BOARD_COMMENTS } from "./boardCommentList.queries";

export default function BoardCommentList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.BoardDetail },
  });

  console.log(data);

  const onClickDelete = async (event) => {
    const myPassword = prompt("비밀번호를 입력하세요.");
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.BoardDetail },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return <BoardCommentListUI data={data} />;
}
