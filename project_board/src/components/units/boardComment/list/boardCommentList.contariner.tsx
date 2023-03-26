import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListUI from "./boardCommentList.presenter";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./boardCommentList.queries";
import { IBoardCommentListProps } from "./boardCommentList.types";
import { MouseEvent } from "react";

export default function BoardCommentList(props: IBoardCommentListProps) {
  const router = useRouter();
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.BoardDetail },
  });

  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
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

  return <BoardCommentListUI data={data} onClickDelete={onClickDelete} />;
}
