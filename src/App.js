import { Outlet } from "react-router-dom";
import Modal from "react-modal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { MainLayout } from "./parts/container";

Modal.setAppElement("#root");

function App() {
  return (
    <MainLayout>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </MainLayout>
  );
}

export default App;
