/** @jsxImportSource @emotion/react */
import "twin.macro";
import { StyledInput } from "../parts/form";

const Input = (props) => {
  const { label, status } = props;
  return (
    <div tw="pt-0 px-6 pb-4 flex flex-col">
      <span>{label}</span>
      <StyledInput variant={status} autoComplete="off" {...props} />
    </div>
  );
};

export default Input;
