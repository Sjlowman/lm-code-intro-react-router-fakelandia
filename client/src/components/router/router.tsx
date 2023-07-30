import { Routes, Route } from "react-router-dom";
import About from "../about/about";
import Home from "../home/home";
import Confession from "../confession/confession";
import Misdemeanour from "../misdemeanour/misdemeanour";
import NotFound from "../not_found/not_found";
import MainLayout from "../layouts/main_layout";
import Help from "../help/help";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<Help />} />
      <Route path="confession" element={<Confession />} />
      <Route path="misdemeanour" element={<Misdemeanour />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default Router;
