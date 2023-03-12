//Graphql mutation 사용자 입력값 보내주기 실습

import { useMutation, gql } from "@apollo/client";

const CREATE_BOARD = gql`
  #타입 적는곳
  mutation createBoard($writer: String, $title: String, $contents: String) {
    #실제 우리가 전달할 변수 적는곳
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationArgs() {
  //Graphql 가져오기
  const [createBoard] = useMutation(CREATE_BOARD);
  //함수
  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        //variables가 $역할을 한다.
        writer: "훈이",
        title: "안녕하세요!",
        contents: "반갑습니다",
      },
    });

    console.log(result);
    console.log(result.data);
    console.log(result.data.createBoard.number);
    alert(result.data.createBoard.message);
  };

  return (
    <div>
      <h1>Graphql Mutation 실습 페이지</h1>
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </div>
  );
}
