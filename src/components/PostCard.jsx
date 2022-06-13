/** @jsx jsx */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Image } from "../parts/image";
import { Card } from "../parts/card";
import { AiOutlineStar } from "react-icons/ai";

const PostCard = (props) => {
  const { title, image, score, episodes } = props;
  return (
    <Card
      css={css`
        width: 100%;
        height: 300px;
      `}
    >
      <Image
        css={css`
          border-radius: 10px;
          height: 300px;
        `}
        src={image}
        alt={title}
      />
      <div
        css={css`
          position: absolute;
          padding: 10px;
          bottom: -1px;
          left: 0;
          right: 0;
          background-image: url("/images/bg-title.webp");
          background-position: left bottom;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          color: #fff;
          border-radius: 0 0 10px 10px;
        `}
      >
        <h1
          css={css`
            font-size: 16px;
          `}
        >
          {title}
        </h1>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <span
            css={css`
              font-size: 12px;
              padding-right: 20px;
            `}
          >
            {episodes} Episodes
          </span>
          <AiOutlineStar
            css={css`
              font-size: 16px;
            `}
          />
          <span
            css={css`
              padding-left: 5px;
              font-size: 12px;
            `}
          >
            {score}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
