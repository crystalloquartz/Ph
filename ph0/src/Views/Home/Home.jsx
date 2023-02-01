import { Hero } from "../../Components/Hero/Hero";
import { Ofertas } from "../../Components/Ofertas/Ofertas";
import Recomendados from "../../Components/Recomendados/recomendados.jsx";
import style from "./index.module.css";
import { Marquee } from "../../Components/Marquee/marquee"
const Home = () => {
  return (
    <div className={style.container}>
      <Hero />
      <Marquee />
      <Ofertas />
      <Recomendados />
    </div>
  );
};

//componente loading > onclicck > setstatus (!clicked) onScroll > (!scroll){<link> "/home" </link>}>
// css: .loading{background negro, width 100} loading:hover p{}
export default Home;
