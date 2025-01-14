import CartWidget from "./CartWidget";
import logo from "../assets/borde-rojo.jpeg"
import { NavLink } from "react-router-dom";

export default function Navbar(props) {


    return (
        <div className="flex flex-row w-full items-center justify-between shadow-md p-5">
            <img src={logo} className="w-14 h-20"></img>
            <NavLink className="text-red-400 font-semibold italic" to="/">Inicio</NavLink>
            <NavLink className="text-red-400 font-semibold italic" to="/category/Clasico">Clásicos</NavLink>
            <NavLink className="text-red-400 font-semibold italic" to="/category/Especial">Especiales</NavLink>
            <NavLink className="text-red-400 font-semibold italic" to="/category/tropical">Tropicales</NavLink>
            <NavLink className="text-red-400 font-semibold italic" to="/category/frutal">Frutales</NavLink>
            <NavLink className="text-red-400 font-semibold italic">Contacto</NavLink>
            <CartWidget />
        </div >
    )
}

