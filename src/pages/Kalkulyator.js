import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Checkbox, Select} from 'antd'
import {toast} from "react-toastify";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
class Kalkulyator extends Component {
    state={
        openmodal: false,
        openmodal2:false
    }
    openModal=()=>{
       this.setState({
           openmodal: !this.state.openmodal
       })
    }
    openModal2=()=>{
        this.setState({
            openmodal: !this.state.openmodal,
            openmodal2: !this.state.openmodal2
        })
    }
    openModal3=()=>{
        this.setState({
            openmodal2: !this.state.openmodal2
        })
    }


    render() {
        return (
            <div className="container">
                <div className="kankulyator-zaybal">
                    <div className="individual-forward">
                        <div className="container">
                            <Link className="karkasniyhome-a" to={'/'}>Главная</Link>
                            <span className="karkasniyhome-span"><img src="images/kar-right-icon.png" alt=""/></span>
                            <Link className="karkasniyhome-a"  to={'#'}>Калькулятор</Link>
                        </div>
                    </div>
                    <div className="container">
                        <div className="zqildi">
                            <h1>Калькулятор</h1>
                            <p>Вы можете рассчитать стоимость беседки или каркасного дома с помощью нашего калькулятора:</p>
                        </div>
                        <div className="kalkulyator-body1">
                            <div className="container">
                                <div className="kalkulyator-body1-forward">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="kalkulyator-body1-box">
                                                <span>Ширина:</span>
                                                <Select className="kalkulyator-body1-select"
                                                        defaultValue="23 M"
                                                        style={{ width: 120 }}
                                                        options={[
                                                            { value: '24 M', label: '24 M' },
                                                            { value: '25 M', label: '25 M' },
                                                            { value: '27 M', label: '27 M' },
                                                            { value: '28 M', label: '28 M' },
                                                            { value: '29 M', label: '29 M' },
                                                            { value: 'disabled', label: 'Disabled', disabled: true },
                                                        ]}
                                                />
                                            </div>

                                        </div>
                                        <div className="col-md-4">
                                            <div className="kalkulyator-body1-box">
                                                <span>Длина:</span>
                                                <Select className="kalkulyator-body1-select"
                                                        defaultValue="13 M"
                                                        style={{ width: 120 }}
                                                        options={[
                                                            { value: '14 M', label: '14 M' },
                                                            { value: '15 M', label: '15 M' },
                                                            { value: '17 M', label: '17 M' },
                                                            { value: '18 M', label: '18 M' },
                                                            { value: '19 M', label: '19 M' },
                                                            { value: 'disabled', label: 'Disabled', disabled: true },
                                                        ]}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="kalkulyator-body1-box">
                                                <span>Толщина бруса:</span>
                                                <button className="kalkulyator-body1-button" onClick={this.openModal}>45 мм</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="kalkulyator-forward-carousel">
                                        <div id="demo" className="carousel slide kalkulyator-carousel" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img1.png" width="100%" alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img2.png" width="100%"  alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img3.png" width="100%" alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img4.png" width="100%"  alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img5.png" width="100%"  alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img6.png" width="100%"  alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img1.png" width="100%" alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img2.png" width="100%"  alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img3.png" width="100%" alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img4.png" width="100%"  alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img5.png" width="100%"  alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img6.png" width="100%"  alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img1.png" width="100%" alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img2.png" width="100%"  alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img3.png" width="100%" alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img4.png" width="100%"  alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img5.png" width="100%"  alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img6.png" width="100%"  alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                                <span className="next"><div className="kalkulyator-left"><img src="images/left-icon.png" className="left-icon" alt=""/></div></span>
                                            </a>
                                            <a className="carousel-control-next" href="#demo" data-slide="next">
                                                <span className="next"><div className="kalkulyator-right"><img src="images/right-icon.png" className="right-icon" alt=""/></div></span>
                                            </a>
                                        </div>
                                        <img className="kalkulyator-forward-carousel-img" src="images/islom-mazgi.png" alt=""/>
                                        <div id="demo2" className="carousel slide kalkulyator-carousel mt-5" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img1.png" width="100%" alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img2.png" width="100%"  alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img3.png" width="100%" alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img4.png" width="100%"  alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img5.png" width="100%"  alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img6.png" width="100%"  alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img1.png" width="100%" alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img2.png" width="100%"  alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img3.png" width="100%" alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img4.png" width="100%"  alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img5.png" width="100%"  alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img6.png" width="100%"  alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img1.png" width="100%" alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img2.png" width="100%"  alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img3.png" width="100%" alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img4.png" width="100%"  alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img5.png" width="100%"  alt=""/>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <img src="images/kankulyator-img6.png" width="100%"  alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a className="carousel-control-prev" href="#demo2" data-slide="prev">
                                                <span className="next"><div className="kalkulyator-left"><img src="images/left-icon.png" className="left-icon" alt=""/></div></span>
                                            </a>
                                            <a className="carousel-control-next" href="#demo2" data-slide="next">
                                                <span className="next"><div className="kalkulyator-right"><img src="images/right-icon.png" className="right-icon" alt=""/></div></span>
                                            </a>
                                        </div>
                                        <div id="demo3" className="carousel slide kalkulyator-carousel2 mt-5" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <img src="images/doors-1.png" width="90%" alt=""/>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <img src="images/doors-2.png" width="90%"  alt=""/>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <img src="images/doors-3.png" width="90%" alt=""/>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <img src="images/doors-4.png" width="90%"  alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <img src="images/doors-1.png" width="90%" alt=""/>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <img src="images/doors-2.png" width="90%"  alt=""/>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <img src="images/doors-3.png" width="90%" alt=""/>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <img src="images/doors-4.png" width="90%"  alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <img src="images/doors-1.png" width="90%" alt=""/>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <img src="images/doors-2.png" width="90%"  alt=""/>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <img src="images/doors-3.png" width="90%" alt=""/>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <img src="images/doors-4.png" width="90%"  alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a className="carousel-control-prev" href="#demo3" data-slide="prev">
                                                <span className="next"><div className="kalkulyator-left"><img src="images/left-icon.png" className="left-icon" alt=""/></div></span>
                                            </a>
                                            <a className="carousel-control-next" href="#demo3" data-slide="next">
                                                <span className="next"><div className="kalkulyator-right"><img src="images/right-icon.png" className="right-icon" alt=""/></div></span>
                                            </a>
                                        </div>
                                        <div id="demo4" className="carousel slide kalkulyator-carousel3 mt-5" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <img src="images/doors-1.png" width="90%" alt=""/>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <img src="images/doors-2.png" width="90%"  alt=""/>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <img src="images/doors-3.png" width="90%" alt=""/>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <img src="images/doors-4.png" width="90%"  alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <img src="images/doors-1.png" width="90%" alt=""/>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <img src="images/doors-2.png" width="90%"  alt=""/>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <img src="images/doors-3.png" width="90%" alt=""/>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <img src="images/doors-4.png" width="90%"  alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <img src="images/doors-1.png" width="90%" alt=""/>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <img src="images/doors-2.png" width="90%"  alt=""/>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <img src="images/doors-3.png" width="90%" alt=""/>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <img src="images/doors-4.png" width="90%"  alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a className="carousel-control-prev" href="#demo4" data-slide="prev">
                                                <span className="next"><div className="kalkulyator-left"><img src="images/left-icon.png" className="left-icon" alt=""/></div></span>
                                            </a>
                                            <a className="carousel-control-next" href="#demo4" data-slide="next">
                                                <span className="next"><div className="kalkulyator-right"><img src="images/right-icon.png" className="right-icon" alt=""/></div></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="kankulyator-map">
                            <div className="kankulyator-map-texts">
                                <h4 className="kankulyator-map-h4">Услуги</h4>
                                <p className="kankulyator-map-p">Сборка:</p>
                                <Checkbox className="antd-checkbox"/><span className="kankulyator-map-span">Сборка командой домстроя (+2000р)</span><br/>
                                <p className="kankulyator-map-p">Получение:</p>
                                <Checkbox className="antd-checkbox"/><span className="kankulyator-map-span">Доставка</span><br/>
                                <Checkbox className="antd-checkbox"/><span className="kankulyator-map-span">Самовывоз</span><br/>

                                <h3 className="kankulyator-map-h3">Рассчитать стоимость доставки</h3>
                                <p className="kankulyator-map-p2">
                                    Теперь любой наш клиент сможет самостоятельно определить стоимость доставки конструкции до своего участка. <br/> Расстояния от нашего производства до любого населенного пункта вы можете посчитать прямо здесь!
                                </p>
                            </div>
                            <div className="container">
                                <div className="kankulyator-map-bg">
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
                        <div className="kankulyator-add">
                            <h3 className="kankulyator-add-h3">Дополнительно</h3>
                            <Checkbox className="antd-checkbox"/><span className="kankulyator-add-span">Обработка пола с одной стороны "Антисептиком"  (+ 2000р)</span><br/>
                            <Checkbox className="antd-checkbox"/><span className="kankulyator-add-span">Покраска стен с двух сторон (+ 2000р)</span>
                        </div>
                        <div className="kankulyator-blog">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="kankulyator-blog-box">
                                        <span className="kankulyator-blog-span1">Цена со скидкой:</span><span className="kankulyator-blog-span2">51 295 ₽</span><del className="kankulyator-blog-span3">57 295 ₽</del><br/>
                                        <div className="kankulyator-blog-minibox"><span className="kankulyator-blog-span4">Стоимость аксессуаров:</span> <p className="kankulyator-blog-p">1 295 ₽</p></div>
                                        <div className="kankulyator-blog-minibox"><span className="kankulyator-blog-span4">Стоимость сборки:</span><p className="kankulyator-blog-p">2 000 ₽</p></div>
                                        <span className="kankulyator-blog-span4">Стоимость доставки:</span><p className="kankulyator-blog-p">12 000 ₽</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="kankulyator-blog-box2">
                                        <span className="kankulyator-blog-box2-span">Итог:</span><h2 className="kankulyator-blog-box2-h2">51 295 ₽</h2>
                                        <button className="kankulyator-blog-box2-button">ОФОРМИТЬ ЗАКАЗ</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="kankulyator-work">
                            <div className="roll">
                                <div className="roll-mini"></div>
                            </div><hr className="kankulyator-work-hr"/> <div className="roll">
                            <div className="roll-mini"></div>
                        </div><hr className="kankulyator-work-hr"/> <div className="roll">
                            <div className="roll-mini"></div>
                        </div><hr className="kankulyator-work-hr"/>
                            <div className="roll-forward">
                                <img src="images/check-icon.png" alt=""/>
                            </div>

                            <div className="row">
                                <div className="col-md-3">
                                    <div className="kankulyator-work-box">
                                        <h3>Заключаем договор</h3>
                                        <p>В офисе или дистанционно. <br/> Авансовая оплата 30%</p>
                                    </div>

                                </div>
                                <div className="col-md-3">
                                    <div className="kankulyator-work-box">
                                        <h3>Доставляем материалы</h3>
                                        <p>Вторая оплата до 60%</p>
                                    </div>

                                </div>
                                <div className="col-md-3">
                                    <div className="kankulyator-work-box">
                                        <h3>Возводим строение</h3>
                                        <p>Качественно и профессионально <br/> возводим постройку</p>
                                    </div>

                                </div>
                                <div className="col-md-3">
                                    <div className="kankulyator-work-box">
                                        <h3>Вы принимаете готовую постройку</h3>
                                        <p>Подписание акта приема-передачи <br/> и окончательная оплата</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="work mt-5">
                            <div className="row">
                                <div className="col-md-6">
                                    <img className="image-family" src="images/family.png" width="100%" alt=""/>
                                </div>
                                <div className="col-md-6">
                                    <div className="works-hover mt-5">
                                        <h1 className="work-h1">Мы работаем с <div className="work-h1-children">материнским капиталом!</div></h1>
                                        <button className="work-button">Оставить заявку</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal isOpen={this.state.openmodal} toggle={this.openModal}>
                        <ModalHeader>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="modal-header-h4">Кровля</h4>
                                </div>
                                <div className="col-md-6">
                                    <button className="btn modal-button" onClick={this.openModal}><img src="images/x.png" alt=""/></button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="modal-header-p">Вынос:</p>
                                </div>
                                <div className="col-md-6">
                                    <button className="modal-button2" onClick={this.openModal2}>25 <span>см</span></button>
                                    <button className="modal-button3" onClick={this.openModal2}>75 <span>см</span></button>
                                </div>
                            </div>
                        </ModalHeader>
                        <ModalBody>
                        <p className="modal-body-p">Покрытие:</p>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="modal-box">
                                        <img src="images/modal-img-5.png" width="100%" alt=""/>
                                        <div className="modal-minibox">
                                            <p>8 720 ₽</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="modal-box">
                                        <img src="images/modal-img-6.png" width="100%" alt=""/>
                                        <div className="modal-minibox">
                                            <p>8 720 ₽</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="modal-box">
                                        <img src="images/modal-img-3.png" width="100%" alt=""/>
                                        <div className="modal-minibox">
                                            <p>8 720 ₽</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="modal-box">
                                        <img src="images/modal-img-6.png" width="100%" alt=""/>
                                        <div className="modal-minibox">
                                            <p>8 720 ₽</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="modal-box">
                                        <img src="images/modal-img-7.png" width="100%" alt=""/>
                                        <div className="modal-minibox">
                                            <p>8 720 ₽</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="modal-box">
                                        <img src="images/modal-img-8.png" width="100%" alt=""/>
                                        <div className="modal-minibox">
                                            <p>8 720 ₽</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="modal-body-p">Водоотвод:</p>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="modal-box">
                                        <img src="images/modal-img-1.png" width="100%" alt=""/>
                                        <div className="modal-minibox2">
                                            <p>8 720 ₽</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="modal-box">
                                        <img src="images/modal-img-2.png" width="100%" alt=""/>
                                        <div className="modal-minibox2">
                                            <p>8 720 ₽</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                    </Modal>
                    <Modal isOpen={this.state.openmodal2} toggle={this.openModal2}>
                        <ModalHeader>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="modal-header-h4">Основание</h4>
                                </div>
                                <div className="col-md-6">
                                    <button className="btn modal-button4" onClick={this.openModal3}><img src="images/x.png" alt=""/></button>
                                </div>
                            </div>
                            <select name="" className="form-select modal-select" id="">
                                <option value="">Обвязка и пол</option>
                            </select>
                            <img src="images/modal2-img-3.png" alt="" className="select-img"/>
                        </ModalHeader>
                        <ModalBody>
                            <p className="modal-header-p">Тип основания:</p>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="modal2-minibox">
                                        <img className="modal2-minibox-img" src="images/modal2-img-2.png" alt=""/> <br/>
                                        <span className="modal2-minibox-span">Бетонное основание</span> <span className="modal2-minibox-span2">1 720 ₽</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="modal2-minibox2">
                                        <img className="modal2-minibox-img" src="images/modal2-img-1.png" alt=""/> <br/>
                                        <span className="modal2-minibox-span3">Бетонное основание</span> <span className="modal2-minibox-span4">1 720 ₽</span>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Kalkulyator;