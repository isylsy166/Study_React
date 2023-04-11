import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import { Content } from "./../../../../../project_board/src/components/units/board/write/BoardWrite.styles";

const HIDDEN_HEADERS = ["/section09/01_library_icon"];

interface ILayoutProps {
   children: JSX.Element;
}

const LayoutChildren = styled.div`
   display: flex;
   flex-direction: row;
   height: 700px;
`;

const SideBar = styled.div`
   width: 300px;
   background-color: lightgray;
   margin-right: 15px;
`;

const ContentDiv = styled.div``;

export default function Layout(props: ILayoutProps) {
   const router = useRouter();
   console.log(router.asPath);

   const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

   return (
      <>
         {!isHiddenHeader && <LayoutHeader />}
         <LayoutBanner />
         <LayoutNavigation />
         <LayoutChildren>
            <SideBar>사이드바</SideBar>
            <ContentDiv>{props.children}</ContentDiv>
         </LayoutChildren>
         <LayoutFooter />
      </>
   );
}
