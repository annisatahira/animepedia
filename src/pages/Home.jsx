/** @jsxImportSource @emotion/react */
import "twin.macro";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import { useQuery } from "@apollo/client";
import { List } from "../parts/list";
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { StyledPaginateContainer } from "../parts/paginate";
import { goToTopPage } from "../utils/helpers";
import { Card } from "../parts/card";
import { Layout } from "../parts/container";
import { Heading } from "../parts/text";
import { useMediaPredicate } from "react-media-hook";
import { ANIME_LIST_QUERY } from "../services/query";
import Skeleton from "../components/Skeleton";
import ErrorPage from "./ErrorPage";

const Home = () => {
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

  if (error) return <ErrorPage />;

  return (
    <Layout tw="relative w-full">
      <div tw="mx-auto">
        <Card tw="text-white p-1 bg-blue-900 leading-10 px-10 py-14">
          <Heading tw="m-2 text-3xl">Hello, Anime Lover</Heading>
          <p tw="my-4 mx-2 text-xl">
            Discover anime and manga and save your favorite anime to your
            collection
          </p>
        </Card>
        <Heading tw="mt-12 mb-8 text-4xl">Anime</Heading>

        {!loading ? (
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
        ) : (
          <List>
            <Skeleton count={20} tw="h-80" />
          </List>
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
