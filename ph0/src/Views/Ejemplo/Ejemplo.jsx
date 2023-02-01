import { Pagination, Autoplay } from "swiper";
import "./Oferts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import picador1 from "../../Assets/products/picadores-plastico.png";
import picador2 from "../../Assets/products/picador-smonkey.png";
import { Card } from "../../Components/Card/Card";
import "swiper/css";


const products = [
  {
    img: picador1,
    title: "pica",
    price: "700",
    texto: "loremsa<dasdasd asd awsd asdsa das",
  },
  {
    img: picador2,
    title: "pica",
    price: "700",
    marca: "pebete",
    texto: "loremsa<dasdasd asd awsd asdsa das",
  },
  {
    img: picador2,
    title: "pica",
    price: "700",
    marca: "pebete",
    texto: "loremsa<dasdasd asd awsd asdsa das",
  },
  {
    img: picador2,
    title: "pica",
    price: "700",
    marca: "pebete",
    texto: "loremsa<dasdasd asd awsd asdsa das",
  },
  {
    img: picador2,
    title: "pica",
    price: "700",
    marca: "pebete",
    texto: "loremsa<dasdasd asd awsd asdsa das",
  },
  {
    img: picador2,
    title: "pica",
    price: "700",
    marca: "pebete",
    texto: "loremsa<dasdasd asd awsd asdsa das",
  },
  {
    img: picador2,
    title: "pica",
    price: "700",
    marca: "pebete",
    texto: "loremsa<dasdasd asd awsd asdsa das",
  },
  {
    img: picador2,
    title: "pica",
    price: "700",
    marca: "pebete",
    texto: "loremsa<dasdasd asd awsd asdsa das",
  },
];


function Ejemplo() {

  return (
      <div className="container">
        <div className="swiperContainer">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            pagination={{
              el: ".pagination",
              clickable: true,
            }}
            slidesPerView={2}
            breakpoints={{
              "@0.00": {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              "@0.50": {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              "@1.25": {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              "@1.50": {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              "@1.75": {
                slidesPerView: 2,
                spaceBetween: 25,
              },
            }}
          >
            {products?.map((p) => (
              <SwiperSlide key={p.title}>
                <Card producto={p} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="pagination" />
      </div>
  );
}

export default Ejemplo;