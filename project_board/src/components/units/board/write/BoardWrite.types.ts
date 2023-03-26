import { ChangeEvent } from "react";
import { IMutation, IQuery } from "../../../../commons/types/types";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IMutation, "createBoard">;
}

export interface IBoardWriteUIProps {
  isEdit: boolean;
  isActive: boolean;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;

  onClickEdit: () => void;
  onClickSubmit: () => void;

  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;

  data?: Pick<IQuery, "fetchBoard">;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
}
