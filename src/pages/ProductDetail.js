import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


const ProductDetail = () => {
    const param = useParams();
    console.log('param >>', param.productId);
    return <section>
        <h3>Prduct Details</h3>
        <p>{param.productId}</p>
        <span><Link to="/products">Back</Link></span>
    </section>
}

export default ProductDetail;