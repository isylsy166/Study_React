import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 680px;
  //여백
  margin-bottom: 10px;
  border-top: 3px solid #6495ed;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-top: 15px;
  margin-bottom: 15px;
`;

export const Avatar = styled.img`
  width: 35px;
  margin-right: 10px;
`;

export const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const DateString = styled.div`
  font-size: 12px;
  color: gray;
`;

export const ContentsWrapper = styled.div`
  font-size: 20px;
  padding-bottom: 10px;
`;

export const Contents = styled.div`
  font-size: 20px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

export const UpdateIcon = styled.img`
  width: 33px;
  cursor: pointer;
`;

export const DeleteIcon = styled.img`
  width: 33px;
  cursor: pointer;
`;
