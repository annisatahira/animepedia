/** @jsx jsx */
/** @jsxRuntime classic */
/** @jsx jsx */
import { Link } from "react-router-dom";
import { jsx, css } from "@emotion/react";
import { Button } from "../parts/button";
import { FaHeart } from "react-icons/fa";
import { Card } from "../parts/card";

const Header = () => {
  return (
    <div
      css={css`
        padding: 0 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <Link to="/">
        <h1
          css={css`
            font-size: 36px;
            color: #000;
          `}
        >
          Animepedia
        </h1>
      </Link>

      <Link to="/collection">
        <Card
          css={css`
            display: flex;
            align-items: center;
            flex-direction: row;
            padding: 1rem 2rem;
            background: #000;
            color: #fff;
          `}
        >
          <FaHeart />
          <span
            css={css`
              margin-left: 18px;
            `}
          >
            My Collection
          </span>
        </Card>
      </Link>
    </div>
  );
};

export default Header;
