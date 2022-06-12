/** @jsx jsx */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RemoveData from "../components/Modals/RemoveData";
import PostCard from "../components/PostCard";
import CollectionContext from "../context/collection";
import { Button } from "../parts/button";
import { CenteredItem } from "../parts/container";
import { List } from "../parts/list";

const CollectionDetail = () => {
  const param = useParams();
  const collectionData = useContext(CollectionContext).collectionData;

  // state for saving detail data page
  const [detailData, setDetailData] = useState(null);

  // state for saving selected removed data
  const [removedData, setRemovedData] = useState([]);

  // state for saving new data
  const [data, setData] = useState(null);
  const [openModalRemoveCollection, setOpenModalRemoveCollection] =
    useState(false);

  const handleRemoveCollection = (e) => {
    const selectedData = detailData.posts.filter(
      (item) => item.id === parseInt(e.target.value)
    );

    // deep copy so actual state not changes
    let allData = JSON.parse(JSON.stringify(collectionData));

    const removedDataIndex = allData.findIndex(
      (item) => item.slug === param.slug
    );

    const notRemovedPostData = allData[removedDataIndex].posts.filter(
      (item) => item.id !== parseInt(e.target.value)
    );

    allData[removedDataIndex].posts = notRemovedPostData;

    setData(allData);

    setRemovedData(selectedData[0]);
    setOpenModalRemoveCollection(true);
  };

  useEffect(() => {
    const selectedCollection = collectionData.filter(
      (item) => item.slug === param.slug
    );

    if (selectedCollection) {
      setDetailData(selectedCollection[0]);
    }
  }, [collectionData]);

  return (
    <div>
      <CenteredItem>
        <h1>{detailData?.name}</h1>
      </CenteredItem>
      <hr />
      <br />
      {detailData?.posts?.length !== 0 ? (
        <List>
          {detailData?.posts?.map((item) => {
            return (
              <div
                key={item.id}
                css={css`
                  position: relative;
                  width: 250px;
                `}
              >
                <Link to={`/anime/${item.id}`}>
                  <PostCard image={item.coverImage.large} />
                </Link>
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
              </div>
            );
          })}
        </List>
      ) : (
        <h1>Tidak ada data</h1>
      )}
      <RemoveData
        open={openModalRemoveCollection}
        setOpen={setOpenModalRemoveCollection}
        data={data}
        title={removedData?.title?.romaji}
        image={
          removedData?.coverImage?.large ? removedData?.coverImage?.large : ""
        }
      />
    </div>
  );
};

export default CollectionDetail;
