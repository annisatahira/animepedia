import { Routes, Route } from "react-router-dom";
import App from "../App";
import Collection from "../pages/Collection";
import PostDetail from "../pages/PostDetail";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import CollectionDetail from "../pages/CollectionDetail";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="anime">
        <Route path=":id" element={<PostDetail />} />
      </Route>
      <Route path="collection">
        <Route index element={<Collection />} />
        <Route path=":slug" element={<CollectionDetail />} />
      </Route>
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
