import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="contact-header">
                    <div className="karkasniytovarov-forward">
                        <div className="container">
                            <Link className="karkasniyhome-a" to={'/'}>Главная</Link>
                            <span className="karkasniyhome-span"><img src="images/kar-right-icon.png" alt=""/></span>
                            <Link className="karkasniyhome-a"  to={'#'}>Контакты</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="kompany-header-texts">
                                <h1 className="kompany-header-h1">Контакты</h1>
                                <p className="kompany-header-p">
                                    Доставка осуществляется только при наличии <br/> удовлетворительных, для грузового автомобиля г/п 7т, <br/> подъездных путей к месту разгрузки.
                                </p>
                            </div>
                            <button className="kompany-header-button"><img src="images/right-idividual.png" alt=""/></button><span className="kompany-header-span">ЗАДАТЬ ВОПРОС</span>
                            <div className="contactperson">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="contactwithme">
                                            <p>Менеджер Елена</p>
                                            <h5>+7 (900) 000-00-00</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <p>Начальник производства Иван</p>
                                            <h5>+7 (900) 000-00-00</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="map-box2">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="contact-box2">
                                            <h1 className="contact-h1">Контакты</h1>
                                            <h4 className="contact-h4">Адрес:</h4>
                                            <p className="contact-p">
                                                Моск.обл. г.Ступино ул.Промышленная <br/>  (200м от завода "Изомин")
                                            </p>
                                            <p className="contact-p">
                                                Пн-Сб 9:00-18:00, Вс - выходной
                                            </p>
                                            <h4 className="contact-h4">Контакты:</h4>
                                            <h5 className="contact-h5">+7 (495) 142-07-25</h5>
                                            <h5 className="contact-h5">+7 (977) 908-02-50</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="contact-box">
                                            <a href="domstroy-st@bk.ru">domstroy-st@bk.ru</a>
                                            <div className="contact-imgs">
                                                <img src="images/telegram-icon.png" alt=""/>
                                                <img src="images/vk-icon.png" alt=""/>
                                                <img src="images/whatsapp-icon.png" alt=""/>
                                                <img src="images/instagram-icon.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-5">
                    <div className="dostavka-map-bg">
                        <div className="kankulyator-map-input">
                            <input type="text" placeholder="Введите адрес доставки"/><button>НАЙТИ</button>
                        </div>
                    </div>
                    <div className="map-charge">
                        <div className="row">
                            <div className="col-md-6">
                                <h5 className="map-charge-h5">Расстояние: <span className="map-charge-span">723</span><span className="map-charge-span2">km</span></h5>
                            </div>
                            <div className="col-md-6">
                                <h5 className="map-charge-h5">Стоимость: <span className="map-charge-span">10 000</span><span className="map-charge-span2">руб</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;