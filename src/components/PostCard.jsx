/** @jsxImportSource @emotion/react */
import "twin.macro";
import { Image } from "../parts/image";
import { Card } from "../parts/card";
import { AiFillStar } from "react-icons/ai";
import { BackgroundTitle } from "../parts/container";

const PostCard = (props) => {
  const { title, image, score, episodes } = props;
  return (
    <Card tw="w-full h-96">
      <Image tw="rounded-md h-96" src={image} alt={title} />
      <BackgroundTitle>
        <h1 tw="text-xl">{title}</h1>
        <div tw="flex items-center">
          <span tw="text-sm">{episodes} Episodes</span>
          <AiFillStar tw="ml-8 text-xl" />
          <span tw="pl-2 text-sm">{score}</span>
        </div>
      </BackgroundTitle>
    </Card>
  );
};

export default PostCard;
