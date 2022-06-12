/** @jsx jsx */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const Footer = () => {
  return (
    <div
      css={css`
        width: 100%;
        background: #000;
        margin-top: 3rem;
      `}
    >
      <h1
        css={css`
          font-size: 14px;
          text-align: center;
          color: white;
          padding: 2rem;
        `}
      >
        build with Love
      </h1>
    </div>
  );
};

export default Footer;
