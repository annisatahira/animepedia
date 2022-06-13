import styled from "@emotion/styled";

export const TextFormStatus = styled.p`
  padding-left: 1rem;
  ${(props) => props.variant === "danger" && "color: red;"};
  ${(props) => props.variant === "success" && "color: teal;"};
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
`;
