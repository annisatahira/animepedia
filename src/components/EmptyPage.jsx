/** @jsxImportSource @emotion/react */
import { TbMoodEmpty } from "react-icons/tb";
import { CenteredItem } from "../parts/container";
import "twin.macro";

const EmptyPage = (props) => {
  const { title, subtitle } = props;
  return (
    <CenteredItem tw="text-center mt-12">
      <TbMoodEmpty tw="text-5xl" />
      <h2>{title}</h2>
      <span>{subtitle}</span>
    </CenteredItem>
  );
};

export default EmptyPage;
