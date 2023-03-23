//등록페이지

import BoardWrite from "../../../../src/components/units/board/08_typescript_board/BoardWrite.container";

export default function BoardNewPage() {
  return <BoardWrite isEdit={false} />;

  // <>{BoardWrite({ isEdit: false })}</>;
}
