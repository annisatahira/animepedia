/** @jsx jsx */
/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import { jsx, css } from "@emotion/react";
import { Button } from "../../parts/button";
import Modal from "react-modal";
import { useContext, useState } from "react";
import { StyledForm } from "../../parts/form";
import PostCard from "../PostCard";
import CollectionContext from "../../context/collection";
import Input from "../Input";
import { addNewCollection } from "../../utils/handler";
import { toast, ToastContainer } from "react-toastify";

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

const AddCollection = (props) => {
  const { open, setOpen, data, setOpenModalCollection } = props;
  const collectionData = useContext(CollectionContext).collectionData;
  const setCollectionData = useContext(CollectionContext).setCollectionData;

  const [formValues, setFormValues] = useState({});
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const newData = {
      name: formValues.name,
      posts: Object.keys(data).length > 0 ? [data] : []
    };

    const formatData = addNewCollection(newData);

    setCollectionData([...collectionData, { ...formatData }]);

    setOpen(false);

    setFormValues({});

    if (setOpenModalCollection) {
      setOpenModalCollection(false);
    }

    return toast.success("Hooray! It Saved", {
      position: toast.POSITION.TOP_CENTER
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  return (
    <>
      <Modal
        isOpen={open}
        contentLabel="Add to Collection"
        style={customStyles}
      >
        <Button
          variant="danger"
          shape="circle"
          css={css`
            position: absolute;
            right: 1.2rem;
            top: 1.2rem;
          `}
          onClick={() => setOpen(false)}
        >
          X
        </Button>
        <h1>Create Collection</h1>
        <p>Save this anime to new collection</p>
        <div
          css={css`
            display: flex;
            width: 100%;
            justify-content: center;
          `}
        >
          {data && Object.keys(data).length !== 0 && (
            <PostCard
              image={data?.coverImage.large}
              title={data?.title.romaji}
              score={data?.averageScore}
              episodes={data?.episodes}
            />
          )}

          <StyledForm onSubmit={handleOnSubmit}>
            <Input
              label="Name"
              aria-label="name"
              name="name"
              type="text"
              placeholder="Like 'Favorite Anime'"
              onChange={handleInputChange}
              value={formValues.name ? formValues.name : ""}
            />
            <div
              css={css`
                display: flex;
                width: 100%;
                justify-content: right;
              `}
            >
              <Button>Save</Button>
            </div>
          </StyledForm>
        </div>
      </Modal>
      <ToastContainer autoClose={8000} />
    </>
  );
};

AddCollection.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  data: PropTypes.object,
  setOpenModalCollection: PropTypes.func
};

AddCollection.defaultProps = {
  open: false,
  setOpen: null,
  data: {},
  setOpenModalCollection: null
};

export default AddCollection;
