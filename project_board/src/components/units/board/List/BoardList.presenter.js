import { getDate } from "@/src/components/commons/libraries/utils";
import * as L from "src/components/units/board/List/BoardList.styles";
import { Page } from "../write/BoardWrite.styles";

export default function BoardListUI(props) {
  return (
    <Page>
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

              <L.Title id={el._id} onClick={props.onClickMoveBoardDetail}>
                {el.title}
              </L.Title>
              <L.Basic>{getDate(el.createdAt)}</L.Basic>
            </L.Row>
          );
        })}
        <L.ButtonWrapper>
          <L.Button onClick={props.onClickMoveBoardWrite}>
            게시글 등록하기 <L.PencilIcon src="/images/write.png" />
          </L.Button>
        </L.ButtonWrapper>
      </L.Wrapper>
    </Page>
  );
}
