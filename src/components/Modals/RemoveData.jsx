/** @jsx jsx */
/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import { jsx, css } from "@emotion/react";
import { Button } from "../../parts/button";
import Modal from "react-modal";
import { useContext } from "react";
import CollectionContext from "../../context/collection";
import { toast, ToastContainer } from "react-toastify";
import { Card } from "../../parts/card";
import { Image } from "../../parts/image";
import { CenteredItem } from "../../parts/container";

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
    width: "50%",
    padding: "2rem"
  }
};

const RemoveData = (props) => {
  const { open, setOpen, image, title, data } = props;
  const setCollectionData = useContext(CollectionContext).setCollectionData;

  const handleRemoveData = () => {
    // showing new data except removed data
    setCollectionData(data);
    setOpen(false);

    return toast.success("Data Removed", {
      position: toast.POSITION.TOP_CENTER
    });
  };

  return (
    <>
      <Modal isOpen={open} contentLabel="Remove Data" style={customStyles}>
        <CenteredItem>
          <Card
            css={css`
              width: 250px;
              height: 200px;
            `}
          >
            <Image
              css={css`
                border-radius: 10px;
                height: 200px;
              `}
              src={image ? image : "/images/bg-header.jpg"}
            />
          </Card>
          <h1>{title}</h1>
          <h1>Are You Sure? </h1>
          <div>
            <Button
              variant="secondary"
              css={css`
                margin-right: 20px;
              `}
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="danger" onClick={handleRemoveData}>
              Yes, Delete It
            </Button>
          </div>
        </CenteredItem>
      </Modal>
      <ToastContainer autoClose={8000} />
    </>
  );
};

RemoveData.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  setOpenModalCollection: PropTypes.func
};

RemoveData.defaultProps = {
  open: false,
  setOpen: null,
  data: [],
  setOpenModalCollection: null
};

export default RemoveData;
