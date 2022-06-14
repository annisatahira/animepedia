/** @jsxImportSource @emotion/react */
import "twin.macro";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { Card } from "../parts/card";
import { Image } from "../parts/image";
import { Layout } from "../parts/container";

const Header = () => {
  return (
    <Layout tw="md:flex md:justify-between md:items-center mx-auto">
      <div tw="w-72">
        <Link to="/">
          <Image tw="mt-2" src="/logo/animepedia.png" alt="animepedia" />
        </Link>
      </div>

      <div tw="w-72">
        <Link to="/collection">
          <Card
            tw="bg-blue-900 text-white fixed p-8 bottom-3 right-3 text-2xl z-20 
                rounded-full md:flex md:flex-row md:items-center md:relative md:w-72
                md:rounded-xl md:top-1 md:z-0
                "
          >
            <FaHeart />
            <span tw="ml-6 hidden md:block">My Collection</span>
          </Card>
        </Link>
      </div>
    </Layout>
  );
};

export default Header;
