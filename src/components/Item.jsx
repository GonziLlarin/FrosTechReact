import { Link } from "react-router-dom";
import Button from "./Button";

function Item(props) {
    const { price, title, text, image, id } = props;
    return (
        <div className="card">
            <img src={image} alt="product img" />
            <div className="card-body">
                <h3 className="card-title  text-red-300">{title}</h3>
                <p className="card-text text-red-200">{text}</p>
                <div>
                    <p className="card-price text-red-400">$ {price}</p>
                </div>
                <Link to={`/item/${id}`}>
                    <Button>Ver Detalle</Button>
                </Link>
            </div>
        </div>
    );
}

export default Item;