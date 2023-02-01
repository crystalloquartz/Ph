import { useEffect } from "react";
import { useState } from "react";
import { getBrandByCategory } from "../../features/apiPeticion";
import style from "./index.module.css";

export default function Filter({ categoria, setBrand }) {
  const [brands, setBrands] = useState();
  const [openBrand, setOpenBrand] = useState(false);
  const [openSubCategory, setOpenSubCategory] = useState(false);
  const [brand, setBrandL] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const changeOpenBrand = () => setOpenBrand(!openBrand)
  useEffect(() => {
    getBrandByCategory(setBrands, categoria.toUpperCase());
  }, [categoria]);

  const handleChangeFilterByBrand = (e) => {
    setOpenBrand(!openBrand)
    setBrand(e.target.id);
    setBrandL(e.target.id);
  };

  return (
    <div className={style.container}>
      <div className={style.dropBox}>
        <input
          onChange={handleChangeFilterByBrand}
          placeholder="Buscar por marca"
          readOnly
          onClick={changeOpenBrand}
          value={brand}
        />
        <div className={style.option } >
        <div id={''} onClick={handleChangeFilterByBrand} className={openBrand?null:style.none}>
              All
            </div>
          {brands?.map((e) => (
            <div key={e.id} id={e.nombre} onClick={handleChangeFilterByBrand} className={openBrand?null:style.none}>
              {e.nombre}
            </div>
          ))}
        </div>
      </div>
      <div className={style.dropBox}>
        <input
          onChange={handleChangeFilterByBrand}
          placeholder="Subcategorias"
          readOnly
          value={subCategory}
        />
        <div className={style.option } >
        <div id={''} className={openSubCategory?null:style.none}>
              All
            </div>
          {null?.map((e) => (
            <div key={e.id} id={e.nombre} onClick={handleChangeFilterByBrand} className={openBrand?null:style.none}>
         
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
}
