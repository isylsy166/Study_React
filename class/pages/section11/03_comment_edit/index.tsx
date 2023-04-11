import { useQuery } from "@apollo/client";
import { IQuery } from "../../../src/commons/types/generated/types";
import { FETCH_BOARDS } from "../../../src/components/units/board/08_typescript_board/BoardWrite.queries";
import CommentItem from "../../../src/components/units/section11/comment_item";

export default function CommentEdit() {
   const { data } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARDS);

   return (
      <>
         <div>댓글 수정 연습페이지</div>

         {data?.fetchBoards.map((el) => (
            <CommentItem key={el._id} el={el} />
         ))}
      </>
   );
}
