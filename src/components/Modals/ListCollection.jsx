/** @jsx jsx */
/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";
import { Button } from "../../parts/button";
import { IoImagesOutline } from "react-icons/io5";
import Modal from "react-modal";
import CollectionContext from "../../context/collection";
import { useContext } from "react";
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

const ListCollection = (props) => {
  const collectionData = useContext(CollectionContext).collectionData;
  const setCollectionData = useContext(CollectionContext).setCollectionData;
  const { open, setOpen, setopenAddToCollection, data } = props;

  const handleSelectedCollection = (e) => {
    const selectedCollectionIndex = collectionData.findIndex(
      (item) => item.id === e.target.value
    );

    collectionData[selectedCollectionIndex].posts.push(data);
    setCollectionData([...collectionData]);

    setOpen(false);

    return toast.success("Hooray! It Saved, Look at 'My Collection' Now !", {
      position: toast.POSITION.TOP_CENTER
    });
  };
  return (
    <>
      <Modal isOpen={open} contentLabel="Collection List" style={customStyles}>
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
        <h1>Anime Collection</h1>
        <p
          css={css`
            padding-bottom: 1rem;
          `}
        >
          Your list anime collection
        </p>

        <ul
          css={css`
            max-height: 260px;
            overflow: auto;
            padding-left: 0;
          `}
        >
          {collectionData.length !== 0 ? (
            collectionData.map((item) => {
              return (
                <li
                  key={item.id}
                  data-id={item.id}
                  css={css`
                    cursor: pointer;
                    margin-right: 10px;
                    &:hover {
                      background-color: #ddd;
                      border-radius: 10px;
                    }
                  `}
                >
                  <div
                    css={css`
                      display: flex;
                      border-radius: 10px;
                      padding: 10px;
                      justify-content: space-between;
                      align-items: center;
                    `}
                  >
                    <div
                      css={css`
                        display: flex;
                        align-items: center;
                        padding: 1rem 0.5rem;
                      `}
                    >
                      <IoImagesOutline
                        css={css`
                          font-size: 32px;
                        `}
                      />
                      <h1
                        css={css`
                          font-size: 16px;
                          margin-left: 15px;
                        `}
                      >
                        {item.name}
                      </h1>
                    </div>
                    <Button value={item.id} onClick={handleSelectedCollection}>
                      Save
                    </Button>
                  </div>
                </li>
              );
            })
          ) : (
            <div>
              <h1>You are not have any collection yet</h1>
              <p>Click "add add new collection" to create a new one</p>
            </div>
          )}
        </ul>
        <Button
          css={css`
            margin-top: 3rem;
          `}
          onClick={() => setopenAddToCollection(true)}
        >
          + Add New Collection
        </Button>
      </Modal>
      <ToastContainer autoClose={8000} />
    </>
  );
};

export default ListCollection;
