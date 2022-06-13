import { Outlet } from "react-router-dom";
import Modal from "react-modal";
import Header from "./components/Header";
import Footer from "./components/Footer";

Modal.setAppElement("#root");

function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
