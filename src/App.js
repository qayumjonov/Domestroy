import React, {Component} from 'react';
import Header from "./component/Header";
import {Route, Switch} from "react-router-dom";
import Komplektatsiya from "./pages/Komplektatsiya";
import Zakaz from "./pages/Zakaz"
import Dostavka from "./pages/Dostavka";
import Bizningishimiz from "./pages/Bizningishimiz";
import Contact from "./pages/Contact";
import Forward from "./component/Forward";
import Footer from "./component/Footer";
import KatalogHome from "./pages/KatalogHome";
import KatalogBitovok from "./pages/KatalogBitovok";
import KatalogBesedok from "./pages/KatalogBesedok";
import KatalogBan from "./pages/KatalogBan";
import KatalogProject from "./pages/KatalogProject";
import Registration from "./component/Registration";
import Notfound from "./component/Notfound";
import KarkasniyDoma from "./pages/KarkasniyDoma";
import KartochkaTovarov from "./pages/KartochkaTovarov";
import Individual from "./pages/Individual";
import Kalkulyator from "./pages/Kalkulyator";
import Kompany from "./pages/Kompany";

class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path={"/"} component={Forward}/>
                    <Route exact path={'/Комплектация'} component={Komplektatsiya}/>
                    <Route exact path={'/Заказчику'} component={Zakaz}/>
                    <Route exact path={'/Доставкa'} component={Dostavka}/>
                    <Route exact path={'/Нашиработы'} component={Bizningishimiz}/>
                    <Route exact path={'/Контакты'} component={Contact}/>
                    <Route exact path={'/Каталог-домов'} component={KatalogHome}/>
                    <Route exact path={'/Каталог-бытовок'} component={KatalogBitovok}/>
                    <Route exact path={'/Каталог-беседок'} component={KatalogBesedok}/>
                    <Route exact path={'/Каталог-бань'} component={KatalogBan}/>
                    <Route exact path={'/Каталог-хоз-построек'} component={KatalogProject}/>
                    <Route exact path={'/Рассчитать-стоимость'} component={Registration}/>
                    <Route exact path={'/Каркасные-дома'} component={KarkasniyDoma}/>
                    <Route exact path={'/Индивидуальное-строительство'} component={Individual}/>
                    <Route exact path={'/Каркасно-модульный-дом-Венеция'} component={KartochkaTovarov}/>
                    <Route exact path={'/Калькулятор'} component={Kalkulyator}/>
                    <Route exact path={'/kompany'} component={Kompany}/>
                    <Route component={Notfound}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;