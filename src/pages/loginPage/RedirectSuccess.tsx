import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import routes from "../../routes";

const RedirectSuccess: React.FC = () => {
  const navigate = useNavigate();

  const { getAuthData } = useAuth();
  useEffect(() => {
    const myUrl = new URL(window.location.href);
    const accessToken = myUrl.searchParams.get('accessToken');
    if (getAuthData && accessToken) {
      getAuthData(accessToken);
      navigate(routes.layout());
    }
  }, []);
  return (<></>)
};

export { RedirectSuccess };