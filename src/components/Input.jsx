/** @jsx jsx */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { StyledInput } from "../parts/form";

const Input = (props) => {
  const { label } = props;
  return (
    <div
      css={css`
        padding: 0 0 2rem 2rem;
        display: flex;
        flex-direction: column;
      `}
    >
      <span>{label}</span>
      <StyledInput {...props} />
    </div>
  );
};

export default Input;
