import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const Row = styled.div`
  width: 700px;
  height: 60px;
  display: flex;
  border-bottom: 1px solid gray;
  padding-bottom: 5px;
  margin-bottom: 10px;
`;

const Column = styled.div``;

const Number = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-right: 15px;
  color: gray;
`;

const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-right: 15px;
  padding-bottom: 10px;
`;

export default function MapListPage() {
  const { data } = useQuery(FETCH_BOARDS);

  console.log(data?.fetchBoards);

  return (
    <div>
      {data?.fetchBoards.map((el) => {
        return (
          <Row>
            <Number>{el.number}</Number>
            <Column>
              <Title>{el.title}</Title>
              <div>{el.contents}</div>
            </Column>
          </Row>
        );
      })}
    </div>
  );
}
