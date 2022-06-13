import { jsx, css, Global } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Poppins&family=Fascinate&display=swap");

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
        font-size: 12px;
      }

      #root {
        background: #fff;
        min-height: 100vh;
        overflow: hidden;
      }

      a {
        text-decoration: none;
        width: 100%;
      }

      ul {
        list-style-type: none;
      }

      main {
        display: flex;
        justify-content: center;
      }
    `}
  />
);
