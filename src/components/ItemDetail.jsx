import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

function ItemDetail(props) {
    const { price, title, description, text, image, stock } = props;

    function onSubmitCount(count) {
        console.log(`Agregaste ${count} unidades al carrito`);
    }

    return (
        <div className="itemDetail">
            <img className="img-helado" src="https://imgs.search.brave.com/ck5vC8afXeG9tKQG86HPUIij2ZkFTJh1vugSRoO-qog/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vdFJzRHh3/Mm1nYUZYUFV5NUpW/TWNYaXdNeXA2c1dx/XzF4UW8wTjNNMnlU/SS9yczpmaXQ6NTYw/OjMyMDoxOjAvZzpj/ZS9hSFIwY0hNNkx5/OXBiV2N1L1puSmxa/WEJwYXk1amIyMHYv/Wm05MGIzTXRjSEps/YldsMS9iUzlvWld4/aFpHOHRZMjl1L2Ix/OHhNREkxTVRVeUxU/TXUvYW5CblAzTmxi/WFE5WVdsei9YMmg1/WW5KcFpB.jpeg" width="150" height="150" alt="product img" />
            <div>
                <h3 className="text-red-500">{title}</h3>

                <div>
                    <p className="text-red-900 font-semibold italic">$ {price}</p>
                </div>
                <p className="text-red-300">{description}</p>
            </div>
            <div >
                <ItemCount onSubmitCount={onSubmitCount} max={stock} />
            </div>
        </div>
    );
}

export default ItemDetail;