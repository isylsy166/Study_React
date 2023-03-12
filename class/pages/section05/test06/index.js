//Graphql mutation

import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

//useMutation에 적을 건데 너무 길어서 변수로 만들어서 저장함
const CREATE_PRODUCT = gql`
  #변수의 타입 적는곳
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    #실제 우리가 전달할 변수 적는곳
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      #graphql은 변수 앞에 $를 쓴다
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationProduct() {
  //Graphql 가져오기
  const [createProduct] = useMutation(CREATE_PRODUCT);

  //버튼 클릭하면 실행 될 함수
  const onClickSubmit = async () => {
    const result = await createProduct({
      //variables가 $역할을 한다.
      variables: {
        seller: "지수",
        createProductInput: {
          //객체임
          name: "마우스",
          detail: "정말 좋은 마우스임",
          price: 3000,
        },
      },
    });
    console.log(result.data);
    alert(result.data.createProduct.message);
  };

  return (
    <div>
      <h1>Graphql Mutation 실습 페이지</h1>

      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </div>
  );
}
