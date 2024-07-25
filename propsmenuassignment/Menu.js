import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <div className="Menu">
      {props.menuData.map(function (val) {
        return (
          <div>
            <Link to={val.path}>{val.title}</Link>
          </div>
        );
      })}
    </div>
  );
}
export default Menu;
