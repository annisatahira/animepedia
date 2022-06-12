/** @jsx jsx */
/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from "react";
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
import AddCollection from "../components/Modals/AddCollection";
import RemoveData from "../components/Modals/RemoveData";

const Collection = () => {
  const collectionData = useContext(CollectionContext).collectionData;
  const [openModalAddCollection, setOpenModalAddCollection] = useState(false);
  const [openModalRemoveCollection, setOpenModalRemoveCollection] =
    useState(false);

  // state for save removed data
  const [removedData, setRemovedData] = useState(null);

  // state for save new data
  const [data, setData] = useState(null);

  const handleRemoveCollection = (e) => {
    const removedData = collectionData.filter(
      (item) => item.id === e.target.value
    );
    const notRemovedData = collectionData.filter(
      (item) => item.id !== e.target.value
    );

    setData(notRemovedData);
    setRemovedData(removedData[0]);
    setOpenModalRemoveCollection(true);
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
        {collectionData.length > 0 ? (
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
      <AddCollection
        open={openModalAddCollection}
        setOpen={setOpenModalAddCollection}
      />
      <RemoveData
        open={openModalRemoveCollection}
        setOpen={setOpenModalRemoveCollection}
        data={data}
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
