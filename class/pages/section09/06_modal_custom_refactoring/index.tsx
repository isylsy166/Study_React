import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function App() {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const onToggleModal = () => {
      setIsModalOpen((prev) => !prev);
   };

   const handleComplete = (address: Address) => {
      console.log(address);
      onToggleModal();

      return (
         <>
            <button onClick={onToggleModal}>Open Modal</button>

            {isModalOpen && (
               <Modal
                  title="모달 제목"
                  open={true}
                  onOk={onToggleModal}
                  onCancel={onToggleModal}
               >
                  <DaumPostcodeEmbed onComplete={handleComplete} />
               </Modal>
            )}
         </>
      );
   };
}
