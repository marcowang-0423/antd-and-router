import { Layout } from 'antd';
import AppHeader from "../components/Header";

import AppFooter from "../components/Footer";
import ProductList from "../components/ProductList";
import products from "../json/products.json";
import { useState } from "react";
import NavBar from "../components/NavBar";
import Menu from "../components/menu";

const { Header, Content, Footer } = Layout;



function Home() {
    const [isOnTouch, setIsOnTouch] = useState(false);
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
        AppHeader title = "NORDIC NEST Shopping Cart" / >
        <
        NavBar isOnTouch = { isOnTouch }
        / > < /
        Header > <
        Content className = "layout-content" >
        <
        ProductList products = { products }
        /> < /
        Content > <
        Footer className = "layout-footer" >
        <
        AppFooter / >
        <
        /Footer>       < /
        Layout >
    );
}

export default Home;