import { gql } from "@apollo/client";
import { FETCH_BOARD } from "@/src/components/units/board/08_write/BoardWrite.queries";

export const CREATE_BOARD = gql`
   mutation createBoard($writer: String, $title: String, $contents: String) {
      createBoard(writer: $writer, title: $title, contents: $contents) {
         _id
         number
         message
      }
   }
`;

export const UPDATE_BOARD = gql`
   mutation updateBoard(
      $number: Int
      $writer: String
      $title: String
      $contents: String
   ) {
      updateBoard(
         number: $number
         writer: $writer
         title: $title
         contents: $contents
      ) {
         number
         message
      }
   }
`;

export const FETCH_BOARD = gql`
   query fetchBoard($number: Int) {
      fetchBoard(number: $number) {
         number
         writer
         title
         contents
      }
   }
`;

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

export const FETCH_BOARD_COUNT = gql`
   query {
      fetchBoardsCount
   }
`;
