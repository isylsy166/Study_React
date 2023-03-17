import { BlueButton, RedInput } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  //자바스크립트 영역

  return (
    //HTML 영역(return 아래)
    <div>
      <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
      작성자: <RedInput type="text" onChange={props.onChangeWriter} /> <br />
      제목: <input type="text" onChange={props.onChangeTitle} /> <br />
      내용: <input type="text" onChange={props.onChangeContents} /> <br />
      <BlueButton
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
        color={props.mycolor}
      >
        {props.isEdit ? "수정하기" : "등록하기"}
      </BlueButton>
    </div>
  );
}
