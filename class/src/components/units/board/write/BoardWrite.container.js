import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation, gql } from "@apollo/client";
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

export default function BoardWrite() {
  //자바스크립트 영역
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result.data);
    alert(result.data.createBoard.message);
  };

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  return (
    //HTML 영역
    <BoardWriteUI
      //props에 넘겨주기
      aaa={onClickSubmit}
      bbb={onChangeWriter}
      ccc={onChangeTitle}
      ddd={onChangeContents}
    />
  );
}
