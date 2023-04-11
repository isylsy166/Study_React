import Child01 from "../../../src/components/units/section10/02_state-up/Child01";
import Child02 from "../../../src/components/units/section10/02_state-up/Child02";
import { useState } from "react";

export default function LiftingStateUp() {
   const [count, setCount] = useState(0);

   const onClickCountUp = () => {
      setCount(count + 1);
   };
   return (
      <>
         <Child01 count={count} onClickCountUp={onClickCountUp} />
         <div>---------------------------------------</div>
         <Child02 count={count} onClickCountUp={onClickCountUp} />
      </>
   );
}
