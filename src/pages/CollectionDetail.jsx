import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import CollectionContext from "../context/collection";
import { CenteredItem } from "../parts/container";
import { List } from "../parts/list";

const CollectionDetail = () => {
  const param = useParams();
  const collectionData = useContext(CollectionContext).collectionData;
  const [data, setData] = useState(null);

  useEffect(() => {
    const selectedCollection = collectionData.filter(
      (item) => item.slug === param.slug
    );

    if (selectedCollection) {
      setData(selectedCollection[0]);
    }
  }, [collectionData]);

  return (
    <div>
      <CenteredItem>
        <h1>{data?.name}</h1>
      </CenteredItem>
      <hr />
      <br />
      {data ? (
        <List>
          {data.posts.map((item) => {
            return (
              <Link key={item.id} to={`/anime/${item.id}`}>
                <PostCard image={item.coverImage.large} />
              </Link>
            );
          })}
        </List>
      ) : (
        <h1>Tidak ada data</h1>
      )}
    </div>
  );
};

export default CollectionDetail;
