import { Wrapper, Page } from "@/styles/board";
import { Header, Inform, Vector, Name, Date } from "@/styles/board_detail";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

//useQuery안에 담은 변수 만들자
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createAt
    }
  }
`;

export default function BoardDetailPage() {
  //페이지 이동을 위해 라우터 사용
  const router = useRouter();

  //먼저 GraphQL에 있는 FetchBoard에 있는 데이터 가져와야됨
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return (
    <Page>
      <Wrapper>
        <Header>
          <Vector src="/images/Vector.png" />
          <Inform>
            <Name>{data.fetchBoard?.writer}</Name>
            <Date>{data.fetchBoard?.createdAt}</Date>
          </Inform>
        </Header>
      </Wrapper>
    </Page>
  );
}
