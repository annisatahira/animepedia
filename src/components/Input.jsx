/** @jsx jsx */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { StyledInput } from "../parts/form";

const Input = (props) => {
  const { label, status } = props;
  return (
    <div
      css={css`
        padding: 0rem 2rem 1rem 2rem;
        display: flex;
        flex-direction: column;
      `}
    >
      <span>{label}</span>
      <StyledInput variant={status} autoComplete="off" {...props} />
    </div>
  );
};

export default Input;
