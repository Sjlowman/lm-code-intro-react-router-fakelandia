import { Outlet } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";

const MainLayout: React.FC = () => (
  <>
    <Header />
    <main className="p-6" style={{ flex: "1" }}>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default MainLayout;
