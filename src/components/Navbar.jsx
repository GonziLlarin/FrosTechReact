import CartWidget from "./CartWidget";
import logo from "../assets/borde-rojo.jpeg"
import Button from "./Button";
export default function Navbar(props) {






    return (
        <div className="flex flex-row w-full items-center justify-between shadow-md p-5">
            <img src={logo} className="w-14 h-20"></img>
            <Button>Inicio</Button>
            <Button>Productos</Button>
            <Button>Contacto</Button>
            <CartWidget />
        </div >
    )
}

