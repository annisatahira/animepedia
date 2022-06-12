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
import { goToTopPage } from "../utils/helpers";

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
      const animeListPage = data?.Page?.pageInfo;

      setList(animeListData);
      setPageCount(data?.Page?.pageInfo.lastPage);
    }

    console.log({ data });
  }, [data]);

  const handlePageClick = (event) => {
    setSelectedPage(event.selected + 1);
    goToTopPage();
  };

  return (
    <div
      css={css`
        position: relative;
        width: 100%;
      `}
    >
      <div
        css={css`
          margin-left: auto;
          margin-right: auto;
          padding: 0 4rem;
        `}
      >
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
            pageRangeDisplayed={3}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            onPageChange={handlePageClick}
          />
        </StyledPaginateContainer>
      </div>
    </div>
  );
};

export default Home;
