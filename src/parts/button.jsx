import styled from "@emotion/styled";

export const Button = styled.button`
  background-color: teal;
  color: #fff;
  min-height: 44px;
  padding: 1.2rem 2rem;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  font-size: 14px;
  cursor: pointer;
  ${(props) =>
    props.shape === "circle"
      ? `border-radius: 50%; 
        padding: 10px 18px;`
      : " border-radius: 8px"};
  ${(props) => props.variant === "danger" && "background-color: red;"};
  ${(props) => props.variant === "secondary" && "background-color: gray;"};
`;
