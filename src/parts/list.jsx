import styled from "@emotion/styled";

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2.5rem;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;

export const LargeList = styled(List)`
  grid-template-columns: repeat(4, 1fr);
`;
