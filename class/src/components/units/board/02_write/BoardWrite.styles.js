import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
`;

export const BlueButton = styled.button`
  font-size: 15px;
  color: orange;
  background-color: ${(props) => (props.color ? "yellow" : "default")};
`;
