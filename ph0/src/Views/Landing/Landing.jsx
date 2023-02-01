import { useNavigate } from "react-router-dom";
import style from "./index.module.css";
import logo from "../../Assets/products/logo-mono.png";
import { useState } from "react";
import { useEffect } from "react";

export default function Landing() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const goToHome = () => {
    setTimeout(() => {
    setOpen(true);
    setTimeout(() => navigate("/home"), 1500);
    }, 1300);
  };
  useEffect(goToHome)

  return (
    <div className={`${style.container}`}>
      <img src={logo} alt="smonkey" className={open ? style.open : null} />
    </div>
  );
}
