import { useQuery } from "@apollo/client";
import { IQuery } from "../../../src/commons/types/generated/types";
import { FETCH_BOARDS } from "../../../src/components/units/board/08_typescript_board/BoardWrite.queries";
import { useState, MouseEvent } from "react";

export default function CommentEdit() {
   const [myIndex, setMyIndex] = useState(0);

   const { data } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARDS);

   const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
      setMyIndex(Number(event.currentTarget.id));
   };

   return (
      <>
         <div>댓글 수정 연습페이지</div>

         {data?.fetchBoards.map((el, index) => (
            <div key={el._id}>
               {index !== myIndex && (
                  <div>
                     <span>{el.writer}</span>
                     <span> {el.title}</span>
                     <button id={String(index)} onClick={onClickEdit}>
                        수정하기
                     </button>
                  </div>
               )}
               {index === myIndex && (
                  <div>
                     수정할 내용: <input type="text" />
                  </div>
               )}
            </div>
         ))}
      </>
   );
}
