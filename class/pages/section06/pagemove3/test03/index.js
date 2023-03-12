//Graphql mutation 실습

import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  //라우터 가져오기
  const router = useRouter();

  //Graphql 가져오기
  const [myFunction] = useMutation(CREATE_BOARD);

  //state 변수
  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  //함수
  const onClickSubmit = async () => {
    //언제 실패할지 모르기 때문에 시도를 한다
    try {
      const result = await myFunction({
        variables: {
          writer: writer,
          title: title,
          contents: contents,
        },
      });
      console.log(result.data.createBoard.number);
      alert(result.data.createBoard.message);
      // router.push("/section06/pagemove3/" + result.data.createBoard.number);
      router.push(`/section06/pagemove3/${result.data.createBoard.number}`);
    } catch (error) {
      //try에 있는 내용을 시도하다가 실패하면 아래줄 모두 무시하고 catch가 실행됨
      console.log(error.message);
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>게시글 등록 실습</h1>
      <div>
        작성자: <input onChange={onChangeWriter} />
      </div>
      <div>
        제목: <input onChange={onChangeTitle} />
      </div>
      <div>
        내용: <input onChange={onChangeContents} />
      </div>
      <button onClick={onClickSubmit}>등록</button>
    </div>
  );
}
