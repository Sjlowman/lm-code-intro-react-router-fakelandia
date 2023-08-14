import { Routes, Route } from "react-router-dom";
import About from "../about/about";
import Home from "../home/home";
import Confession from "../confession/confession";
//import Misdemeanour from "../misdemeanour/misdemeanour";
import ListMisdemeanours from "../misdemeanour/listMisdemeanour";
/* Check this line - testing the list function with this route
<Route path="misdemeanourAll" element={<DisplayAllMisdemeanours />} /> */
//import DisplayAllMisdemeanours from "../misdemeanour/misdemeanours_display";
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
      <Route path="allmisdemeanours" element={<ListMisdemeanours />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default Router;
