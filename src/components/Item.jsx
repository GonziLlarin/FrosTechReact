import { Link } from "react-router-dom";
import Button from "./Button";

function Item(props) {
    const { price, title, text, id } = props;
    return (
        <div className="card">
            <img className="img-helado" src="https://imgs.search.brave.com/ck5vC8afXeG9tKQG86HPUIij2ZkFTJh1vugSRoO-qog/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vdFJzRHh3/Mm1nYUZYUFV5NUpW/TWNYaXdNeXA2c1dx/XzF4UW8wTjNNMnlU/SS9yczpmaXQ6NTYw/OjMyMDoxOjAvZzpj/ZS9hSFIwY0hNNkx5/OXBiV2N1L1puSmxa/WEJwYXk1amIyMHYv/Wm05MGIzTXRjSEps/YldsMS9iUzlvWld4/aFpHOHRZMjl1L2Ix/OHhNREkxTVRVeUxU/TXUvYW5CblAzTmxi/WFE5WVdsei9YMmg1/WW5KcFpB.jpeg" alt="product img" />
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