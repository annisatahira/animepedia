import styled from "@emotion/styled";

export const StyledInput = styled.input`
  border: 1px solid gray;
  padding: 1rem 1.25rem;
  margin-top: 0.5rem;
  border-radius: 25px;

  &:focus {
    outline: none;
    border: 1px solid teal;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
`;
