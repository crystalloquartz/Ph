import style from "./index.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../features/apiPeticion";


const Detalle = () => {

    const [producto, setProducto ] = useState();
    const {id} = useParams();
    useEffect( () => {
        getProductsById(setProducto, id)
    }, []
    );
    return(
    <div className = {style.container}>
        <div className = {style.titulo}>
            {producto?.titulo}
        </div>
        <div className = {style.prodimg}>
            <img src={producto?.imagen.URL} alt="" />
        </div>

        <div className = {style.detalles}>
            {producto?.detalle}
        </div>

        <div className = {style.precio}>
            {producto?.precio}
        </div>
        <div className = {style.ventabtn}>
            <button>Agregar</button>
        </div>
    </div>

    )
}


export default Detalle;