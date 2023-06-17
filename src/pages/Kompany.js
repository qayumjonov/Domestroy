import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Kompany extends Component {
    render() {
        return (
            <div>
                <div className="kompany-header">
                    <div className="karkasniytovarov-forward">
                        <div className="container">
                            <Link className="karkasniyhome-a" to={'/'}>Главная</Link>
                            <span className="karkasniyhome-span"><img src="images/kar-right-icon.png" alt=""/></span>
                            <Link className="karkasniyhome-a"  to={'#'}>О нас</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="kompany-header-texts">
                                <h1 className="kompany-header-h1">О компании</h1>
                                <p className="kompany-header-p">
                                    Доставка осуществляется только при наличии <br/> удовлетворительных, для грузового автомобиля г/п 7т, <br/> подъездных путей к месту разгрузки.
                                </p>
                            </div>
                            <button className="kompany-header-button"><img src="images/right-idividual.png" alt=""/></button><span className="kompany-header-span">СМОТРЕТЬ ПРОЕКТЫ</span>
                        </div>
                        <div className="col-md-6">
                            <div className="kompany-header-box">
                                <img className="kompany-header-box-img" src="images/check-icon.png" alt=""/> <br/>
                                <h3 className="kompany-header-box-h3">Работаем в сфере строительства</h3>
                                <ul className="kompany-header-box-menu">
                                    <li>Современные дачные КАРКАСНЫЕ ДОМА</li>
                                    <li>ОТКРЫТЫЕ и ОСТЕКЛЁННЫЕ БЕСЕДКИ из мини-бруса 45мм</li>
                                    <li>Индивидуальные БАНИ под ключ</li>
                                    <li>БЫТОВКИ и хозяйственные постройки</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="kompany-body">
                    <div className="kompany-forward-body">
                        <div className="container">
                            <div className="kompany-body-texts">
                                <h1>ПРОИЗВОДСТВЕННОЕ ИЗГОТОВЛЕНИЕ</h1>
                                <p>Производственное изготовление позволяет значительно повысить качество и снизить стоимость итогового продукта. Самостоятельно закупаем материалы у наших поставщиков и строим на собственном производстве, не перекупая готовые изделия.</p>
                            </div>
                            <div className="kompany-body-boxes">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="kompany-body-box">
                                            <h3 className="kompany-body-box-h3">ТОЛЬКО КАЧЕСТВЕННЫЕ <br/> МАТЕРИАЛЫ</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="kompany-body-box-menu">
                                            <li>Фундамент</li>
                                            <li>Усиленный каркас </li>
                                            <li>Наружная и внутренняя отделка</li>
                                            <li>Двойной пол</li>
                                            <li>Долговечная кровля</li>
                                            <li>Окна и двери не нужно докупать отдельно</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="work">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="image-family" src="images/family.png" width="100%" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <div className="works-hover pt-5">
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
                    <div className="work-zdildi">
                        <div className="work-finnaly">
                            <h4 className="work-finnaly-h4">Главное для нас, работать так, что-бы наши заказчики обращались к нам еще и рекомендовали своим знакомым. На все наши строения распространяется гарантия.</h4>
                            <div className="row">
                                <div className="col-md-6">
                                    <img src="images/work-finnaly.png" alt=""/>
                                </div>
                                <div className="col-md-6">
                                    <div className="work-finnaly-mazgi">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="work-finnaly-box">
                                                    <h3>ВЫСТАВОЧНЫЕ ОБРАЗЦЫ</h3>
                                                    <p>Увидеть, ощутить себя внутри и обсудить необходимые размеры с нашими специалистами возможно по адресу: Московская область г.Ступино ул.Промышленная
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="work-finnaly-mazgi">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="work-finnaly-box">
                                                    <h3>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</h3>
                                                    <p>подробный расчёт стоимости «без сюрпризов». при необходимости выезжаем на участок.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="work-finnaly-mazgi">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="work-finnaly-box">
                                                    <h3>СОСТАВЛЕНИЕ ПЛАНА <br/> ГОТОВОГО ИНТЕРЬЕРА</h3>
                                                    <p>Наши специалисты ответят на все Ваши вопросы, подскажут по сезону, размеру, с удовольствием подберут всё необходимое для Вашего удобства, комфорта и индивидуальности!!!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
            </div>
        );
    }
}

export default Kompany;