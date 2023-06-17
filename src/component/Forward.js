import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import Registration from "./Registration";
class Forward extends Component {

    render() {
        return (
            <div className="forward">
                <div className="forward2">
                    <div className="texts">
                        <h1>СТРОИТЕЛЬСТВО ДАЧНЫХ ДОМОВ <br/> И КОТТЕДЖЕЙ</h1>
                        <p>
                            <div>На участок поставляются готовые модули,</div>
                            <div>производится их монтаж в короткие сроки.</div>
                            <div>Мы гарантируем выполнение всех взятых на себя </div>
                            <div>обязательств и доступные цены.</div>
                        </p>
                        <Link to={'/Рассчитать-стоимость'}>
                            <button className="forward-button">
                                <img src="images/right-icon.png" alt=""/>
                            </button>
                        </Link>

                        <span>РАССЧИТАТЬ СТОИМОСТЬ</span>
                    </div>
                </div>
                <div className="tabs">
                    <h1 className="tabs-h1">Предложения для вас</h1>

                    <div className="tab-button">
                        <ul className="tab-menu tab-none carousel-indicators">
                            <li className="tab-item2">
                                <Link to="/Каркасные-дома" className="tab-button1">Каркасные дома</Link>
                            </li>
                            <li className="tab-item">
                                <a data-target="#demo" data-slide-to="1" href="#" className="tab-button1" data-toggle="tab">Бани</a>
                            </li>
                            <li className="tab-item">
                                <a data-target="#demo" data-slide-to="2" href="#" className="tab-button1" data-toggle="tab">Беседки</a>
                            </li>
                            <li className="tab-item">
                                <a data-target="#demo" data-slide-to="3" href="#" className="tab-button1" data-toggle="tab">Бытовки</a>
                            </li>
                            <li className="tab-item">
                                <a data-target="#demo" data-slide-to="4" href="#" className="tab-button1" data-toggle="tab"> Хоз. постройки</a>
                            </li>
                        </ul>
                        <ul className="tab-menu tab-media carousel-indicators">
                            <li className="tab-item2">
                                <Link to="/Каркасные-дома" className="tab-button1">Каркасные дома</Link>
                            </li>
                            <li className="tab-item">
                                <a data-target="#demo3" data-slide-to="1" href="#" className="tab-button1" data-toggle="tab">Бани</a>
                            </li>
                            <li className="tab-item">
                                <a data-target="#demo3" data-slide-to="2" href="#" className="tab-button1" data-toggle="tab">Беседки</a>
                            </li>
                            <li className="tab-item">
                                <a data-target="#demo3" data-slide-to="3" href="#" className="tab-button1" data-toggle="tab">Бытовки</a>
                            </li>
                            <li className="tab-item">
                                <a data-target="#demo3" data-slide-to="4" href="#" className="tab-button1" data-toggle="tab"> Хоз. постройки</a>
                            </li>
                        </ul>
                    </div>
                    <div className="carouselslide">
                        <div id="demo" className="carousel slide carouse-fade none-car" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="tab-pane active" id="karkas">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="tap-card">
                                                        <div className="tabs-img"><img src="images/tabs-img1.png" alt=""/></div>
                                                        <div className="tabs-text">
                                                            <h3>Каркасный дом с балконом LK-2</h3>
                                                            <p>Размер:</p><span>4х6 м</span>
                                                            <p>Площадь:</p><span>34.8 м2</span>
                                                            <p>Количество комнат:</p><span>3 шт</span>
                                                            <h4>940 000 ₽</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="tap-card">
                                                        <div className="tabs-img"><img src="images/tabs-img2.png" alt=""/></div>
                                                        <div className="tabs-text">
                                                            <h3>Каркасный дом с балконом LK-2</h3>
                                                            <p>Размер:</p><span>4х6 м</span>
                                                            <p>Площадь:</p><span>34.8 м2</span>
                                                            <p>Количество комнат:</p><span>3 шт</span>
                                                            <h4>940 000 ₽</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="tap-card">
                                                        <div className="tabs-img"><img src="images/tabs-img3.png" alt=""/></div>
                                                        <div className="tabs-text">
                                                            <h3>Каркасный дом с балконом LK-2</h3>
                                                            <p>Размер:</p><span>4х6 м</span>
                                                            <p>Площадь:</p><span>34.8 м2</span>
                                                            <p>Количество комнат:</p><span>3 шт</span>
                                                            <h4>940 000 ₽</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="tap-card">
                                                        <div className="tabs-img"><img src="images/tabs-img4.png" alt=""/></div>
                                                        <div className="tabs-text">
                                                            <h3>Каркасный дом с балконом LK-2</h3>
                                                            <p>Размер:</p><span>4х6 м</span>
                                                            <p>Площадь:</p><span>34.8 м2</span>
                                                            <p>Количество комнат:</p><span>3 шт</span>
                                                            <h4>940 000 ₽</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="tab-pane active" id="karkas">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="tap-card">
                                                        <div className="tabs-img"><img src="images/tabs-img4.png" alt=""/></div>
                                                        <div className="tabs-text">
                                                            <h3>Каркасный дом с балконом LK-2</h3>
                                                            <p>Размер:</p><span>4х6 м</span>
                                                            <p>Площадь:</p><span>34.8 м2</span>
                                                            <p>Количество комнат:</p><span>3 шт</span>
                                                            <h4>940 000 ₽</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="tap-card">
                                                        <div className="tabs-img"><img src="images/tabs-img4.png" alt=""/></div>
                                                        <div className="tabs-text">
                                                            <h3>Каркасный дом с балконом LK-2</h3>
                                                            <p>Размер:</p><span>4х6 м</span>
                                                            <p>Площадь:</p><span>34.8 м2</span>
                                                            <p>Количество комнат:</p><span>3 шт</span>
                                                            <h4>940 000 ₽</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="tap-card">
                                                        <div className="tabs-img"><img src="images/tabs-img2.png" alt=""/></div>
                                                        <div className="tabs-text">
                                                            <h3>Каркасный дом с балконом LK-2</h3>
                                                            <p>Размер:</p><span>4х6 м</span>
                                                            <p>Площадь:</p><span>34.8 м2</span>
                                                            <p>Количество комнат:</p><span>3 шт</span>
                                                            <h4>940 000 ₽</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="tap-card">
                                                        <div className="tabs-img"><img src="images/tabs-img1.png" alt=""/></div>
                                                        <div className="tabs-text">
                                                            <h3>Каркасный дом с балконом LK-2</h3>
                                                            <p>Размер:</p><span>4х6 м</span>
                                                            <p>Площадь:</p><span>34.8 м2</span>
                                                            <p>Количество комнат:</p><span>3 шт</span>
                                                            <h4>940 000 ₽</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="tab-pane" id="besedki">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="tap-card">
                                                        <div className="tabs-img"><img src="images/tabs-img3.png" alt=""/></div>
                                                        <div className="tabs-text">
                                                            <h3>Каркасный дом с балконом LK-2</h3>
                                                            <p>Размер:</p><span>4х6 м</span>
                                                            <p>Площадь:</p><span>34.8 м2</span>
                                                            <p>Количество комнат:</p><span>3 шт</span>
                                                            <h4>940 000 ₽</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="tap-card">
                                                        <div className="tabs-img"><img src="images/tabs-img1.png" alt=""/></div>
                                                        <div className="tabs-text">
                                                            <h3>Каркасный дом с балконом LK-2</h3>
                                                            <p>Размер:</p><span>4х6 м</span>
                                                            <p>Площадь:</p><span>34.8 м2</span>
                                                            <p>Количество комнат:</p><span>3 шт</span>
                                                            <h4>940 000 ₽</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="tap-card">
                                                        <div className="tabs-img"><img src="images/tabs-img4.png" alt=""/></div>
                                                        <div className="tabs-text">
                                                            <h3>Каркасный дом с балконом LK-2</h3>
                                                            <p>Размер:</p><span>4х6 м</span>
                                                            <p>Площадь:</p><span>34.8 м2</span>
                                                            <p>Количество комнат:</p><span>3 шт</span>
                                                            <h4>940 000 ₽</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="tap-card">
                                                        <div className="tabs-img"><img src="images/tabs-img2.png" alt=""/></div>
                                                        <div className="tabs-text">
                                                            <h3>Каркасный дом с балконом LK-2</h3>
                                                            <p>Размер:</p><span>4х6 м</span>
                                                            <p>Площадь:</p><span>34.8 м2</span>
                                                            <p>Количество комнат:</p><span>3 шт</span>
                                                            <h4>940 000 ₽</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="tab-pane" id="bitovki">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="tap-card">
                                                        <div className="tabs-img"><img src="images/tabs-img1.png" alt=""/></div>
                                                        <div className="tabs-text">
                                                            <h3>Каркасный дом с балконом LK-2</h3>
                                                            <p>Размер:</p><span>4х6 м</span>
                                                            <p>Площадь:</p><span>34.8 м2</span>
                                                            <p>Количество комнат:</p><span>3 шт</span>
                                                            <h4>940 000 ₽</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="tap-card">
                                                        <div className="tabs-img"><img src="images/tabs-img4.png" alt=""/></div>
                                                        <div className="tabs-text">
                                                            <h3>Каркасный дом с балконом LK-2</h3>
                                                            <p>Размер:</p><span>4х6 м</span>
                                                            <p>Площадь:</p><span>34.8 м2</span>
                                                            <p>Количество комнат:</p><span>3 шт</span>
                                                            <h4>940 000 ₽</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="tap-card">
                                                        <div className="tabs-img"><img src="images/tabs-img3.png" alt=""/></div>
                                                        <div className="tabs-text">
                                                            <h3>Каркасный дом с балконом LK-2</h3>
                                                            <p>Размер:</p><span>4х6 м</span>
                                                            <p>Площадь:</p><span>34.8 м2</span>
                                                            <p>Количество комнат:</p><span>3 шт</span>
                                                            <h4>940 000 ₽</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="tap-card">
                                                        <div className="tabs-img"><img src="images/tabs-img2.png" alt=""/></div>
                                                        <div className="tabs-text">
                                                            <h3>Каркасный дом с балконом LK-2</h3>
                                                            <p>Размер:</p><span>4х6 м</span>
                                                            <p>Площадь:</p><span>34.8 м2</span>
                                                            <p>Количество комнат:</p><span>3 шт</span>
                                                            <h4>940 000 ₽</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="tab-pane" id="settings">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="tap-card">
                                                        <div className="tabs-img"><img src="images/tabs-img1.png" alt=""/></div>
                                                        <div className="tabs-text">
                                                            <h3>Каркасный дом с балконом LK-2</h3>
                                                            <p>Размер:</p><span>4х6 м</span>
                                                            <p>Площадь:</p><span>34.8 м2</span>
                                                            <p>Количество комнат:</p><span>3 шт</span>
                                                            <h4>940 000 ₽</h4>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="col-md-3">
                                                    <div className="tap-card">
                                                        <div className="tabs-img"><img src="images/tabs-img4.png" alt=""/></div>
                                                        <div className="tabs-text">
                                                            <h3>Каркасный дом с балконом LK-2</h3>
                                                            <p>Размер:</p><span>4х6 м</span>
                                                            <p>Площадь:</p><span>34.8 м2</span>
                                                            <p>Количество комнат:</p><span>3 шт</span>
                                                            <h4>940 000 ₽</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="tap-card">
                                                        <div className="tabs-img"><img src="images/tabs-img3.png" alt=""/></div>
                                                        <div className="tabs-text">
                                                            <h3>Каркасный дом с балконом LK-2</h3>
                                                            <p>Размер:</p><span>4х6 м</span>
                                                            <p>Площадь:</p><span>34.8 м2</span>
                                                            <p>Количество комнат:</p><span>3 шт</span>
                                                            <h4>940 000 ₽</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="tap-card">
                                                        <div className="tabs-img"><img src="images/tabs-img2.png" alt=""/></div>
                                                        <div className="tabs-text">
                                                            <h3>Каркасный дом с балконом LK-2</h3>
                                                            <p>Размер:</p><span>4х6 м</span>
                                                            <p>Площадь:</p><span>34.8 м2</span>
                                                            <p>Количество комнат:</p><span>3 шт</span>
                                                            <h4>940 000 ₽</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                <span className="next"><div className="left"><img src="images/left.png" className="left-icon" alt=""/></div></span>
                            </a>
                            <a className="carousel-control-next" href="#demo" data-slide="next">
                                <span className="next"><div className="right"><img src="images/right.png" className="right-icon" alt=""/></div></span>
                            </a>
                        </div>
                        <div id="demo3" className="carousel slide carouse-fade car-media" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="tab-pane active" id="karkas">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="tap-card">
                                                        <div className="tabs-img"><img src="images/tabs-img1.png" alt=""/></div>
                                                        <div className="tabs-text">
                                                            <h3>Каркасный дом с балконом LK-2</h3>
                                                            <p>Размер:</p><span>4х6 м</span>
                                                            <p>Площадь:</p><span>34.8 м2</span>
                                                            <p>Количество комнат:</p><span>3 шт</span>
                                                            <h4>940 000 ₽</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="tab-pane active" id="karkas">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="tap-card">
                                                        <div className="tabs-img"><img src="images/tabs-img4.png" alt=""/></div>
                                                        <div className="tabs-text">
                                                            <h3>Каркасный дом с балконом LK-2</h3>
                                                            <p>Размер:</p><span>4х6 м</span>
                                                            <p>Площадь:</p><span>34.8 м2</span>
                                                            <p>Количество комнат:</p><span>3 шт</span>
                                                            <h4>940 000 ₽</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="tab-pane" id="besedki">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="tap-card">
                                                        <div className="tabs-img"><img src="images/tabs-img3.png" alt=""/></div>
                                                        <div className="tabs-text">
                                                            <h3>Каркасный дом с балконом LK-2</h3>
                                                            <p>Размер:</p><span>4х6 м</span>
                                                            <p>Площадь:</p><span>34.8 м2</span>
                                                            <p>Количество комнат:</p><span>3 шт</span>
                                                            <h4>940 000 ₽</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="tab-pane" id="bitovki">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="tap-card">
                                                        <div className="tabs-img"><img src="images/tabs-img1.png" alt=""/></div>
                                                        <div className="tabs-text">
                                                            <h3>Каркасный дом с балконом LK-2</h3>
                                                            <p>Размер:</p><span>4х6 м</span>
                                                            <p>Площадь:</p><span>34.8 м2</span>
                                                            <p>Количество комнат:</p><span>3 шт</span>
                                                            <h4>940 000 ₽</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="tab-pane" id="settings">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="tap-card">
                                                        <div className="tabs-img"><img src="images/tabs-img1.png" alt=""/></div>
                                                        <div className="tabs-text">
                                                            <h3>Каркасный дом с балконом LK-2</h3>
                                                            <p>Размер:</p><span>4х6 м</span>
                                                            <p>Площадь:</p><span>34.8 м2</span>
                                                            <p>Количество комнат:</p><span>3 шт</span>
                                                            <h4>940 000 ₽</h4>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#demo3" data-slide="prev">
                                <span className="next"><div className="left"><img src="images/left.png" className="left-icon" alt=""/></div></span>
                            </a>
                            <a className="carousel-control-next" href="#demo3" data-slide="next">
                                <span className="next"><div className="right"><img src="images/right.png" className="right-icon" alt=""/></div></span>
                            </a>
                        </div>
                        <button className="carousel-button">СМОТРЕТЬ ВСЕ ПРОЕКТЫ</button>
                    </div>
                </div>
                <div className="work">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="image-family" src="images/family.png" width="100%" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <div className="works-hover">
                                <h1 className="work-h1">Мы работаем с <div className="work-h1-children">материнским капиталом!</div></h1>
                                <button className="work-button">Оставить заявку</button>
                                <div className="work-icons">
                                    <img src="images/work-left.png" alt=""/>
                                    <span>1/2</span>
                                    <img src="images/works-right.png" alt=""/>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className="work-boxes">
                        <h1>Наши преимущества</h1>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="works-box">
                                        <div className="work-text">
                                            <h5>Работаем строго по договору</h5>
                                            <p>Стоимость строительсва фиксированная.</p>
                                            <p>И все наши обязательства прописаны в договоре.</p>
                                            <img src="images/works-img1.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="works-box">
                                      <div className="work-text">
                                          <h5>Честная цена и понятные условия</h5>
                                          <p>Поэтапная оплата. Нет скрытых платежей и мелких</p>
                                          <p>шрифтов.</p>
                                          <img src="images/works-img2.png" alt=""/>
                                      </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="works-box">
                                        <div className="work-text">
                                            <h5>Фотоотчет процесса строительства</h5>
                                            <p>Бесплатный фото или видео отчет</p>
                                            <p> (по договорённости)</p>
                                            <img src="images/works-img3.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="works-box">
                                        <div className="work-text">
                                            <h5>Экологически чистый материал</h5>
                                            <p>Сертифицированные, экологичные материалы от </p>
                                            <p>проверенных поставщиков.</p>
                                            <img src="images/works-img4.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="works-box">
                                        <div className="work-text">
                                            <h5>Честная цена и понятные условия</h5>
                                            <p>Бесплатный фото или видео отчет</p>
                                            <p> (по договорённости)</p>
                                            <img src="images/works-img5.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="works-box">
                                        <div className="work-text">
                                            <h5>Гарантийное обслуживание любой постройки</h5>
                                            <p>Сертифицированные, экологичные материалы от </p>
                                            <p>проверенных поставщиков.</p>
                                            <img src="images/works-img6.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="works-box">
                                        <div className="work-text">
                                            <h5>Более 7 лет опыта</h5>
                                            <p>Бесплатный фото или видео отчет</p>
                                            <p> (по договорённости)</p>
                                            <img src="images/works-im7.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="works-box">
                                        <div className="work-text">
                                            <h5>Индивидуальные проекты</h5>
                                            <p>Сертифицированные, экологичные материалы от </p>
                                            <p>проверенных поставщиков.</p>
                                            <img src="images/works-img8.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mini-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mini-texts">
                                    <h2 className="min-h2">Хотите узнаваt о <p>строящихся объектах, акциях и спецпредложениях?</p></h2>
                                    <p className="mini-p">Подпишитесь на нашу группу ВКонтакте и узнавайте свежие <p> новости и полезную информацию раньше всех!</p></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <button className="mini-button">Подписаться НА ГРУППУ ВКОНТАКТЕ</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="onhome">
                    <div className="container">
                        <div className="row my-5">
                            <div className="col-md-6">
                                <img className="onhome-img" src="images/onhome.png" alt=""/>
                            </div>
                            <div className="col-md-6">
                                <div className="onhome-texts">
                                    <h3>Планируете построить <p>индивидуальное строение? <p> Свяжитесь с нами.</p></p></h3>
                                    <p>
                                        Хотите постройку в современном минималистичном стиле, но ни один из типовых проектов Вам не подходит? <br/>
                                        Выход есть! <br/>

                                        Свяжитесь с нами и мы реализуем задуманное.
                                    </p>
                                    <button className="onhome-button">Связаться с нами</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel2">
                    <div id="demo2" className="carousel slide carousel-fade" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-md-4 my-2">
                                        <div className="carousel3-box">
                                            <div className="car-box">
                                                <p>Отзывы</p>
                                                <h4>Джон Джон Джон</h4>
                                                <div className="star">
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.
                                                    <br/>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.
                                                </p>
                                                <h3>Изготовление каркасного дома с балконом</h3>
                                            </div>
                                        </div>
                                    </div>
                                        <div className="col-md-4">
                                            <div className="carousel2-box">
                                                <div className="car-box">
                                                    <p>Отзывы</p>
                                                    <h4>Джон Джон Джон</h4>
                                                    <div className="star">
                                                        <img src="images/star.png" alt=""/>
                                                        <img src="images/star.png" alt=""/>
                                                        <img src="images/star.png" alt=""/>
                                                        <img src="images/star.png" alt=""/>
                                                        <img src="images/star.png" alt=""/>
                                                    </div>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.
                                                        <br/>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.
                                                    </p>
                                                    <h3>Изготовление каркасного дома с балконом</h3>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-md-4 my-2">
                                        <div className="carousel-box">
                                            <div className="car-box">
                                                <p>Отзывы</p>
                                                <h4>Джон Джон Джон</h4>
                                                <div className="star">
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.
                                                    <br/>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.
                                                </p>
                                                <h3>Изготовление каркасного дома с балконом</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-4 my-2">
                                        <div className="carousel3-box">
                                            <div className="car-box">
                                                <p>Отзывы</p>
                                                <h4>Джон Джон Джон</h4>
                                                <div className="star">
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.
                                                    <br/>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.
                                                </p>
                                                <h3>Изготовление каркасного дома с балконом</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="carousel2-box">
                                            <div className="car-box">
                                                <p>Отзывы</p>
                                                <h4>Джон Джон Джон</h4>
                                                <div className="star">
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.
                                                    <br/>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.
                                                </p>
                                                <h3>Изготовление каркасного дома с балконом</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 my-2">
                                        <div className="carousel-box">
                                            <div className="car-box">
                                                <p>Отзывы</p>
                                                <h4>Джон Джон Джон</h4>
                                                <div className="star">
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.
                                                    <br/>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.
                                                </p>
                                                <h3>Изготовление каркасного дома с балконом</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-4 my-2">
                                        <div className="carousel3-box">
                                            <div className="car-box">
                                                <p>Отзывы</p>
                                                <h4>Джон Джон Джон</h4>
                                                <div className="star">
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.
                                                    <br/>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.
                                                </p>
                                                <h3>Изготовление каркасного дома с балконом</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="carousel2-box">
                                            <div className="car-box">
                                                <p>Отзывы</p>
                                                <h4>Джон Джон Джон</h4>
                                                <div className="star">
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.
                                                    <br/>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.
                                                </p>
                                                <h3>Изготовление каркасного дома с балконом</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 my-2">
                                        <div className="carousel-box">
                                            <div className="car-box">
                                                <p>Отзывы</p>
                                                <h4>Джон Джон Джон</h4>
                                                <div className="star">
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                    <img src="images/star.png" alt=""/>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.
                                                    <br/>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.
                                                </p>
                                                <h3>Изготовление каркасного дома с балконом</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#demo2" data-slide="prev">
                            <span className="next"><div className="left"><img src="images/left.png" className="left-icon" alt=""/></div></span>
                        </a>
                        <a className="carousel-control-next" href="#demo2" data-slide="next">
                            <span className="next"><div className="right"><img src="images/right.png" className="right-icon" alt=""/></div></span>
                        </a>
                    </div>
                </div>
                <div className="map">
                    <div className="map-box">
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
                                    <button className="contact-button">
                                        Задать вопрос
                                    </button>
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
        );
    }
}

export default Forward;