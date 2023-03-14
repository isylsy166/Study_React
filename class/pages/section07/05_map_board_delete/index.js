import { gql, useMutation, useQuery } from "@apollo/client";
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

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

const Row = styled.div`
  width: 700px;
  height: 60px;
  display: flex;
  border-bottom: 1px solid gray;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
`;

const Numbers = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-right: 15px;
  margin-left: 15px;
  color: gray;
`;

const Writer = styled.div`
  font-size: 18px;
  margin-right: 15px;
  margin-left: 15px;
  color: skyblue;
`;

const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-right: 15px;
  padding-bottom: 10px;
`;

const Contents = styled.div`
  font-size: 13px;
  margin-right: 15px;
  padding-bottom: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  width: 70px;
  height: 30px;
  font-size: 10px;
`;

export default function MapDeletePage() {
  const { data } = useQuery(FETCH_BOARDS);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = async (e) => {
    await deleteBoard({
      variables: { number: Number(e.target.id) },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => {
        return (
          <Row key={el.number}>
            <input type="checkbox" />
            <Column1>
              <Numbers>{el.number}</Numbers>
              <Writer>{el.writer}</Writer>
            </Column1>

            <Column>
              <Title>{el.title}</Title>
              <Contents>{el.contents}</Contents>
            </Column>
            <ButtonWrapper>
              <Button id={el.number} onClick={onClickDelete}>
                삭제하기
              </Button>
            </ButtonWrapper>
          </Row>
        );
      })}
    </div>
  );
}
