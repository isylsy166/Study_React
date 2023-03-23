import { ChangeEvent } from "react";
import { BlueButton, RedInput } from "./BoardWrite.styles";

interface Iprops {
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  isEdit: boolean;
  data: any;
}

export default function BoardWriteUI(props: Iprops) {
  //자바스크립트 영역

  return (
    //HTML 영역(return 아래)
    <div>
      <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
      작성자:{" "}
      <RedInput
        type="text"
        onChange={props.onChangeWriter}
        defaultValue={props.data?.fetchBoard.writer}
      />{" "}
      <br />
      제목:{" "}
      <input
        type="text"
        onChange={props.onChangeTitle}
        defaultValue={props.data?.fetchBoard.title}
      />{" "}
      <br />
      내용:{" "}
      <input
        type="text"
        onChange={props.onChangeContents}
        defaultValue={props.data?.fetchBoard.contents}
      />{" "}
      <br />
      <BlueButton
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정하기" : "등록하기"}
      </BlueButton>
    </div>
  );
}
