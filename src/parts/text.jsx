import styled from "@emotion/styled";
import { breakPointMediaQuery } from "../utils/helpers";

const mq = breakPointMediaQuery();

export const TextFormStatus = styled.p`
  padding-left: 1rem;
  ${(props) => props.variant === "danger" && "color: red;"};
  ${(props) => props.variant === "success" && "color: teal;"};
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  ${mq[1]} {
    font-size: 3.5rem;
  }
`;
