import BoardWriteUI from "./BoardWrite.presenter";

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
  const router = useRouter();
  //입력받은 값
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  //에러메시지
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  //GraphQl Mutation으로 create Board
  const [createBoard] = useMutation(CREATE_BOARD);

  //input창에 적은거 변수로 저장
  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
  };
  //비밀번호
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value !== "") {
      //내용이 뭐라도 적혀있다면
      setPasswordError(""); //에러메시지 없애기
    }
  };
  //제목
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
  };
  //내용
  function onChangeContents(event) {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
  }

  //저장하기 버튼 눌렀을 때 실행할 함수
  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    }
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              //객체에서 키와 value가 같으면 생략할 수 있다 shorthand-property
              writer,
              password,
              title,
              contents,
            },
          },
        });
        console.log("게시판 ID: " + result.data.createBoard._id);
        router.push(`/boards/${result.data.createBoard._id}`);
        alert("게시글이 등록되었습니다.");
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <BoardWriteUI
      writerError={writerError}
      contentsError={contentsError}
      titleError={titleError}
      onChangeWriter={onChangeWriter}
      passwordError={passwordError}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
    />
  );
}
