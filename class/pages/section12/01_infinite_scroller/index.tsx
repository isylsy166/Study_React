import { gql, useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
import {
   IQuery,
   IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

export const FETCH_BOARDS = gql`
   query fetchBoards($page: Int) {
      fetchBoards(page: $page) {
         _id
         writer
         title
         contents
      }
   }
`;

export default function InfiniteScroller() {
   const { data, fetchMore } = useQuery<
      Pick<IQuery, "fetchBoards">,
      IQueryFetchBoardsArgs
   >(FETCH_BOARDS);

   const onLoadMore = () => {
      if (data === undefined) {
         return;
      }

      void fetchMore({
         variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
         updateQuery: (prev, { fetchMoreResult }) => {
            if (fetchMoreResult.fetchBoards === undefined) {
               return {
                  fetchBoards: [...prev.fetchBoards],
               };
            }
            return {
               fetchBoards: [
                  ...prev.fetchBoards,
                  ...fetchMoreResult.fetchBoards,
               ],
            };
         },
      });
   };

   return (
      <>
         <div>무한스크롤 실습</div>
         <div style={{ width: "800px", height: "600px", overflow: "auto" }}>
            <InfiniteScroll
               pageStart={0}
               loadMore={onLoadMore}
               hasMore={true}
               useWindow={false}
            >
               {data?.fetchBoards.map((el) => (
                  <div key={el._id}>
                     <span style={{ color: "pink" }}>{el.writer}</span>
                     <span> {el.title}</span>
                  </div>
               )) ?? <div></div>}
            </InfiniteScroll>
         </div>
      </>
   );
}
