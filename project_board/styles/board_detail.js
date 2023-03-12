import styled from "@emotion/styled";

//Wrapper
export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 23px;
  border-bottom: 2px solid #6495ed;
`;

export const Inform = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

//글자
export const Vector = styled.img`
  margin-right: 15px;
`;

export const Name = styled.div`
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 5px;
`;

export const Date = styled.div`
  font-size: 17px;
  padding-left: 4px;
  color: #6495ed;
`;
