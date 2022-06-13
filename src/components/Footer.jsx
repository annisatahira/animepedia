/** @jsx jsx */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const Footer = () => {
  return (
    <footer
      css={css`
        width: 100%;
        background: rgb(14, 38, 70);
        background: linear-gradient(
          169deg,
          rgba(14, 38, 70, 1) 0%,
          rgba(11, 17, 32, 1) 99%
        );
        margin-top: 2rem;
        margin-bottom: 0;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 5rem;
      `}
    >
      <h1
        css={css`
          font-size: 14px;
          text-align: center;
          color: white;
          padding: 1rem;
        `}
      >
        build with &hearts; by Annisa
      </h1>
    </footer>
  );
};

export default Footer;
