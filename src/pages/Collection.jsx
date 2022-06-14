/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useContext } from "react";
import { IoImageOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CollectionContext from "../context/collection";
import { Button } from "../parts/button";
import { Card } from "../parts/card";
import { CenteredItem, Layout } from "../parts/container";
import { Image } from "../parts/image";
import { LargeList } from "../parts/list";
import UpdateCollection from "../components/Modals/UpdateCollection";
import RemoveData from "../components/Modals/RemoveData";
import { FiEdit2 } from "react-icons/fi";
import EmptyPage from "../components/EmptyPage";
import "twin.macro";

const Collection = () => {
  const collectionData = useContext(CollectionContext).collectionData;
  const [openModalAddCollection, setOpenModalAddCollection] = useState(false);
  const [openModalRemoveCollection, setOpenModalRemoveCollection] =
    useState(false);
  const [openModalEditCollection, setOpenModalEditCollection] = useState(false);

  // state for save removed data
  const [removedData, setRemovedData] = useState(null);

  // state for save new data
  const [data, setData] = useState(null);

  const [editedData, setEditedData] = useState({
    name: ""
  });

  const handleRemoveCollection = (e) => {
    const removedData = collectionData?.filter(
      (item) => item.id === e.target.value
    );

    const notRemovedData = collectionData?.filter(
      (item) => item.id !== e.target.value
    );

    setRemovedData(removedData[0]);
    setData(notRemovedData);
    setOpenModalRemoveCollection(true);
  };

  const handleEditCollection = (e) => {
    setEditedData({
      ...editedData,
      name: e.target.value
    });
    setOpenModalEditCollection(true);
  };

  return (
    <Layout>
      <CenteredItem>
        <CenteredItem tw="mb-12">
          <IoImageOutline tw="text-7xl" />
          <h1>My Collection</h1>
          <Button
            onClick={() => {
              setOpenModalAddCollection(true);
            }}
          >
            + Create New Collection
          </Button>
        </CenteredItem>
        {collectionData?.length > 0 ? (
          <LargeList>
            {collectionData?.map((item) => {
              return (
                <Card
                  key={item.id}
                  tw="w-full h-72 relative bg-gray-200 md:w-56 lg:w-80"
                >
                  <Button
                    variant="danger"
                    shape="circle"
                    tw="absolute -right-5 -top-5"
                    value={item.id}
                    onClick={handleRemoveCollection}
                  >
                    X
                  </Button>
                  <Button
                    shape="circle"
                    tw="absolute -right-5 top-12"
                    value={item.name}
                    onClick={handleEditCollection}
                  >
                    <FiEdit2 tw="text-sm" />
                  </Button>

                  <Link key={item.id} to={`/collection/${item.slug}`}>
                    <Image
                      tw="h-52 rounded-md"
                      src={
                        item.posts.length > 0
                          ? item.posts[0].coverImage?.large
                          : "/images/empty-collection.png"
                      }
                      alt={item.name}
                    />
                    <h1 tw="text-2xl pl-8 text-black">{item.name}</h1>
                  </Link>
                </Card>
              );
            })}
          </LargeList>
        ) : (
          <EmptyPage
            title="You don't have a collection yet"
            subtitle='Click "add add new collection" to create a new one'
          />
        )}
      </CenteredItem>
      <UpdateCollection
        open={openModalAddCollection}
        setOpen={setOpenModalAddCollection}
      />
      <UpdateCollection
        variant="edit"
        editedData={editedData}
        open={openModalEditCollection}
        setOpen={setOpenModalEditCollection}
      />
      <RemoveData
        open={openModalRemoveCollection}
        setOpen={setOpenModalRemoveCollection}
        data={data ? data : {}}
        image={
          removedData?.posts?.length > 0
            ? removedData?.posts[0].coverImage?.large
            : ""
        }
        title={removedData ? `${removedData?.name} Collection` : {}}
      />
    </Layout>
  );
};

export default Collection;
