import { Outlet } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";

const MainLayout: React.FC = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default MainLayout;
