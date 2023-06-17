import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { Checkbox } from 'antd';
class KartochkaTovarov extends Component {
    render() {
        return (
            <div>
                <div className="karkasniytovarov">
                    <div className="container">
                        <div className="karkasniytovarov-forward">
                        <Link className="karkasniyhome-a" to={'/'}>Главная</Link>
                        <span className="karkasniyhome-span"><img src="images/kar-right-icon.png" alt=""/></span>
                        <Link className="karkasniyhome-a"  to={'/Каталог-хоз-построек'}>Каталог</Link>
                        <span className="karkasniyhome-span"><img src="images/kar-right-icon.png" alt=""/></span>
                        <Link className="karkasniyhome-a"  to={'/Каркасные-дома'}>Каркасные дома</Link>
                        <span className="karkasniyhome-span"><img src="images/kar-right-icon.png" alt=""/></span>
                        <Link className="karkasniyhome-a"  to={'/Каркасно-модульный-дом-Венеция'}>Каркасно-модульный-дом-Венеция</Link>
                    </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="kaskasniytovarov-carousel">
                                        <img src="images/Karkasniytovarov-img1.png" className="kaskasniytovarov-img1" width="95%" alt=""/>

                                    <div id="demo" className="carousel slide kaskasniytovarov-car" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <img src="images/karkasniytovar-img2.png" width="100%" alt=""/>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <img src="images/karkasniytovar-img3.png" width="100%" alt=""/>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <img src="images/karkasniytovar-img4.png" width="100%" alt=""/>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <img src="images/karkasniytovar-img5.png" width="100%" alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <img src="images/karkasniytovar-img2.png" alt=""/>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <img src="images/karkasniytovar-img3.png" alt=""/>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <img src="images/karkasniytovar-img4.png" alt=""/>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <img src="images/karkasniytovar-img5.png" alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <img src="images/karkasniytovar-img2.png" alt=""/>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <img src="images/karkasniytovar-img3.png" alt=""/>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <img src="images/karkasniytovar-img4.png" alt=""/>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <img src="images/karkasniytovar-img5.png" alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                            <span className="next"><div className="kaskasniytovarov-left"><img src="images/left.png" alt=""/></div></span>
                                        </a>
                                        <a className="carousel-control-next" href="#demo" data-slide="next">
                                            <span className="next"><div className="kaskasniytovarov-right"><img src="images/right.png" alt=""/></div></span>
                                        </a>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="karkasniytovarov-texts">
                                        <h1 className="karkasniytovarov-h1">
                                            Каркасно-модульный дом Венеция 4x4,6 м с террасой, кухней и спальней
                                        </h1>
                                        <p className="karkasniytovarov-p">
                                            Недорогой дачный дом размером 6х8м. с панорамным <br/> остеклением, возможностью выбора с сезонного <br/> проживания на постоянное.
                                        </p>
                                        <div className="karkasniytovar-box">
                                            <img src="images/karkasniy-tovar-icon1.png" alt=""/> <span>Размер дома</span> <h4>4x6,9 м</h4>
                                            <hr className="karkasniytovar-hr"/>
                                        </div>
                                        <div className="karkasniytovar-box">
                                            <img src="images/karkasniy-tovar-icon2.png" alt=""/> <span>Площадь застройки</span> <h4>30 м2</h4>
                                            <hr className="karkasniytovar-hr"/>
                                        </div>
                                        <div className="karkasniytovar-box">
                                            <img src="images/karkasniy-tovar-icon3.png" alt=""/> <span>Срок строительства</span> <h4>20 дней</h4>
                                            <hr className="karkasniytovar-hr"/>
                                        </div>
                                        <button className="karkasniytovar-button">ЗАДАТЬ ВОПРОС</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="karkasniytovarov-informal">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Checkbox  className="karkasniytovarov-informal-checkbox"/><span className="karkasniytovarov-informal-checkbox-span">Без внутренней отделки</span>
                                            </div>
                                            <div className="col-md-6">
                                                <span className="karkasniytovarov-informal-span">550 руб</span>
                                            </div>
                                            <hr className="karkasniytovarov-informal-hr"/>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Checkbox  className="karkasniytovarov-informal-checkbox"/><span className="karkasniytovarov-informal-checkbox-span">Утепленный 50мм</span>
                                            </div>
                                            <div className="col-md-6">
                                                <span className="karkasniytovarov-informal-span">700 руб</span>
                                            </div>
                                            <hr className="karkasniytovarov-informal-hr"/>
                                        </div>
                                        <div className="karkasniytovarov-informal-minibox">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <Checkbox  className="karkasniytovarov-informal-checkbox"/><span className="karkasniytovarov-informal-checkbox-span">Утепленный 100мм</span>
                                                </div>
                                                <div className="col-md-6">
                                                    <span className="karkasniytovarov-informal-span">850 руб</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="karkasniytovarov-informal-texts">
                                            <ul className="karkasniytovarov-informal-menu">
                                                <li>Фундамент: <span>столбы из бетонных блоков 30х30х20 см (16шт), высота цоколя 200мм.</span></li>
                                                <li>Нижняя обвязка: <span> брус 100х150мм.</span></li>
                                                <li> Черновой пол: <span> доска 25мм (2 сорт). </span></li>
                                                <li> Чистовой пол: <span> строганая шпунтованная доска 21мм. </span></li>
                                                <li> Стены: <span> каркасно-щитовые из бруса 40х150мм. подшита вагонкой с двух сторон. </span></li>
                                                <li> Перегородки: <span> каркасно-щитовые из бруса 40х50мм. подшита вагонкой с двух сторон. </span></li>
                                                <li> Высота помещения: <span>  2.1м. </span></li>
                                                <li> Потолок: <span> вагонка. </span></li>
                                                <li> Утепление пола:  <span> 150мм. </span></li>
                                                <li> Утепление стен: <span> 150мм. </span></li>
                                                <li> Утепление потолка: <span> 150мм.  </span></li>
                                                <li> Крыша: <span> Кровля-оцинкованное профильное железо С20. Высота конька 700мм. </span></li>
                                                <li> Окна: <span> ПВХ,однокамерные панорамные.  </span></li>
                                            </ul>

                                            <hr className="karkasniytovarov-informal-hr2"/>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Checkbox  className="karkasniytovarov-informal-checkbox"/><span className="karkasniytovarov-informal-checkbox-span">Утепленный 100мм</span>
                                            </div>
                                            <div className="col-md-6">
                                                <span className="karkasniytovarov-informal-span">850 руб</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="karkasniytovarov-box2">
                                        <h1 className="karkasniytovarov-box2-h1">
                                            Выберите дополнительные услуги:
                                        </h1>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Checkbox  className="karkasniytovarov-box2-check"/><span className="karkasniytovar-span2">Сборка на участке</span> <span className="karkasniytovar-span3">+ 950 руб</span>
                                                <hr className="karkasniytovarov-box2-hr"/>
                                            </div>
                                            <div className="col-md-6">
                                                <Checkbox  className="karkasniytovarov-box2-check"/><span className="karkasniytovar-span2">Кровля (металлочерепица) </span> <span className="karkasniytovar-span3">+ 950 руб</span>
                                                <hr className="karkasniytovarov-box2-hr"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Checkbox  className="karkasniytovarov-box2-check"/><span className="karkasniytovar-span2"> Бетонные армированные плиты</span> <span className="karkasniytovar-span3">+ 950 руб</span>
                                                <hr className="karkasniytovarov-box2-hr"/>
                                            </div>
                                            <div className="col-md-6">
                                                <Checkbox  className="karkasniytovarov-box2-check"/><span className="karkasniytovar-span2">Увеличение конька крыши 1,5м</span> <span className="karkasniytovar-span3">+ 950 руб</span>
                                                <hr className="karkasniytovarov-box2-hr"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Checkbox  className="karkasniytovarov-box2-check"/><span className="karkasniytovar-span2">Установка свайного фундамента</span> <span className="karkasniytovar-span3">+ 950 руб</span>
                                                <hr className="karkasniytovarov-box2-hr"/>
                                            </div>
                                            <div className="col-md-6">
                                                <Checkbox  className="karkasniytovarov-box2-check"/><span className="karkasniytovar-span2">Наружная отделка имитация </span> <span className="karkasniytovar-span3">+ 950 руб</span>
                                                <hr className="karkasniytovarov-box2-hr"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Checkbox  className="karkasniytovarov-box2-check"/><span className="karkasniytovar-span2">Замена пола с 21мм на 27мм</span> <span className="karkasniytovar-span3">+ 950 руб</span>
                                                <hr className="karkasniytovarov-box2-hr"/>
                                            </div>
                                            <div className="col-md-6">
                                                <Checkbox  className="karkasniytovarov-box2-check"/><span className="karkasniytovar-span2">бруса Внутренняя отделка </span> <span className="karkasniytovar-span3">+ 950 руб</span>
                                                <hr className="karkasniytovarov-box2-hr"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Checkbox  className="karkasniytovarov-box2-check"/><span className="karkasniytovar-span2">Замена пола с 21мм на 36мм </span> <span className="karkasniytovar-span3">+ 950 руб</span>
                                                <hr className="karkasniytovarov-box2-hr"/>
                                            </div>
                                            <div className="col-md-6">
                                                <Checkbox  className="karkasniytovarov-box2-check"/><span className="karkasniytovar-span2">класса А-В Двухсторонняя </span> <span className="karkasniytovar-span3"> + 950 руб</span>
                                                <hr className="karkasniytovarov-box2-hr"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Checkbox  className="karkasniytovarov-box2-check"/><span className="karkasniytovar-span2">Увеличение потолка 2,30 </span> <span className="karkasniytovar-span3">+ 950 руб</span>
                                                <hr className="karkasniytovarov-box2-hr"/>
                                            </div>
                                            <div className="col-md-6">
                                                <Checkbox  className="karkasniytovarov-box2-check"/><span className="karkasniytovar-span2">класса А-В Двухсторонняя </span> <span className="karkasniytovar-span3">+ 950 руб</span>
                                                <hr className="karkasniytovarov-box2-hr"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Checkbox  className="karkasniytovarov-box2-check"/><span className="karkasniytovar-span2">Увеличение потолка 2,40 </span> <span className="karkasniytovar-span3">+ 950 руб</span>
                                                <hr className="karkasniytovarov-box2-hr"/>
                                            </div>
                                            <div className="col-md-6">
                                                <Checkbox  className="karkasniytovarov-box2-check"/><span className="karkasniytovar-span2">Кровля (крашеный профлист)</span> <span className="karkasniytovar-span3">+ 950 руб</span>
                                                <hr className="karkasniytovarov-box2-hr"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Checkbox  className="karkasniytovarov-box2-check"/><span className="karkasniytovar-span2">Сборка на участке</span> <span className="karkasniytovar-span3">+ 950 руб</span>
                                                <hr className="karkasniytovarov-box2-hr"/>
                                            </div>
                                            <div className="col-md-6">
                                                <Checkbox  className="karkasniytovarov-box2-check"/><span>Aренда генератора (1 день)</span> <span className="karkasniytovar-span3">+ 950 руб</span>
                                                <hr className="karkasniytovarov-box2-hr"/>
                                            </div>
                                        </div>
                                        <hr className="karkasniytovar-hr"/>
                                        <h3 className="karkasniytovar-h3">Итого за дополнительные услуги: <span>3800 руб</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="karkasniytovar-box3">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h2 className="karkasniytovar-box3-h2">Способы оплаты</h2>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="karkasniytovar-check">
                                                        <img src="images/check-icon.png" alt=""/>
                                                        <span className="karkasniytovar-check-span">Поэтапная оплата</span>
                                                    <div className="karkasniytovar-boxz">
                                                        <img src="images/check-icon.png" alt=""/>
                                                        <span className="karkasniytovar-check-span">Только по договору</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="karkasniytovar-minibox">
                                                        <img src="images/karkasniytovar-icon-4.png" alt=""/>
                                                        <p>Наличные</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="karkasniytovar-minibox">
                                                        <img src="images/karkasniytovar-icon-5.png" alt=""/>
                                                        <p>На расчетный счет</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="karkasniytovar-minibox">
                                                        <img src="images/karkasniytovar-icon-6.png" alt=""/>
                                                        <p>Кредит</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="karkasniytovar-minibox">
                                                        <img src="images/karkasniytovar-icon-7.png" alt=""/>
                                                        <p>Материнский капитал</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="section4">
                                        <h1 className="section4-h1">Как мы работаем</h1>
                                        <div className="section4-numbers">
                                            <button>1</button><hr className="section4"/><button>2</button><hr className="section4"/><button>3</button><hr className="section4"/>
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="section4-box">
                                            <h4>Подробный расчет стоимости</h4>
                                            <p>Действителен в течение 7 дней</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="section4-box">
                                            <h4>Согласовываем проект</h4>
                                            <p>
                                                Помогаем с выбором проекта. <br/> Согласовываем планировку и <br/> комплектацию
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="section4-box">
                                            <h4>Заключаем договор</h4>
                                            <p>
                                                Помогаем с выбором проекта. <br/> Согласовываем планировку и <br/> комплектацию
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="section5-numbers">
                                    <hr className="section4"/><button>4</button><hr className="section4"/><button>5</button><hr className="section4"/><button>6</button>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="section4-box">
                                            <h4>Подробный расчет стоимости</h4>
                                            <p>Действителен в течение 7 дней</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="section4-box">
                                            <h4>Согласовываем проект</h4>
                                            <p>
                                                Помогаем с выбором проекта. <br/> Согласовываем планировку и <br/> комплектацию
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="section4-box">
                                            <h4>Заключаем договор</h4>
                                            <p>
                                                Помогаем с выбором проекта. <br/> Согласовываем планировку и <br/> комплектацию
                                            </p>
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
                </div>
            </div>
        );
    }
}

export default KartochkaTovarov;