import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div className="footer2">
                <div className="footer">
                    <div className="logo">
                        <div className="row">
                            <div className="col-md-2">
                                <div className="footer1">
                                    <img src="images/logo.png" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="footer2">
                                    <p>Пишите нам:
                                        <p>domstroy-st@bk.ru</p>
                                        <p>Моск.обл. г.Ступино ул.Промышленная</p>
                                        Пн-Сб 9:00-18:00, Вс - выходной</p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="footer3">
                                    <p>+7 (495) 142-07-25</p>
                                    <p>+7 (495) 142-07-25</p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="footer4">
                                    <p className="footer4-p">Мы в социальных сетях:</p>
                                    <div className="footer-icons">
                                        <img src="images/telegram-icon.png" alt=""/>
                                        <img src="images/vk-icon.png" alt=""/>
                                        <img src="images/whatsapp-icon.png" alt=""/>
                                        <img src="images/instagram-icon.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="footer-border"></div>
                        <div className="foot">
                            <div className="row">
                                <div className="col-md-2">
                                    <h3>ПРОДУКЦИЯ</h3>
                                    <p>Каркасные дома</p>
                                    <p>Модульные дома</p>
                                    <p>Бани “Под ключ”</p>
                                    <p>Беседки</p>
                                    <p>Бытовки (утепленные)</p>
                                    <p>Хоз. постройки <br/>
                                        (без утепления)</p>
                                </div>
                                <div className="col-md-2">
                                    <h3>КОМПЛЕКТАЦИЯ</h3>
                                    <p>Комплектация домов</p>
                                    <p>Комплектация бань</p>
                                    <p>Комплектация беседок</p>
                                    <p>Комплектация бытовок</p>
                                    <p>Комплектация хоз. построек</p>
                                </div>
                                <div className="col-md-3">
                                    <h3>ЗАКАЗЧИКУ</h3>
                                    <p>Индивидуальное строительство</p>
                                    <p>Фиксированные цены</p>
                                    <p>Дистанционное оформление договора</p>
                                    <p>Материнский капитал</p>
                                    <p>Порядок оплаты</p>
                                    <p>Процесс заказа</p>
                                </div>
                                <div className="col-md-2">
                                    <h3>ПОЛЕЗНО</h3>
                                    <p>Доставка и сборка</p>
                                    <p>Контакты</p>
                                    <p>Наши работы</p>
                                </div>
                                <div className="col-md-3">
                                    <Link to={'/Калькулятор'} className="text-decoration-none"><button className="footer-button">ЧЕСТНЫЙ КАЛЬКУЛЯТОР БЕСЕДОК</button></Link>
                                    <button className="footer-button2">СВЯЗАТЬСЯ С НАМИ</button>
                                </div>
                            </div>
                        </div>
                        <div className="footer-border"></div>
                        <div className="footer-finally">
                            <a>Copyright © “ДОМСТРОЙ” 2022. Все права защищены.</a>
                            <div className="mazgi">
                                <a>Политика конфиденциальности</a>
                                <a>Пользовательское соглашение</a>
                                <a>Cookies</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Footer;