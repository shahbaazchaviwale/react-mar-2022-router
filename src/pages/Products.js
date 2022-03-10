import { Link } from "react-router-dom";

const Products = () => {
    return <div>
        <h3>Products page</h3>
        <ul>
            <li><Link to="/products/1">Page-1</Link></li>
            <li><Link to="/products/2">Page-2</Link></li>
            <li><Link to="/products/3">Page-3</Link></li>
            <li><Link to="/products/4">Page-4</Link></li>
        </ul>
    </div>
}

export default Products;