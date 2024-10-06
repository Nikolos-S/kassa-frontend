import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from './routes'
import { LoginPage } from "./pages/loginPage/LoginPage";
import { RedirectSuccess } from "./pages/loginPage/RedirectSuccess";
import { MainLayout } from "./layouts/MainLayout";
import { SalePage } from "./pages/salePage/SalePage";

const App: React.FC = () => {
return (
  <BrowserRouter>
    <Routes>
      <Route path={routes.login()} element={<LoginPage />} />
      <Route path={routes.oauth()} element={<RedirectSuccess />} />
      <Route path={routes.layout()} element={<MainLayout/>}>
        <Route  path={routes.sale()} element={<SalePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
};

export { App };
