/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Card, CardHeader } from "../parts/card";
import { Image } from "../parts/image";
import { Button } from "../parts/button";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import PostCard from "../components/PostCard";
import { List } from "../parts/list";
import { goToTopPage } from "../utils/helpers";
import ListCollection from "../components/Modals/ListCollection";
import UpdateCollection from "../components/Modals/UpdateCollection";
import { Layout } from "../parts/container";
import { Heading } from "../parts/text";
import "twin.macro";
import { ANIME_DETAIL_QUERY } from "../services/query";

const PostDetail = () => {
  const param = useParams();

  const { data, loading, error } = useQuery(ANIME_DETAIL_QUERY, {
    variables: {
      id: param.id
    }
  });
  const [detail, setDetail] = useState(null);
  const [openModalCollection, setOpenModalCollection] = useState(false);
  const [openAddToCollection, setopenAddToCollection] = useState(false);

  useEffect(() => {
    goToTopPage();
  }, []);

  useEffect(() => {
    if (data) {
      setDetail(data?.Media);
    }
  }, [data]);

  return (
    <Layout>
      <CardHeader>
        <Image
          tw="rounded-md h-full opacity-60"
          src={detail?.bannerImage}
          alt=""
        />
      </CardHeader>
      <div tw="flex flex-col lg:flex-row">
        <div tw="-mt-20 mx-28 mb-4 lg:ml-10 lg:mx-10">
          <PostCard
            image={detail?.coverImage.large}
            title={detail?.title.romaji}
            score={detail?.averageScore}
            episodes={detail?.episodes}
          />
        </div>
        <div tw="w-full mr-10 lg:w-3/5">
          <Heading tw="mb-4">{detail?.title.romaji}</Heading>
          <div tw="flex flex-col lg:flex-row justify-between">
            <h2>
              Genre:{" "}
              {detail?.genres.map((genre, index) => {
                return (
                  <span key={index}>
                    {genre}
                    {detail?.genres.length != index + 1 ? ", " : ""}
                  </span>
                );
              })}
            </h2>
            <h2>User Score: {detail?.meanScore}</h2>
          </div>
          <div
            tw="mb-4 w-full"
            dangerouslySetInnerHTML={{
              __html: detail?.description.replaceAll("<br>", "<br/>")
            }}
          ></div>

          <Button onClick={() => setOpenModalCollection(true)}>
            + Add to Collection
          </Button>

          <h1>Character</h1>
          <List>
            {detail?.characters.edges.map((char, index) => {
              return (
                <Card key={index} tw="bg-gray-200 w-full">
                  <Image
                    tw="rounded-md h-72"
                    src={char.node.image.large}
                    alt={char.node.name.full}
                  />
                  <h1 tw="py-0 px-4 text-lg">{char.node.name.full}</h1>
                </Card>
              );
            })}
          </List>
        </div>
      </div>

      <ListCollection
        open={openModalCollection}
        setOpen={setOpenModalCollection}
        data={detail}
        setopenAddToCollection={setopenAddToCollection}
      />

      <UpdateCollection
        open={openAddToCollection}
        setOpen={setopenAddToCollection}
        data={detail}
        setOpenModalCollection={setOpenModalCollection}
      />
    </Layout>
  );
};

export default PostDetail;
