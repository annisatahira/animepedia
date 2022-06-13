/** @jsx jsx */
/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { jsx, css } from "@emotion/react";
import { useContext } from "react";
import { IoImageOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CollectionContext from "../context/collection";
import { Button } from "../parts/button";
import { Card } from "../parts/card";
import { CenteredItem } from "../parts/container";
import { Image } from "../parts/image";
import { LargeList } from "../parts/list";
import UpdateCollection from "../components/Modals/UpdateCollection";
import RemoveData from "../components/Modals/RemoveData";

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
    <>
      <CenteredItem>
        <CenteredItem>
          <IoImageOutline
            css={css`
              font-size: 62px;
            `}
          />
          <h1>My Collection</h1>
          <Button
            onClick={() => {
              setOpenModalAddCollection(true);
            }}
          >
            + Create New Collection
          </Button>
        </CenteredItem>
        <br />
        <br />
        {collectionData?.length > 0 ? (
          <LargeList>
            {collectionData?.map((item) => {
              return (
                <div key={item.id}>
                  <Card
                    css={css`
                      width: 300px;
                      height: 200px;
                      background: #ddd;
                      position: relative:
                    `}
                  >
                    <Button
                      variant="danger"
                      shape="circle"
                      css={css`
                        position: absolute;
                        right: -1rem;
                        top: -1rem;
                      `}
                      value={item.id}
                      onClick={handleRemoveCollection}
                    >
                      X
                    </Button>
                    <Button
                      shape="circle"
                      css={css`
                        position: absolute;
                        right: -1rem;
                        top: 2rem;
                      `}
                      value={item.name}
                      onClick={handleEditCollection}
                    >
                      E
                    </Button>
                    <Link key={item.id} to={`/collection/${item.slug}`}>
                      <Image
                        css={css`
                          height: 150px;
                          border-radius: 10px;
                        `}
                        src={
                          item.posts.length > 0
                            ? item.posts[0].coverImage?.large
                            : ""
                        }
                        alt=""
                      />
                      <h1
                        css={css`
                          font-size: 18px;
                          padding-left: 18px;
                          color: #000;
                        `}
                      >
                        {item.name}
                      </h1>
                    </Link>
                  </Card>
                </div>
              );
            })}
          </LargeList>
        ) : (
          <h1>Create new one</h1>
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
    </>
  );
};

export default Collection;
