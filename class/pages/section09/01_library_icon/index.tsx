import { DeleteOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(DeleteOutlined)`
   color: red;
   font-size: 80px;
`;

export default function LibraryIconPage() {
   return <MyIcon />;
}
