import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import routes from './routes'
import { useAuth } from "./context";
import { LoginPage } from "./pages/loginPage/LoginPage";
import { RedirectSuccess } from "./pages/loginPage/RedirectSuccess";
import { MainLayout } from "./layouts/MainLayout";
import { SalePage } from "./pages/salePage/SalePage";

const App: React.FC = () => {

  const PrivateRoute = () => {
    const { loggedData } = useAuth();
    console.log(loggedData)
    return loggedData?.accessToken ? <Outlet /> : <Navigate to={routes.login()} />;
  };
  
  const SetterRoute = () => {
    const { loggedData } = useAuth();
    console.log(loggedData)
    return loggedData?.accessToken ? <Navigate to={routes.layout()} /> : <Outlet />;
  };
return (
  <BrowserRouter>
    <Routes>
      <Route path={routes.login()} element={<SetterRoute />}>
        <Route path={routes.login()} element={<LoginPage />} />
      </Route>
      <Route path={routes.layout()} element={<MainLayout/>}>
        <Route  path={routes.layout()} element={<PrivateRoute />} >
          <Route  path={routes.sale()} element={<SalePage />} />
        </Route>
      </Route>
      <Route path={routes.oauth()} element={<RedirectSuccess />} />
    </Routes>
  </BrowserRouter>
)
};

export { App };
