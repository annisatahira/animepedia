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

const Collection = () => {
  const collectionData = useContext(CollectionContext).collectionData;
  const [openModalAddCollection, setOpenModalAddCollection] = useState(false);

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
                <Link key={item.id} to={`/collection/${item.slug}`}>
                  <Card
                    css={css`
                      width: 300px;
                      height: 200px;
                      overflow: hidden;
                      background: #ddd;
                    `}
                  >
                    <Image
                      css={css`
                        height: 150px;
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
                  </Card>
                </Link>
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
    </>
  );
};

export default Collection;
