import { Modal } from "antd";

const success = () => {
   Modal.success({
      content: "게시물이 등록되었습니다.",
   });
};

const error = () => {
   Modal.error({
      title: "This is an error message",
      content: "some messages...some messages...",
   });
};

const App: React.FC = () => (
   <>
      <button onClick={success}>Success</button>
      <button onClick={error}>Error</button>
   </>
);

export default App;
