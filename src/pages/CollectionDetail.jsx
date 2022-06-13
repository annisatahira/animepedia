/** @jsx jsx */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UpdateCollection from "../components/Modals/UpdateCollection";
import RemoveData from "../components/Modals/RemoveData";
import PostCard from "../components/PostCard";
import CollectionContext from "../context/collection";
import { Button } from "../parts/button";
import { CenteredItem, Layout } from "../parts/container";
import { List } from "../parts/list";
import EmptyPage from "../components/EmptyPage";

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

  const [openModalEditCollection, setOpenModalEditCollection] = useState(false);

  const [editedData, setEditedData] = useState({
    name: ""
  });

  const handleRemoveCollection = (e) => {
    const selectedData = detailData.posts.filter(
      (item) => item.ids === e.target.value
    );

    // deep copy so actual state not changes
    let allData = JSON.parse(JSON.stringify(collectionData));

    const removedDataIndex = allData.findIndex(
      (item) => item.slug === param.slug
    );

    const notRemovedPostData = allData[removedDataIndex].posts.filter(
      (item) => item.ids !== e.target.value
    );

    allData[removedDataIndex].posts = notRemovedPostData;

    setData(allData);

    setRemovedData(selectedData[0]);
    setOpenModalRemoveCollection(true);
  };

  useEffect(() => {
    const selectedCollection = dataPage();

    if (selectedCollection) {
      setDetailData(selectedCollection[0]);
    }
  }, [collectionData]);

  const dataPage = () => {
    return collectionData.filter((item) => item.slug === param.slug);
  };

  const handleEditCollection = (e) => {
    const selectedData = dataPage();

    setEditedData({
      ...editedData,
      name: selectedData[0].name
    });
    setOpenModalEditCollection(true);
  };

  return (
    <Layout>
      <CenteredItem>
        <h1>{detailData?.name}</h1>
        <Button onClick={handleEditCollection}>Edit Name Collection</Button>
      </CenteredItem>
      <br />
      <br />
      <hr />
      <br />
      {detailData?.posts?.length !== 0 ? (
        <List>
          {detailData?.posts?.map((item) => {
            return (
              <div
                key={item.ids}
                css={css`
                  position: relative;
                  width: 100%;
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
                  value={item.ids}
                  onClick={handleRemoveCollection}
                >
                  X
                </Button>
              </div>
            );
          })}
        </List>
      ) : (
        <EmptyPage
          title="Opps! Collection is empty!"
          subtitle="Add anime post that you like to this collection"
        />
      )}
      <UpdateCollection
        variant="edit"
        editedData={editedData}
        open={openModalEditCollection}
        setOpen={setOpenModalEditCollection}
      />
      <RemoveData
        open={openModalRemoveCollection}
        setOpen={setOpenModalRemoveCollection}
        data={data}
        title={removedData?.title?.romaji}
        image={
          removedData?.coverImage?.large ? removedData?.coverImage?.large : ""
        }
      />
    </Layout>
  );
};

export default CollectionDetail;
