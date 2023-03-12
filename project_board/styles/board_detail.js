import styled from "@emotion/styled";

//Wrapper
export const Wrapper = styled.div`
  border: 1px solid black;
  width: 600px;
  height: 800px;
  //정렬
  display: flex;
  flex-direction: column;
  align-items: center;
  //여백
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;
  //그림자넣기
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

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

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
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

export const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Contents = styled.div`
  font-size: 17px;
  padding-left: 4px;
`;
