/** @jsxImportSource @emotion/react */
import "twin.macro";
import PropTypes from "prop-types";
import { Button } from "../../parts/button";
import { useContext } from "react";
import CollectionContext from "../../context/collection";
import { toast } from "react-toastify";
import { Card } from "../../parts/card";
import { Image } from "../../parts/image";
import { CenteredItem } from "../../parts/container";
import ModalContainer from "./Container";

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
      <ModalContainer isOpen={open} contentLabel="Remove Data">
        <CenteredItem>
          <Card tw="w-72 h-72">
            <Image
              tw="rounded-lg h-72"
              src={image ? image : "/images/bg-header.jpg"}
            />
          </Card>
          <h1>{title}</h1>
          <h1>Are You Sure? </h1>
          <div>
            <Button
              variant="secondary"
              tw="mr-6"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="danger" onClick={handleRemoveData}>
              Yes, Delete It
            </Button>
          </div>
        </CenteredItem>
      </ModalContainer>
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
