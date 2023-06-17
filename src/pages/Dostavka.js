import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Checkbox} from "antd";

class Dostavka extends Component {
    render() {
        return (
            <div>
                <div className="zakaz-header">
                    <div className="karkasniytovarov-forward">
                        <div className="container">
                            <Link className="karkasniyhome-a" to={'/'}>Главная</Link>
                            <span className="karkasniyhome-span"><img src="images/kar-right-icon.png" alt=""/></span>
                            <Link className="karkasniyhome-a"  to={'#'}>Доставка</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="zakaz-header-texts">
                                <h1 className="zakaz-header-h1">Доставка и сборка</h1>
                                <p className="zakaz-header-p">
                                    Доставка осуществляется только при наличии <br/> удовлетворительных, для грузового автомобиля г/п 7т, <br/> подъездных путей к месту разгрузки.
                                </p>
                            </div>
                            <Link to={'/kompany'}><button className="dostavka-header-button">
                                Бесплатная консультация <p>у нашего менеджера</p> <button><img src="images/zakaz-header-right.png" alt=""/></button>
                            </button></Link>
                        </div>
                        <div className="col-md-6">
                            <img src="images/dostavka-img1.png" className="zakaz-header-img2" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="dostavka-body">
                    <h1 className="dostavka-body-h1">Стоимость доставки рассчитывается от расстояния <br/> от производства</h1>
                    <h4 className="dostavka-body-h4">РАСЧЕТ ДОСТАВКИ ЗА 1 МОДУЛЬ:</h4>
                    <div className="dostavka-body-box mt-5">
                        <div className="dostavka-body-minibox">
                            <img src="images/dostaka-img-1.png" alt=""/><span>До 50 км от производства 120 руб/км</span>
                        </div>
                        <div className="dostavka-body-minibox">
                            <img src="images/dostaka-img-1.png" alt=""/><span>До 100 км от производства 100 ₽/км</span>
                        </div>
                        <div className="dostavka-body-minibox">
                            <img src="images/dostaka-img-1.png" alt=""/><span>От 100 км от производства 90 ₽/км</span>
                        </div>
                        <div className="dostavka-body-minibox">
                            <img src="images/dostaka-img-2.png" alt=""/><span>Погрузка-выгрузка 2000 ₽ (вездеход +1500 ₽)</span>
                        </div>
                        <div className="dostavka-body-minibox">
                            <img src="images/dostaka-img-3.png" alt=""/><span>Доставка вездеходом возможна при длинне не превышающей 6м</span>
                        </div>
                    </div>
                    <div className="dostavka-section">
                        <h2 className="dostavka-section-h2">ПРИМЕР: 70 км от производства = 70 км х 110₽ + 2000₽ = 9 700₽</h2>
                        <div className="row mt-5">
                            <div className="col-md-6">
                                <div className="dostavka-section-box1">
                                    <img src="images/kamaz.png" width="100%" height="400px" alt=""/>
                                    <h3>ОБЫЧНЫЙ МАНИПУЛЯТОР</h3>
                                    <p>асфальт | плиты | щебеночное покрытие</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="dostavka-section-box">
                                    <img src="images/kamaz2.png" width="100%" height="400px" alt=""/>
                                    <h3>МАНИПУЛЯТОР-ВЕЗДЕХОД</h3>
                                    <p>бездорожье | грязь | снег</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="kankulyator-map">
                            <div className="kankulyator-map-texts">
                                <h3 className="kankulyator-map-h3">Расчет стоимости доставки онлайн</h3>
                                <p className="kankulyator-map-p2">
                                    Теперь любой наш клиент сможет самостоятельно определить стоимость доставки конструкции до своего участка. <br/> Расстояния от нашего производства до любого населенного пункта вы можете посчитать прямо здесь!
                                </p>
                            </div>
                            <div className="container">
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
                    </div>
                </div>
                <div className="dostavka-work">

                    <div className="dostavka-work-input">
                        <h1 className="dostavka-work-input-h3">Необходима сборка на участке? <br/> Свяжитесь с нашим менеджером.</h1>
                        <p className="dostavka-work-input-p">
                            Оставьте заявку и наши менеджеры оперативно с Вами свяжутся и ответят на все <br/> интересующие Вас вопросы!
                        </p>
                        <div className="row">
                            <div className="col-md-3">
                                <input className="dostavka-input1" type="text" placeholder="Ваше имя*"/>
                            </div>
                            <div className="col-md-3">
                                <input className="dostavka-input2" type="text" placeholder="Ваш телефон*"/>
                            </div>
                            <div className="col-md-3">
                                <input className="dostavka-input3" type="text" placeholder="Ваш email"/>
                            </div>
                        </div>
                        <button className="dostavka-work-button">ОТПРАВИТЬ</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dostavka;