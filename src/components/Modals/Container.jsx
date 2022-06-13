import Modal from "react-modal";

import { useMediaPredicate } from "react-media-hook";

const ModalContainer = (props) => {
  const biggerThan768 = useMediaPredicate("(min-width: 768px)");
  const { children, ...rest } = props;
  return (
    <Modal
      {...rest}
      style={{
        overlay: {
          background: "rgba(0, 0, 0, 0.8)"
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: biggerThan768 ? "50%" : "90%",
          padding: "2rem"
        }
      }}
    >
      {props.children}
    </Modal>
  );
};

export default ModalContainer;
