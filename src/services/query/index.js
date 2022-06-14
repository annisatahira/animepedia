import { gql } from "@apollo/client";

export const ANIME_LIST_QUERY = gql`
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

export const ANIME_DETAIL_QUERY = gql`
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
