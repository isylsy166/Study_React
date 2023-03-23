import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

interface Iprops {
  isEdit: boolean;
  data: any;
}

export default function BoardWrite(props: Iprops) {
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
    router.push(
      `/section08/02_typescript_board/${result.data.createBoard.number}`
    );
  };

  const onClickUpdate = async () => {
    interface IMyvariables {
      number: number;
      writer?: string;
      title?: string;
      contents?: string;
    }

    const myvariables: IMyvariables = { number: Number(router.query.number) };
    if (writer) myvariables.writer = writer;
    if (title) myvariables.title = title;
    if (contents) myvariables.contents = contents;
    //수정하기 뮤테이션 날리기
    const result = await updateBoard({
      variables: myvariables,
    });
    //2.상세페이지로 이동하기
    alert("수정되었습니다");
    router.push(`/section08/02_typescript_board/${router.query.number}`);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value && title && contents) {
    }
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (writer && e.target.value && contents) {
    }
  };

  const onChangeContents = (e: ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);

    if (writer && title && e.target.value) {
    }
  };

  return (
    <>
      {BoardWriteUI({
        //props에 넘겨주기
        onClickSubmit: onClickSubmit,
        onClickUpdate: onClickUpdate,
        onChangeWriter: onChangeWriter,
        onChangeTitle: onChangeTitle,
        onChangeContents: onChangeContents,

        //props로 받아왔기 때문에 props.을 앞에 붙여줘야한다
        isEdit: props.isEdit,
        data: props.data,
      })}
    </>

    //HTML 영역
    // <BoardWriteUI
    //   //props에 넘겨주기
    //   onClickSubmit={onClickSubmit}
    //   onClickUpdate={onClickUpdate}
    //   onChangeWriter={onChangeWriter}
    //   onChangeTitle={onChangeTitle}
    //   onChangeContents={onChangeContents}
    //   mycolor={mycolor}
    //   //props로 받아왔기 때문에 props.을 앞에 붙여줘야한다
    //   isEdit={props.isEdit}
    //   data={props.data}
    // />
  );
}
