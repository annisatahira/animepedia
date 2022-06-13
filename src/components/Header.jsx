/** @jsx jsx */
/** @jsxRuntime classic */
/** @jsx jsx */
import { Link } from "react-router-dom";
import { jsx, css } from "@emotion/react";
import { FaHeart } from "react-icons/fa";
import { Card } from "../parts/card";
import { breakPointMediaQuery } from "../utils/helpers";
import { Image } from "../parts/image";
import { Layout } from "../parts/container";

const Header = () => {
  const mq = breakPointMediaQuery();
  return (
    <Layout
      css={css`
        ${mq[0]} {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0 auto;
        }
      `}
    >
      <div
        css={css`
          width: 250px;
        `}
      >
        <Link to="/">
          <Image
            css={css`
              width: 250px;
              margin-top: 1rem;
            `}
            src="/logo/animepedia.png"
            alt="animepedia"
          />
        </Link>
      </div>

      <div
        css={css`
          width: 250px;
        `}
      >
        <Link to="/collection">
          <Card
            css={css`
              background: rgb(47, 90, 148);
              color: #fff;
              padding: 1.5rem;
              position: fixed;
              bottom: 1rem;
              right: 1rem;
              font-size: 24px;
              z-index: 99;
              border-radius: 50%;
              ${mq[1]} {
                display: flex;
                flex-direction: row;
                align-items: center;
                border-radius: 10px;
                font-size: 1.5rem;
                position: relative;
                width: 200px;
                bottom: unset;
                right: unset;
                float: right;
                z-index: 0;
              }
            `}
          >
            <FaHeart />
            <span
              css={css`
                margin-left: 18px;
                display: none;
                ${mq[1]} {
                  display: block;
                }
              `}
            >
              My Collection
            </span>
          </Card>
        </Link>
      </div>
    </Layout>
  );
};

export default Header;
