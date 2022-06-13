import styled from "@emotion/styled";
import { breakPointMediaQuery } from "../utils/helpers";

const mq = breakPointMediaQuery();

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  align-items: center;
  justify-content: center;
  justify-items: center;
  @media (max-width: 300px) {
    grid-template-columns: repeat(1, 1fr);
  }
  ${mq[0]} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${mq[1]} {
    grid-template-columns: repeat(4, 1fr);
  }
  ${mq[2]} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const LargeList = styled(List)`
  grid-template-columns: repeat(4, 1fr);
`;
