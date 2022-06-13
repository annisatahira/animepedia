import styled from "@emotion/styled";

export const TextFormStatus = styled.p`
  padding-left: 1rem;
  ${(props) => props.variant === "danger" && "color: red;"};
  ${(props) => props.variant === "success" && "color: teal;"};
`;
