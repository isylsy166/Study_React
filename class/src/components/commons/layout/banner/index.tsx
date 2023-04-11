import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Wrapper = styled.div`
   height: 200px;
   background-color: pink;
`;

export default function LayoutBanner() {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
   };

   const StyleSlider = styled(Slider)`
      height: 200px;
      background-color: pink;
   `;

   return (
      <>
         <StyleSlider {...settings}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
         </StyleSlider>
      </>
   );
}
