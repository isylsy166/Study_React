export default function TSutilityPage() {
  interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  }

  // 1. Pick 타입 : 쓰고싶은 것만
  type aaa = Pick<IProfile, "name" | "age">;

  // 2. Omit 타입: 빼고싶은 것
  type bbb = Omit<IProfile, "school">;

  // 3. Partial 타입 : :? 로 만들어줌 있어도 되고 없어도 되고
  type ccc = Partial<IProfile>;

  // 4. Required 타입 : 전부 다 필요한 걸로 바꿔줌 Partial이랑 반대
  type ddd = Required<IProfile>;

  // 5. Record 타입

  interface Ifruit {
    price: number;
  }

  type fruit = "사과" | "배" | "딸기";
  type market = Record<fruit, Ifruit>;

  let eee: market;
}
