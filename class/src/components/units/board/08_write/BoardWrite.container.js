import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const [mycolor, setMycolor] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const router = useRouter();

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
    // router.push("/section07/" + result.data.createBoard.number)
    router.push(`/section07/10_boards/${result.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    //수정하기 뮤테이션 날리기
    const result = await updateBoard({
      variables: {
        number: Number(router.query.number),
        writer,
        title,
        contents,
      },
    });
    //2.상세페이지로 이동하기
    alert("수정되었습니다");
    router.push(`/section07/10_boards/${router.query.number}`);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value && title && contents) {
      setMycolor(true);
    }
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    if (writer && e.target.value && contents) {
      setMycolor(true);
    }
  };

  const onChangeContents = (e) => {
    setContents(e.target.value);

    if (writer && title && e.target.value) {
      setMycolor(true);
    }
  };

  return (
    //HTML 영역
    <BoardWriteUI
      //props에 넘겨주기
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      mycolor={mycolor}
      //props로 받아왔기 때문에 props.을 앞에 붙여줘야한다
      isEdit={props.isEdit}
    />
  );
}
