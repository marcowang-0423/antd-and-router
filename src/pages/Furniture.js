import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import furniture from "../json/furniture.json";
import NavBar from "../components/NavBar";
import Menu from "../components/menu";
import { useState } from "react";

const { Header, Content, Footer } = Layout;

function Furniture() {
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
        AppHeader title = "Furniture" / >
        <
        NavBar isOnTouch = { isOnTouch }
        / >< /
        Header > <
        Content className = "layout-content" >
        <
        ProductList products = { furniture }
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

export default Furniture;