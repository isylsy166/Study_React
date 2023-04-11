import { DeleteOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Rate } from "antd";
import { useState } from "react";

const MyIcon = styled(DeleteOutlined)`
   color: red;
   font-size: 80px;
`;

const MyStar = styled(Rate)``;

export default function LibraryIconPage() {
   const [value, setValue] = useState(0);

   return (
      <div>
         <MyIcon />
         <MyStar onChange={setValue} /> <br />
         점수 : {value}
      </div>
   );
}
