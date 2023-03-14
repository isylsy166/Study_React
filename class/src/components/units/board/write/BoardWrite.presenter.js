import { BlueButton, RedInput } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  //자바스크립트 영역

  return (
    //HTML 영역(return 아래)
    <div>
      <h1>Props로 파일 나누기 실습</h1>
      작성자: <RedInput type="text" onChange={props.onChangeWriter} /> <br />
      제목: <input type="text" onChange={props.onChangeTitle} /> <br />
      내용: <input type="text" onChange={props.onChangeContents} /> <br />
      <BlueButton onClick={props.onClickSubmit}>
        GRAPHQL-API(동기) 요청하기
      </BlueButton>
    </div>
  );
}
