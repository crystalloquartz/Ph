import style from "./index.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../Assets/LogoVioletaContorno.svg";
import carrito from "../../Assets/Bag.svg";
import menu from "../../Assets/Nav1.svg";
import closemenu from "../../Assets/Nav2.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [clicked, setClicked] = useState(true);
  const cart = useSelector(state => state.cart.cartItems)
  const menuopen = () => {
    setClicked(!clicked);
  };
  const Category = useSelector((state) => state.products.Categorias);

  return (
    <div className={style.container}>
      <div className={style.menu}>
        {clicked ? (
          <img
            src={menu}
            alt="icon nav"
            className={style.menuoff}
            onClick={menuopen}
          />
        ) : (
          <img
            src={closemenu}
            alt="icon nav"
            className={style.menuoff}
            onClick={menuopen}
          />
        )}
        <div
          className={`${style.containerOpciones} ${
            clicked ? style.opcioncerrada : null
          }`}
          onClick={() => setClicked(true)}
        >
          <ul
            className={`${style.opciones} ${
              clicked ? style.opcioncerrada : null
            }`}
          >
            {Category?.map((c) => (
              <li key={c.nombre}>
                <NavLink
                  to={`/productos/${c.nombre.toLowerCase()}`}
                  onClick={menuopen}
                >
                  {c.nombre.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase())}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/sobre-nosotros" onClick={menuopen}>
                Conocenos
              </NavLink>
            </li>
            <li>
              <NavLink to="/productos/all" onClick={menuopen}>
                Todos los Productos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className={style.contenedorlogo}>
        <Link to="/home">
          <img src={logo} alt="logo" className={style.logo} />
        </Link>
      </div>

      <div className={style.contenedorcarrito}>
        {cart.length?<span className={style.span}>{cart.length}</span>:null}
        <Link to="/productos">
          <img src={carrito} alt="carrito" className={style.carrito} />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
