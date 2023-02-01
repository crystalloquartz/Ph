import style from "./index.module.css";
import main_img from "../../Assets/3dDetailHome.svg";
import disc_img from "../../Assets/DiscountSVG.svg";
import { NavLink } from "react-router-dom";
export function Hero() {
  return (
    <div className={style.container}>
      <div className={style.container2}>
        <img src={main_img} alt="" />
      </div>
      <div className={style.container}>
        <div className={style.disc}>
        <img src={disc_img} alt="" />
        </div>

      </div>
      <div className={style.btncontainer}>
        <button className={style.btn}>
        <NavLink to="/productos/all">
          COMPRÁ
        </NavLink>
          </button>
      </div>
    </div>
  );
}
