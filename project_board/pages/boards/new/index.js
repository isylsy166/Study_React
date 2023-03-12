import {
  InputWrapper,
  Page,
  SubWrapperRow,
  SubWrapperColumn,
  Title,
  Wrapper,
  Text,
  Writer,
  WriterPW,
  Content,
  InputWrapper2,
  AddressWriter,
  AddressButton,
  AddImage,
  AddImageWrapper,
  Text2,
  InputWrapper3,
  RadioButton,
  SubmitButton,
  SubmitWrapper,
  AddressWrapper,
  Error,
} from "@/styles/board";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id #id를 받아올 것이당
    }
  }
`;

export default function BoardWriteUI() {
  const router = useRouter();
  //입력받은 값
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  //에러메시지
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  //GraphQl Mutation으로 create Board
  const [createBoard] = useMutation(CREATE_BOARD);

  //input창에 적은거 변수로 저장
  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
  };
  //비밀번호
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value !== "") {
      //내용이 뭐라도 적혀있다면
      setPasswordError(""); //에러메시지 없애기
    }
  };
  //제목
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
  };
  //내용
  function onChangeContents(event) {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
  }

  //저장하기 버튼 눌렀을 때 실행할 함수
  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    }
    if (writer && password && title && contents) {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            //객체에서 키와 value가 같으면 생략할 수 있다 shorthand-property
            writer,
            password,
            title,
            contents,
          },
        },
      });
      console.log("게시판 ID: " + result.data.createBoard._id);
      // router.push(`/boards/${result.data.createBoard._id}`);
      alert("게시글이 등록되었습니다.");
    }
  };
  //화면
  return (
    <Page>
      <Wrapper>
        <Title>게시글 등록</Title>
        <SubWrapperRow>
          <InputWrapper>
            <Text>작성자</Text>
            <Writer placeholder="이름을 입력하세요" onChange={onChangeWriter} />
            <Error>{writerError}</Error>
          </InputWrapper>
          <InputWrapper>
            <Text>비밀번호</Text>
            <Writer
              type="password"
              placeholder="비밀번호를 입력하세요"
              onChange={onChangePassword}
            />
            <Error>{passwordError}</Error>
          </InputWrapper>
        </SubWrapperRow>
        <SubWrapperColumn>
          <InputWrapper2>
            <Text>제목</Text>
            <Writer placeholder="제목을 입력하세요" onChange={onChangeTitle} />
            <Error>{titleError}</Error>
          </InputWrapper2>
          <InputWrapper2>
            <Text>내용</Text>
            <Content
              placeholder="내용을 입력하세요"
              onChange={onChangeContents}
            />
            <Error>{contentsError}</Error>
          </InputWrapper2>
        </SubWrapperColumn>

        <SubWrapperRow>
          <InputWrapper2>
            <Text>주소</Text>
            <AddressWriter placeholder="43341"></AddressWriter>
            <AddressButton>주소 검색</AddressButton>
            <AddressWrapper>
              <Writer></Writer>
              <Writer></Writer>
            </AddressWrapper>
          </InputWrapper2>
        </SubWrapperRow>

        <SubWrapperColumn>
          <InputWrapper2>
            <Text>사진첨부</Text>
            <AddImageWrapper>
              <AddImage>
                +<br /> Upload
              </AddImage>
              <AddImage>
                +<br /> Upload
              </AddImage>
              <AddImage>
                +<br /> Upload
              </AddImage>
              <AddImage>
                +<br /> Upload
              </AddImage>
            </AddImageWrapper>
          </InputWrapper2>
        </SubWrapperColumn>

        <SubWrapperColumn>
          <Text>메인설정</Text>
          <InputWrapper3>
            <Text2>유튜브</Text2>
            <RadioButton type="radio" id="youtube" name="radio-button" />
            <Text2>사진</Text2>
            <RadioButton type="radio" id="image" name="radio-button" />
          </InputWrapper3>
        </SubWrapperColumn>

        <SubWrapperRow>
          <SubmitWrapper>
            <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
          </SubmitWrapper>
        </SubWrapperRow>
      </Wrapper>
    </Page>
  );
}
