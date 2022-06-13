import styled from "@emotion/styled";
import { breakPointMediaQuery } from "../utils/helpers";

const data = breakPointMediaQuery();
const mq = [400, ...data];

export const Layout = styled.div`
  padding: 10px;
  ${mq[0]} {
    padding: 15px;
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
