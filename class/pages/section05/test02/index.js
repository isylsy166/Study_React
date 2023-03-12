//동기 비동기 통신 graphql로 실습

import { gql, useMutation } from "@apollo/client";

//변수 만들기 너무 길어서
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
  const [나의함수] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수();
    console.log(result);
  };

  return (
    <div>
      <button>GRAPHQL-API 요청하기</button>
    </div>
  );
}
