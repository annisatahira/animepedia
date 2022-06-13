/** @jsx jsx */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import { TbMoodEmpty } from "react-icons/tb";
import { CenteredItem } from "../parts/container";

const EmptyPage = (props) => {
  const { title, subtitle } = props;
  return (
    <CenteredItem
      css={css`
        text-align: center;
        margin-top: 3rem;
      `}
    >
      <TbMoodEmpty
        css={css`
          font-size: 4rem;
        `}
      />
      <h2>{title}</h2>
      <span>{subtitle}</span>
    </CenteredItem>
  );
};

export default EmptyPage;
