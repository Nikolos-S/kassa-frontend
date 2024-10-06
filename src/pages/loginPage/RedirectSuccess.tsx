import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import routes from "../../routes";

const RedirectSuccess: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const myUrl = new URL(window.location.href);
    const accessToken = myUrl.searchParams.get('accessToken');
    console.log(accessToken);

    navigate(routes.layout());
  }, []);
  return (<></>)
};

export { RedirectSuccess };