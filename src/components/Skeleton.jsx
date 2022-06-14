/** @jsxImportSource @emotion/react */
import "twin.macro";
import { SkeletonContainer } from "../parts/container";
import { List } from "../parts/list";

const Skeleton = (props) => {
  const { count, ...rest } = props;
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <SkeletonContainer key={i} {...rest} />
      ))}
    </>
  );
};

export default Skeleton;
