import styled from "@emotion/styled";

export const Page = styled.div`
  width: 100vw;
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  border: 1px solid black;
  width: 600px;
  height: 600px;
  background-color: #e0e5ec;
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

//버튼 1
export const Button1 = styled.button`
  margin: 20px;
  //custom_button
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;

  //button_color
  background: rgb(247, 150, 192);
  background: radial-gradient(
    circle,
    rgba(247, 150, 192, 1) 0%,
    rgba(118, 174, 241, 1) 100%
  );
  line-height: 42px;
  padding: 0;
  border: none;

  //before,after
  :before,
  after {
    position: absolute;
    content: "";
    height: 0%;
    width: 1px;
    box-shadow: -1px -1px 20px 0px rgba(255, 255, 255, 1),
      -4px -4px 5px 0px rgba(255, 255, 255, 1),
      7px 7px 20px 0px rgba(0, 0, 0, 0.4), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  }

  :before {
    right: 0;
    top: 0;
    transition: all 500ms ease;
  }

  :after {
    left: 0;
    bottom: 0;
    transition: all 500ms ease;
  }
  //hover
  :hover {
    background: transparent;
    color: #76aef1;
    box-shadow: none;
  }

  :hover:before {
    transition: all 500ms ease;
    height: 100%;
  }
  :hover:after {
    transition: all 500ms ease;
    height: 100%;
  }
`;
export const Text1 = styled.span`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;

  :before,
  after {
    position: absolute;
    content: "";
    box-shadow: -1px -1px 20px 0px rgba(255, 255, 255, 1),
      -4px -4px 5px 0px rgba(255, 255, 255, 1),
      7px 7px 20px 0px rgba(0, 0, 0, 0.4), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  }
  :before {
    left: 0;
    top: 0;
    width: 0%;
    height: 0.5px;
    transition: all 500ms ease;
  }
  :after {
    right: 0;
    bottom: 0;
    width: 0%;
    height: 0.5px;
    transition: all 500ms ease;
  }
  :hover:before {
    width: 100%;
  }
  :hover:after {
    width: 100%;
  }
`;

//버튼 2
export const Button2 = styled.button`
  margin: 20px;
  //custom_button
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;

  position: relative;
  right: 20px;
  bottom: 20px;
  border: none;
  box-shadow: none;
  width: 130px;
  height: 40px;
  line-height: 42px;
  -webkit-perspective: 230px;
  perspective: 230px;
`;
