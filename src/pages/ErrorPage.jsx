/** @jsxImportSource @emotion/react */
import "twin.macro";
import { CenteredItem } from "../parts/container";

const ErrorPage = () => {
  return (
    <CenteredItem>
      <h1 tw="text-9xl">Oops!</h1>
      <h2>Sorry, Something went wrong</h2>
      <p>We're working on it. Please try again later.</p>
    </CenteredItem>
  );
};

export default ErrorPage;
