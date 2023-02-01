import { useState } from "react";
import { useDispatch } from "react-redux";
import { sortByABC, sortByPrice } from "../../features/productsSlice";
import style from "./index.module.css";

export default function Sort() {
  const dispatch = useDispatch();
  const [openSortABC, setOpenSortABC] = useState(false);
  const [openSortPrice, setOpenSortPrice] = useState(false);
  const [SortABC, setSortABC] = useState("");
  const [SortPrice, setSortPrice] = useState("");

  const changeOpenABC = () => {
    setOpenSortABC(!openSortABC);
    setOpenSortPrice(false);
  };
  const changeOpenPrice = () => {
    setOpenSortPrice(!openSortPrice);
    setOpenSortABC(false);
  };

  const hadleChangeSortByPrice = (e) => {
    setOpenSortPrice(!openSortPrice);
    setSortPrice(e.target.id);
    dispatch(sortByPrice(e.target.id));
  };
  const hadleChangeSortByABC = (e) => {
    setOpenSortABC(!openSortABC);
    setSortABC(e.target.id);
    dispatch(sortByABC(e.target.id));
  };

  return (
    <div className={style.container}>
      <div className={style.dropBox}>
        <input
          onChange={hadleChangeSortByABC}
          placeholder="Ordenar alf."
          readOnly
          onClick={changeOpenABC}
          value={SortABC}
        />
        <div className={style.option}>
          <div
            id={""}
            onClick={hadleChangeSortByABC}
            className={openSortABC ? null : style.none}
          ></div>
          <div
            id={"A-Z"}
            onClick={hadleChangeSortByABC}
            className={openSortABC ? null : style.none}
          >
            A-Z
          </div>
          <div
            id={"Z-A"}
            onClick={hadleChangeSortByABC}
            className={openSortABC ? null : style.none}
          >
            Z-A
          </div>
        </div>
      </div>
      <div className={style.dropBox}>
        <input
          onChange={hadleChangeSortByPrice}
          placeholder="Ordenar por precio"
          readOnly
          onClick={changeOpenPrice}
          value={SortPrice}
        />
        <div className={style.option}>
          <div
            id={""}
            onClick={hadleChangeSortByPrice}
            className={openSortPrice ? null : style.none}
          ></div>
          <div
            id={"max"}
            onClick={hadleChangeSortByPrice}
            className={openSortPrice ? null : style.none}
          >
            MAX
          </div>
          <div
            id={"min"}
            onClick={hadleChangeSortByPrice}
            className={openSortPrice ? null : style.none}
          >
            MIN
          </div>
        </div>
      </div>
    </div>
  );
}
