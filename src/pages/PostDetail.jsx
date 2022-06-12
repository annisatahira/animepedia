/** @jsx jsx */
/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from "react";
import { jsx, css } from "@emotion/react";
import { Card, CardHeader } from "../parts/card";
import { Image } from "../parts/image";
import { Button } from "../parts/button";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import PostCard from "../components/PostCard";
import { List } from "../parts/list";
import { goToTopPage } from "../utils/helpers";
import ListCollection from "../components/Modals/ListCollection";
import AddCollection from "../components/Modals/AddCollection";

const ANIME_DETAIL_QUERY = gql`
  query ($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      coverImage {
        large
      }
      bannerImage
      averageScore
      episodes
      title {
        native
        romaji
        english
      }
      description
      characters {
        edges {
          node {
            id
            name {
              full
            }
            image {
              large
            }
          }
        }
      }
      genres
      meanScore
    }
  }
`;

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
    <div>
      <CardHeader>
        <Image
          css={css`
            border-radius: 10px;
            height: 400px;
            opacity: 0.6;
          `}
          src={detail?.bannerImage}
          alt=""
        />
      </CardHeader>
      <div
        css={css`
          display: flex;
        `}
      >
        <div
          css={css`
            margin-top: -6rem;
            margin-left: 4rem;
          `}
        >
          <PostCard
            image={detail?.coverImage.large}
            title={detail?.title.romaji}
            score={detail?.averageScore}
            episodes={detail?.episodes}
          />
        </div>
        <div
          css={css`
            margin-left: 4rem;
            width: 60%;
          `}
        >
          <h1
            css={css`
              font-size: 2.5rem;
            `}
          >
            {detail?.title.romaji}
          </h1>
          <div
            css={css`
              display: flex;
            `}
          >
            <h2
              css={css`
                padding-right: 2rem;
              `}
            >
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
            css={css`
              margin-bottom: 3rem;
              width: 80%;
            `}
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
                <Card
                  key={index}
                  css={css`
                    background: #ddd;
                  `}
                >
                  <Image
                    css={css`
                      border-radius: 10px;
                      height: 200px;
                    `}
                    src={char.node.image.large}
                    alt={char.node.name.full}
                  />
                  <h1
                    css={css`
                      padding: 0 0.5rem;
                      font-size: 12px;
                    `}
                  >
                    {char.node.name.full}
                  </h1>
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

      <AddCollection
        open={openAddToCollection}
        setOpen={setopenAddToCollection}
        data={detail}
        setOpenModalCollection={setOpenModalCollection}
      />
    </div>
  );
};

export default PostDetail;