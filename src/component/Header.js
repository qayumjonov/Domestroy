import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    state={
        openz:false
    }
    openmazgi=()=>{
        this.setState({
           openz: !this.state.openz
        })
        console.log(this.state.openz)
    }
    render() {
        return (
            <div>
                <div className="site-header">
                    <div className="header">
                        <div>
                            <div className="row">
                                <div className="col-md-2">
                                    <div className="logo">
                                        <Link to={'/'} className="text-decoration-none text-dark">
                                            <h5>СТРОИТЕЛЬНАЯ КОМПАНИЯ</h5>
                                            <img src="images/logo.png" alt=""/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6 header-all">
                                    <div className="header-text header-all">
                                        <p>Пишите нам: <a href="#">domstroy-st@bk.ru</a></p>
                                        <p>Моск.обл. г.Ступино ул.Промышленная </p>
                                        <p>Пн-Сб 9:00-18:00, Вс - выходной</p>
                                    </div>
                                </div>
                                <div className="col-md-2 header-all">
                                    <div className="header-phones">
                                        <p>+7 (495) 142-07-25</p>
                                        <p>+7 (977) 908-02-50</p>
                                    </div>
                                </div>
                                <div className="col-md-2 header-all">
                                    <div className="header-icons">
                                        <Link to={'/Рассчитать-стоимость'}><button className="header-button">Заказать звонок</button></Link>
                                        <div className="header-icon">
                                            <img src="images/youtube-icon.png" alt=""/>
                                            <img src="images/telegram-icon.png" alt=""/>
                                            <img src="images/vk-icon.png" alt=""/>
                                            <img src="images/whatsapp-icon.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="mazgi-subtract" onClick={this.openmazgi}>
                            {
                            this.state.openz ?   <img src="images/x.png" className="header-subtract btn" alt=""/>  : <img src="images/subtract.png" className="header-subtract btn" alt=""/>
                            }
                        </button>
                        {
                            this.state.openz ?
                                 <div className="row">
                                    <div className="col-md-4">
                                        <ul className="nav menu">
                                            <li className="header-item">
                                                <Link to="/" className="header-link text-decoration-none link-first">Главная</Link>
                                            </li>
                                            <li className="header-item">
                                                <Link to="/Комплектация" className="header-link text-decoration-none">Комплектация</Link>
                                            </li>
                                            <li className="header-item">
                                                <Link to="/Заказчику" className="header-link text-decoration-none">Заказчику</Link>
                                            </li>
                                            <li className="header-item">
                                                <Link to="/Доставкa" className="header-link text-decoration-none">Доставка и сборка</Link>
                                            </li>
                                            <li className="header-item">
                                                <Link to="/Нашиработы" className="header-link text-decoration-none">Наши работы</Link>
                                            </li>

                                            <li className="header-item">
                                                <Link to="/Контакты" className="header-link text-decoration-none">Контакты</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="header-text">
                                            <p>Пишите нам: <a href="#">domstroy-st@bk.ru</a></p>
                                            <p>Моск.обл. г.Ступино ул.Промышленная </p>
                                            <p>Пн-Сб 9:00-18:00, Вс - выходной</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="header-phones">
                                            <p>+7 (495) 142-07-25</p>
                                            <p>+7 (977) 908-02-50</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="header-icons">
                                            <Link to={'/Рассчитать-стоимость'}><button className="header-button">Заказать звонок</button></Link>
                                            <div className="header-icon">
                                                <img src="images/youtube-icon.png" alt=""/>
                                                <img src="images/telegram-icon.png" alt=""/>
                                                <img src="images/vk-icon.png" alt=""/>
                                                <img src="images/whatsapp-icon.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>:""
                        }
                        <div className="navbar">
                            <ul className="menu">
                                <li className="header-item">
                                    <Link to="/" className="header-link link-first text-decoration-none">Главная</Link>
                                </li>
                                <li className="header-item">
                                    <Link to="/Комплектация" className="header-link text-decoration-none">Комплектация</Link>
                                </li>
                                <li className="header-item">
                                    <Link to="/Заказчику" className="header-link text-decoration-none">Заказчику</Link>
                                </li>
                                <li className="header-item">
                                    <Link to="/Доставкa" className="header-link text-decoration-none">Доставка и сборка</Link>
                                </li>
                                <li className="header-item">
                                    <Link to="/Нашиработы" className="header-link text-decoration-none">Наши работы</Link>
                                </li>

                                <li className="header-item">
                                    <Link to="/Контакты" className="header-link text-decoration-none">Контакты</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="header-navbar">
                            <ul className="menu2">
                                <li className="header-item2">
                                    <Link to={'/Каркасно-модульный-дом-Венеция'} className="header-link text-decoration-none">Каталог домов</Link>
                                </li>
                                <li className="header-item2">
                                    <Link to={'/Каталог-бытовок'} className="header-link text-decoration-none">Каталог бытовок</Link>
                                </li>
                                <li className="header-item2">
                                    <Link to={'/Каталог-беседок'} className="header-link text-decoration-none">Каталог беседок</Link>
                                </li>
                                <li className="header-item2">
                                    <Link to={'/Каталог-бань'} className="header-link text-decoration-none">Каталог бань</Link>
                                </li>
                                <li className="header-item2">
                                    <Link to={'/Каталог-хоз-построек'} className="header-link text-decoration-none">Каталог хоз. построек</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
        );
    }
}

export default Header;