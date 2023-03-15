import * as L from "src/components/units/board/List/BoardList.styles";

export default function BoardListUI(props) {
  return (
    <L.Wrapper>
      <L.HeadWrapper>
        <L.HeadID>아이디</L.HeadID>
        <L.HeadBasic>작성자</L.HeadBasic>
        <L.HeadTitle>제목</L.HeadTitle>
        <L.HeadBasic>날짜</L.HeadBasic>
      </L.HeadWrapper>

      {props.data?.fetchBoards.map((el, index) => {
        return (
          <L.Row key={el._id}>
            <L.ID>{el._id}</L.ID>
            <L.Basic>{el.writer}</L.Basic>

            <L.Title>{el.title}</L.Title>
            <L.Basic>{el.createdAt}</L.Basic>
          </L.Row>
        );
      })}
      <L.ButtonWrapper>
        <L.Button>게시글 등록하기</L.Button>
      </L.ButtonWrapper>
    </L.Wrapper>
  );
}
