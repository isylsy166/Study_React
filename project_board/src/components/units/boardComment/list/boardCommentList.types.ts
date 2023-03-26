import { IQuery } from "../../../../commons/types/types";
import { MouseEvent } from "react";

export interface IBoardCommentListProps {}

export interface IBoardCommentListUIProps {
  data: Pick<IQuery, "fetchBoardComments">;
  onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
}
