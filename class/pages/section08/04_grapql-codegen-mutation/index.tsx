//Graphql mutation 사용자 입력값 보내주기 실습 state를 통해 전달

import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import {
   IMutation,
   IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/types";
import { IBoardWriteUIProps } from "../../../src/components/units/board/08_typescript_board/BoardWrite.types";

//useMutation에 적을 건데 너무 길어서 변수로 만들어서 저장함
const CREATE_BOARD = gql`
   #타입 적는곳
   mutation createBoard($writer: String, $title: String, $contents: String) {
      #실제 우리가 전달할 변수 적는곳
      createBoard(writer: $writer, title: $title, contents: $contents) {
         #graphql은 변수 앞에 $를 쓴다
         _id
         number
         message
      }
   }
`;

export default function GraphqlMutationPage(props: IBoardWriteUIProps) {
   const [writer, setWriter] = useState("");
   const [title, setTitle] = useState("");
   const [contents, setContents] = useState("");
   // Graphql 가져오기
   const [createBoard] = useMutation<
      Pick<IMutation, "createBoard">,
      IMutationCreateBoardArgs
   >(CREATE_BOARD);

   // 버튼 클릭하면 실행 될 함수
   const onClickSubmit = async () => {
      const result = await createBoard({
         variables: {
            writer: writer,
            title: title,
            contents: contents,
         },
      });
      console.log(result.data);
      alert(result.data?.createBoard?.message);
   };

   return (
      <div>
         <h1>Graphql Mutation 실습 페이지</h1>
         <h2>state로 입력해서 변수를 통해 전달하기</h2>
         작성자: <input type="text" /> <br />
         제목: <input type="text" /> <br />
         내용: <input type="text" /> <br />
         <button>GRAPHQL-API(동기) 요청하기</button>
      </div>
   );
}
