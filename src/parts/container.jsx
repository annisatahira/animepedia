import styled from "@emotion/styled";
import { breakPointMediaQuery } from "../utils/helpers";

const data = breakPointMediaQuery();
const mq = [400, ...data];

export const Layout = styled.div`
  padding: 0.7rem;
  ${mq[0]} {
    padding: 1rem;
  }
  ${mq[2]} {
    max-width: 1366px;
  }
`;

export const CenteredItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const MainLayout = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const BackgroundTitle = styled.div`
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
`;
