import Modal from "react-modal";

const customStyles = {
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
    width: "90%",
    padding: "2rem"
  }
};

const ModalContainer = (props) => {
  const { children, ...rest } = props;
  return (
    <Modal {...rest} style={customStyles}>
      {props.children}
    </Modal>
  );
};

export default ModalContainer;
