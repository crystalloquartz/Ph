import style from './index.module.css';


const Botones = ({text, goto}) =>{
    return(


        <div className={style.buttoncontainer}>
            <button id={text} className={style.buttoncontainer} onClick={goto}>{text}
            </button>
        </div>   
    )
}

export default Botones;