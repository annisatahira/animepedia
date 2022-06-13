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

export const Container = styled.div`
  margin: 0 4rem;
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
