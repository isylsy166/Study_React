import { Page } from "../../board/write/BoardWrite.styles";
import * as S from "../list/boardCommentList.styles";

export default function BoardCommentListUI(props) {
  return (
    <div>
      <Page>
        {props.data?.fetchBoardComments.map((el) => (
          <S.Wrapper>
            <S.ProfileWrapper>
              <S.Avatar src="/images/avatar.png" />
              <S.Name>{el.writer}</S.Name>
              <S.DateString>{el.createdAt}</S.DateString>
            </S.ProfileWrapper>
            <S.ContentsWrapper>
              <S.Contents>{el.contents}</S.Contents>
              <S.OptionWrapper>
                <S.UpdateIcon src="/images/option_update_icon.png" />
                <S.DeleteIcon src="/images/option_delete_icon.png" />
              </S.OptionWrapper>
            </S.ContentsWrapper>
          </S.Wrapper>
        ))}
      </Page>
    </div>
  );
}
