import { convertToSlug } from "./helpers";
import { nanoid } from "nanoid";

export const addPostToCollection = (data) => {
  const { name, posts } = data;

  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const slug = convertToSlug(name);

  const newPost = {
    id,
    name,
    posts,
    slug,
    insertedAt,
    updatedAt
  };

  return newPost;
};

export const AddPostToSelectedCollection = (data, id) => {
  const collection = data.filter((item) => item.id === id);
};

export const addNewCollection = (data) => {
  const { name, posts = [] } = data;

  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const slug = convertToSlug(name);

  let newPost = {
    id,
    name,
    posts,
    slug,
    insertedAt,
    updatedAt
  };

  return newPost;
};
