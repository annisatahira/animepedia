/** @jsxImportSource @emotion/react */
import "twin.macro";
import { useNavigate } from "react-router-dom";
import { Button } from "../parts/button";
import { CenteredItem } from "../parts/container";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <CenteredItem>
      <h1 tw="text-9xl">404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist</p>
      <Button tw="p-6 w-56 mt-5" onClick={() => navigate("/")}>
        Take me back
      </Button>
    </CenteredItem>
  );
};

export default NotFound;
