import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import products from "../json/products.json";
import NavBar from "../components/NavBar";
import Menu from "../components/menu";
import { useState } from "react";

const { Header, Content, Footer } = Layout;

function Product({ match }) {
    const [isOnTouch, setIsOnTouch] = useState(false);
    const product = products.find(
        (x) => x.id === match.params.productId
    );
    return ( <
        Layout className = "container main-layout" >
        <
        Header className = "layout-header" >
        <
        Menu onClick = {
            () => setIsOnTouch(!isOnTouch)

        }
        isOnTouch = { isOnTouch }
        / ><
        AppHeader title = "Product Detail" / >
        <
        NavBar isOnTouch = { isOnTouch }
        / >< /
        Header > <
        Content className = "layout-content" >
        <
        ProductDetail product = { product }
        /> < /
        Content > <
        Footer className = "layout-footer" >
        <
        AppFooter / >
        <
        /Footer> < /
        Layout >
    );
}

export default Product;