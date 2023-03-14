//백엔드레서 받아온 데이터라고 가정(컴포넌트위에 만든 이유: 리렌더링돼도다시 안만들어짐)
//변하지 않는 상수 이런거는 밖에다가 만든다

const FRUIT = [
  { number: 1, title: " 레드향" },
  { number: 2, title: " 샤인머스캣" },
  { number: 3, title: " 산청딸기" },
  { number: 4, title: " 사과" },
  { number: 5, title: " 애플망고" },
  { number: 6, title: " 딸기" },
  { number: 7, title: " 천해향" },
  { number: 8, title: " 과일선물세트" },
  { number: 9, title: " 귤" },
  { number: 10, title: " 애플망고" },
];

export default function MapFruitsPage() {
  //가장 기본 예제
  const fruit1 = [
    "레드향",
    "샤인머스캣",
    "산청딸기",
    "한라봉",
    "사과",
    "애플망고",
    "딸기",
    "천해향",
    "과일선물세트",
    "귤",
  ].map((el) => <div>{el}</div>);

  //실무 백엔드 데이터 예제
  const fruit2 = [
    { number: 1, title: " 레드향" },
    { number: 2, title: " 샤인머스캣" },
    { number: 3, title: " 산청딸기" },
    { number: 4, title: " 한라봉" },
  ].map((el) => (
    <div>
      {el.number}
      {el.title}
    </div>
  ));

  //실무 백엔드 데이터 예제
  const fruit3 = FRUIT.map((el) => (
    <div>
      {el.number}
      {el.title}
    </div>
  ));

  return (
    <div>
      <div>
        <h2>가장 기본 예제 FRUIT1</h2>
        <div>{fruit1}</div>
      </div>

      <div>
        <h2>실무 백엔드 데이터 예제(FRUIT1과 결과 똑같음)</h2>
        <div>{fruit2}</div>
      </div>

      <div>
        <h2>FRUIT3(FRUIT2와 결과 똑같음)</h2>
        <div>{fruit3}</div>
      </div>
    </div>
  );
}
