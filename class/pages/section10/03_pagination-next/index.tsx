import { useQuery } from "@apollo/client";
import { useState } from "react";
import {
   IQuery,
   IQueryFetchBoardArgs,
   IQueryFetchBoardsCountArgs,
} from "../../../src/commons/types/generated/types";
import { FETCH_BOARDS } from "../../../src/components/units/board/08_typescript_board/BoardWrite.queries";
import { FETCH_BOARD_COUNT } from "./../../../src/components/units/board/08_typescript_board/BoardWrite.queries";

export default function Pagination() {
   const { data, refetch } = useQuery<
      Pick<IQuery, "fetchBoards">,
      IQueryFetchBoardArgs
   >(FETCH_BOARDS);

   const { data: dataBoardCount } = useQuery<
      Pick<IQuery, "fetchBoardsCount">,
      IQueryFetchBoardsCountArgs
   >(FETCH_BOARD_COUNT);

   const [startPage, setStartPage] = useState(1);
   const lastPage = dataBoardCount
      ? Math.ceil(dataBoardCount?.fetchBoardsCount / 10)
      : 0;

   console.log(data?.fetchBoards);

   const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
      void refetch({ page: Number(event.target.id) });
   };

   const onClickPrevPage = () => {
      if (startPage === 1) return; // 1페이지 아래로 안내려가게
      setStartPage(startPage - 10);
      void refetch({ page: Number(startPage - 10) });
   };

   const onClickNextPage = () => {
      if (startPage + 10 <= lastPage) {
         setStartPage(startPage + 10);
         void refetch({ page: Number(startPage + 10) });
      }
   };

   return (
      <>
         {data?.fetchBoards.map((el) => (
            <div key={el._id}>
               <span style={{ marginRight: "10px" }}>{el.writer}</span>
               <span> {el.title}</span>
            </div>
         ))}

         <div>
            <span onClick={onClickPrevPage}>이전페이지</span>
            {new Array(10).fill(1).map((_, index) => {
               if (index + startPage <= lastPage) {
                  return (
                     <span
                        key={index}
                        id={String(index + startPage)}
                        onClick={onClickPage}
                        style={{ marginRight: "10px", marginLeft: "10px" }}
                     >
                        {index + startPage}
                     </span>
                  );
               } else {
                  <span></span>;
               }
            })}
            <span onClick={onClickNextPage}>다음페이지</span>
         </div>
      </>
   );
}
