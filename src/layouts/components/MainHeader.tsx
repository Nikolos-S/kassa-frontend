import { CustomLink } from "./CustomLink";
import routes from "../../routes";

const MainHeader: React.FC = () => {
  return (
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-3 d-flex align-items-end">
          <CustomLink to={routes.sale()}>Продажа</CustomLink>
        </div>
        <div className="col-3 d-flex align-items-end">
        <CustomLink to={routes.layout()}>Возврат</CustomLink>
        </div>
        <div className="col-3 d-flex align-items-end">
        <CustomLink to={routes.layout()}>Управление ARM</CustomLink>
        </div>
        <div className="col-3 d-flex align-items-end">
        <CustomLink to={routes.layout()}>Отчеты</CustomLink>
        </div>
      </div>
    </div>
  )
};

export { MainHeader };