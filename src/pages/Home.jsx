/** @jsx jsx */
/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { Link } from "react-router-dom";
import { jsx, css } from "@emotion/react";
import PostCard from "../components/PostCard";
import { useQuery, gql } from "@apollo/client";
import { List } from "../parts/list";
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { StyledPaginateContainer } from "../parts/paginate";
import { breakPointMediaQuery, goToTopPage } from "../utils/helpers";
import { Card } from "../parts/card";
import { Layout } from "../parts/container";
import { Heading } from "../parts/text";
import { useMediaPredicate } from "react-media-hook";

const ANIME_LIST_QUERY = gql`
  query animeList($ids: [Int], $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(id_in: $ids, type: ANIME) {
        id
        coverImage {
          large
        }
        seasonYear
        averageScore
        episodes
        title {
          native
          romaji
          english
        }
      }
    }
  }
`;

const Home = () => {
  const mq = breakPointMediaQuery();
  const biggerThan500 = useMediaPredicate("(min-width: 500px)");
  const [selectedPage, setSelectedPage] = useState(1);
  const { data, loading, error } = useQuery(ANIME_LIST_QUERY, {
    variables: {
      page: selectedPage,
      perPage: 20
    }
  });
  const [pageCount, setPageCount] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (data) {
      const animeListData = data?.Page?.media;

      setList(animeListData);
      setPageCount(data?.Page?.pageInfo.lastPage);
    }
  }, [data]);

  const handlePageClick = (event) => {
    setSelectedPage(event.selected + 1);
    goToTopPage();
  };

  return (
    <Layout
      css={css`
        position: relative;
        width: 100%;
      `}
    >
      <div
        css={css`
          margin-left: auto;
          margin-right: auto;
        `}
      >
        <Card
          css={css`
            color: #fff;
            padding: 1rem;
            background: rgb(47, 90, 148);
            background: linear-gradient(
              135deg,
              rgba(47, 90, 148, 1) 0%,
              rgba(11, 17, 32, 1) 99%
            );
            margin-bottom: 1rem;
            line-height: 1.5rem;
            ${mq[1]} {
              padding: 2rem 3rem;
              line-height: 2rem;
              font-size: 1.25rem;
            }
            ${mq[2]} {
              padding: 3rem 4rem;
            }
          `}
        >
          <Heading
            css={css`
              margin: 0;
              padding-top: 1rem;
              ${mq[1]} {
                font-size: 2.5rem;
              }
            `}
          >
            Hello, Anime Lover
          </Heading>
          <p>
            Discover anime and manga and save your favorite anime to your
            collection
          </p>
        </Card>
        {!loading && (
          <>
            <List>
              {list?.map((anime) => (
                <Link key={anime.id} to={`/anime/${anime.id}`}>
                  <PostCard
                    title={anime.title.romaji}
                    image={anime.coverImage.large}
                    score={anime.averageScore}
                    episodes={anime.episodes}
                  />
                </Link>
              ))}
            </List>
          </>
        )}
        <StyledPaginateContainer>
          <ReactPaginate
            previousLabel="Prev"
            breakLabel="..."
            nextLabel="Next"
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            onPageChange={handlePageClick}
            pageRangeDisplayed={biggerThan500 ? 4 : 1}
            marginPagesDisplayed={biggerThan500 ? 1 : 0}
          />
        </StyledPaginateContainer>
      </div>
    </Layout>
  );
};

export default Home;
