//Graphql mutation 실습

import { useMutation, gql } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation {
    createBoard(
      writer: "유리"
      title: "오늘의 기분"
      contents: "배고프고 마라탕 먹고싶고"
    ) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  //Graphql 가져오기
  const [createBoard] = useMutation(CREATE_BOARD);
  //함수
  const onClickSubmit = async () => {
    const result = await createBoard();
    console.log(result.data);
    alert(result.data.createBoard.message);
  };

  return (
    <div>
      <h1>Graphql Mutation 실습 페이지</h1>

      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </div>
  );
}
