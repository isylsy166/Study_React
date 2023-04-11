import { useQuery } from "@apollo/client";
import {
   IQuery,
   IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";
import { FETCH_BOARDS } from "../../../src/components/units/board/08_typescript_board/BoardWrite.queries";

export default function Pagination() {
   const { data, refetch } = useQuery<
      Pick<IQuery, "fetchBoards">,
      IQueryFetchBoardArgs
   >(FETCH_BOARDS);
   console.log(data?.fetchBoards);

   const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
      void refetch({ page: Number(event.target.id) });
   };

   return (
      <>
         {data?.fetchBoards.map((el) => (
            <div key={el._id}>
               <span>{el.writer}</span>
               <span> {el.title}</span>
            </div>
         ))}

         {new Array(10).fill(1).map((_, index) => (
            <span key={index} id={String(index + 1)} onClick={onClickPage}>
               {index + 1}
            </span>
         ))}

         {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
            <span key={el} id={String(el)} onClick={onClickPage}>
               {el}
            </span>
         ))} */}

         {/* <span id="1" onClick={onClickPage}>
            1
         </span>
         <span id="2" onClick={onClickPage}>
            2
         </span>
         <span id="3" onClick={onClickPage}>
            3
         </span>
         <span id="4" onClick={onClickPage}>
            4
         </span>
         <span id="5" onClick={onClickPage}>
            5
         </span> */}
      </>
   );
}
