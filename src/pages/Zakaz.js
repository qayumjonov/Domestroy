import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Zakaz extends Component {
    render() {
        return (
            <div>
                <div className="zakaz-header">
                    <div className="karkasniytovarov-forward">
                        <div className="container">
                            <Link className="karkasniyhome-a" to={'/'}>Главная</Link>
                            <span className="karkasniyhome-span"><img src="images/kar-right-icon.png" alt=""/></span>
                            <Link className="karkasniyhome-a"  to={'#'}>Заказчику</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="zakaz-header-texts">
                                <h1 className="zakaz-header-h1">Заказчику</h1>
                                <p className="zakaz-header-p">
                                    Мы ценим каждого клиента и сделаем всю работу сами. <br/> Воплощаем в жизнь проекты, создавая дома для <br/> комфортной жизни.
                                </p>
                            </div>
                           <Link to={'/Индивидуальное-строительство'}><button className="zakaz-header-button">
                                Узнать больше <br/>
                                об индивидуальном строительстве <button><img src="images/zakaz-header-right.png" alt=""/></button>
                            </button></Link>
                        </div>
                        <div className="col-md-6">
                            <img src="images/zakaz-img2.png" className="zakaz-header-img" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section4">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h1 className="section4-h1">Порядок оформления договора</h1>
                                    </div>
                                    <div className="col-md-6">
                                        <button className="check-button">
                                            <img src="images/check-icon.png" alt=""/>
                                            При оформлении договора <br/> цена зафиксированна
                                        </button>
                                    </div>
                                </div>

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
                <div className="zakaz-section">
                    <h1>Дистанционное оформление договора</h1>
                    <p>
                        Мы рады предложить своим клиентам услугу по дистанционному оформлению <br/> договоров на строительство домов и бань, для покупателей у которых нет возможности <br/> приехать к нам в офис.
                    </p>
                </div>
                <div className="zakaz-h">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="zakaz-box">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img className="img-number" src="images/1.png" alt=""/>
                                    </div>
                                    <div className="col-md-2">
                                        <img src="images/line.png" className="line-img" alt=""/>
                                    </div>
                                    <div className="col-md-8">
                                        <h2 className="zakaz-box-h2">Обсуждение строения и стоимость строительства</h2>
                                        <ul>
                                            <li>Позвоните или оставьте заявку на нашем сайте с параметрами интересующего строения.</li>
                                            <li>  После согласования планировки и комплектации, мы подготовим расчет стоимости и отправим на электронную почту.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="zakaz-box">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img className="img-number" src="images/2.png" alt=""/>
                                    </div>
                                    <div className="col-md-2">
                                        <img src="images/line.png" className="line-img" alt=""/>
                                    </div>
                                    <div className="col-md-8">
                                        <h2 className="zakaz-box-h2">Обсуждение строения и стоимость строительства</h2>
                                        <ul>
                                            <li>Позвоните или оставьте заявку на нашем сайте с параметрами интересующего строения.</li>
                                            <li>  После согласования планировки и комплектации, мы подготовим расчет стоимости и отправим на электронную почту.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="zakaz-box">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img className="img-number" src="images/3.png" alt=""/>
                                    </div>
                                    <div className="col-md-2">
                                        <img src="images/line.png" className="line-img" alt=""/>
                                    </div>
                                    <div className="col-md-8">
                                        <h2 className="zakaz-box-h2">Обсуждение строения и стоимость строительства</h2>
                                        <ul>
                                            <li>Позвоните или оставьте заявку на нашем сайте с параметрами интересующего строения.</li>
                                            <li>  После согласования планировки и комплектации, мы подготовим расчет стоимости и отправим на электронную почту.</li>
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
                </div>
                <div className="zakaz-section">
                    <h1>Порядок оплаты</h1>
                    <p>
                        Мы рады предложить своим клиентам услугу по дистанционному оформлению <br/> договоров на строительство домов и бань, для покупателей у которых нет возможности <br/> приехать к нам в офис.
                    </p>
                </div>
                <div className="zakaz-h">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="zakaz-box">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img className="img-number" src="images/1.png" alt=""/>
                                    </div>
                                    <div className="col-md-2">
                                        <img src="images/line.png" className="line-img" alt=""/>
                                    </div>
                                    <div className="col-md-8">
                                        <h2 className="zakaz-box-h2">Заключаем договор</h2>
                                        <ul>
                                            <li>В офисе или дистанционно. Авансовая оплата 30%</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="zakaz-box">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img className="img-number" src="images/2.png" alt=""/>
                                    </div>
                                    <div className="col-md-2">
                                        <img src="images/line.png" className="line-img" alt=""/>
                                    </div>
                                    <div className="col-md-8">
                                        <h2 className="zakaz-box-h2">Доставляем материалы</h2>
                                        <ul>
                                            <li>Вторая оплата до 60%</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="zakaz-box">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img className="img-number" src="images/3.png" alt=""/>
                                    </div>
                                    <div className="col-md-2">
                                        <img src="images/line.png" className="line-img" alt=""/>
                                    </div>
                                    <div className="col-md-8">
                                        <h2 className="zakaz-box-h2">Возводим строение</h2>
                                        <ul>
                                            <li>Качественно и профессионально возводим постройку</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="zakaz-box">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img className="img-number" src="images/4.png" alt=""/>
                                    </div>
                                    <div className="col-md-2">
                                        <img src="images/line.png" className="line-img" alt=""/>
                                    </div>
                                    <div className="col-md-8">
                                        <h2 className="zakaz-box-h2">Возводим строение</h2>
                                        <ul>
                                            <li>Качественно и профессионально возводим постройку</li>
                                        </ul>
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

export default Zakaz;