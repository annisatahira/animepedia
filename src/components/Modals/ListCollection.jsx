/** @jsxImportSource @emotion/react */
import "twin.macro";
import { Button } from "../../parts/button";
import { IoImagesOutline } from "react-icons/io5";
import ModalContainer from "./Container";
import CollectionContext from "../../context/collection";
import { useContext } from "react";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import EmptyPage from "../EmptyPage";

const ListCollection = (props) => {
  const collectionData = useContext(CollectionContext).collectionData;
  const setCollectionData = useContext(CollectionContext).setCollectionData;
  const { open, setOpen, setopenAddToCollection, data } = props;

  const handleSelectedCollection = (e) => {
    const selectedCollectionIndex = collectionData.findIndex(
      (item) => item.id === e.target.value
    );

    const postData = {
      ids: nanoid(16),
      ...data
    };

    collectionData[selectedCollectionIndex].posts.push(postData);
    setCollectionData([...collectionData]);

    setOpen(false);

    return toast.success("Hooray! It Saved to my collection", {
      position: toast.POSITION.TOP_CENTER
    });
  };
  return (
    <>
      <ModalContainer isOpen={open} contentLabel="Collection List">
        <Button
          variant="danger"
          shape="circle"
          tw="absolute right-3 top-3"
          onClick={() => setOpen(false)}
        >
          X
        </Button>
        <h1>Anime Collection</h1>
        <p tw="pb-4">Your list anime collection</p>

        <ul tw="max-h-64 overflow-auto pl-0">
          {collectionData.length !== 0 ? (
            collectionData.map((item) => {
              return (
                <li
                  key={item.id}
                  data-id={item.id}
                  tw="cursor-pointer mr-5 hover:bg-gray-200 hover:rounded-xl"
                >
                  <div tw="flex rounded-lg p-4 justify-between items-center">
                    <div tw="flex items-center py-4 px-2">
                      <IoImagesOutline tw="text-5xl" />
                      <h1 tw="text-lg ml-5">{item.name}</h1>
                    </div>
                    <Button value={item.id} onClick={handleSelectedCollection}>
                      Save
                    </Button>
                  </div>
                </li>
              );
            })
          ) : (
            <EmptyPage
              title="You don't have a collection yet"
              subtitle='Click "add add new collection" to create a new one'
            />
          )}
        </ul>
        <Button tw="mt-6" onClick={() => setopenAddToCollection(true)}>
          + Add New Collection
        </Button>
      </ModalContainer>
    </>
  );
};

export default ListCollection;
