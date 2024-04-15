import NavBar from "../features/navbar/Navbar-admin";
import ProductDetail from "../features/product/components/ProductDetail";
import Footer from "../features/common/Footerfirst";

function ProductDetailPage() {
    return ( 
        <div>
            <NavBar>
                <ProductDetail></ProductDetail>
            </NavBar>
            <Footer/>
        </div>
     );
}

export default ProductDetailPage;