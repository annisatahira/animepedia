import { jsx, css, Global } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Lobster&family=Poppins&display=swap");

      * {
        box-sizing: border-box;
        font-family: "Poppins", cursive;
      }

      html,
      body {
        width: 100%;
        height: 100%;
        min-height: 100%;
        padding: 0;
        margin: 0;
      }

      #root {
        font-size: 14px;
        background: rgb(119, 119, 119);
        background: linear-gradient(
          0deg,
          rgba(119, 119, 119, 1) 1%,
          rgba(255, 255, 255, 1) 66%
        );
        min-height: 100vh;
      }

      a {
        text-decoration: none;
      }

      ul {
        list-style-type: none;
      }
    `}
  />
);
