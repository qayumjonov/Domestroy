import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { Checkbox } from 'antd';
class KarkasniyDoma extends Component {
    state={
        openEtaj:true,
        openEtaj2:true,
        openEtaj3:true,
        openEtaj4:true,
        open1:true,
        open2:true,
        open3:true,
    }
    submenu=()=>{
        this.setState({
            openEtaj:!this.state.openEtaj
        })
    }
    submenu2=()=>{
        this.setState({
            openEtaj2:!this.state.openEtaj2
        })
    }
    submenu3=()=>{
        this.setState({
            openEtaj3:!this.state.openEtaj3
        })
    }
    submenu4=()=>{
        this.setState({
            openEtaj4:!this.state.openEtaj4
        })
    }

    render() {
        return (
            <div>
                <div className="karkasniyhome">
                    <div className="karkasniy-home-forward">
                        <Link className="karkasniyhome-a" to={'/'}>Главная</Link>
                        <span className="karkasniyhome-span"><img src="images/kar-right-icon.png" alt=""/></span>
                        <Link className="karkasniyhome-a"  to={'/Каталог-хоз-построек'}>Каталог</Link>
                        <span className="karkasniyhome-span"><img src="images/kar-right-icon.png" alt=""/></span>
                        <Link className="karkasniyhome-a"  to={'#'}>Каркасные дома</Link>
                    </div>
                    <div className="karkasniyhome-texts">
                        <h1>Каркасные дома</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor <br/> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="karkasniyhome-filter">
                                    <div className="filter-header">
                                        <img className="filter-header-img" src="images/filter-subtract.png" alt=""/>
                                        <h3 className="filter-header-h3">Фильтр</h3>
                                        <hr className="filter-hr bg-light"/>
                                        <h4 className="filter-h4">Стоимость</h4>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <button className="filter-header-button">290 000 ₽</button>
                                            </div>
                                            <div className="col-md-6">
                                                <button className="filter-header-button">1 290 000 ₽</button>
                                            </div>
                                        </div>
                                        <input className="filter-range" type="range"/>
                                        <hr className="filter-hr"/>
                                        <h4 className="filter-h4">Площадь</h4>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <button className="filter-header-button">20 м2</button>
                                            </div>
                                            <div className="col-md-6">
                                                <button className="filter-header-button">350 м2</button>
                                            </div>
                                        </div>
                                        <input className="filter-range" type="range"/>
                                        <hr className="filter-hr"/>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h4 className="filter-h3">Этажность</h4>
                                            </div>
                                            <div className="col-md-6">
                                                <button className="btn btn-light filter-button" onClick={this.submenu}><img src="images/kar-right-icon.png" alt=""/></button>
                                            </div>
                                        </div>
                                        {
                                            this.state.openEtaj ?
                                                <div className="etaj">
                                                    <Checkbox  className="antd-checkbox"/><span className="antd-checkbox-span">1 этаж</span>
                                                    <br/>
                                                    <Checkbox className="antd-checkbox"/><span className="antd-checkbox-span">2 этаж</span>
                                                </div>
                                            :
                                                ""
                                        }
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h4 className="filter-h3">Размеры</h4>
                                            </div>
                                            <div className="col-md-6">
                                                <button className="btn btn-light filter-button" onClick={this.submenu2}><img src="images/kar-right-icon.png" alt=""/></button>
                                            </div>
                                        </div>
                                        {
                                            this.state.openEtaj2 ?
                                                <div className="etaj">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <button className="etaj-button">6x7</button>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <button className="etaj-button">6x7</button>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <button className="etaj-button">6x7</button>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <button className="etaj-button">6x7</button>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <button className="etaj-button">6x7</button>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <button className="etaj-button">6x7</button>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <button className="etaj-button">6x7</button>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <button className="etaj-button">6x7</button>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <button className="etaj-button">6x7</button>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <button className="etaj-button">6x7</button>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <button className="etaj-button">6x7</button>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <button className="etaj-button">6x7</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                ""
                                        }
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h4 className="filter-h3">Форма крыши</h4>
                                            </div>
                                            <div className="col-md-6">
                                                <button className="btn btn-light filter-button" onClick={this.submenu3}><img src="images/kar-right-icon.png" alt=""/></button>
                                            </div>
                                        </div>
                                        {
                                            this.state.openEtaj3 ?
                                                <div className="etaj">
                                                    <Checkbox  className="antd-checkbox"/><span className="antd-checkbox-span">Односкатная</span>
                                                    <br/>
                                                    <Checkbox className="antd-checkbox"/><span className="antd-checkbox-span">Двухскатная</span>
                                                </div>
                                                :
                                                ""
                                        }
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h4 className="filter-h3">Количество спален</h4>
                                            </div>
                                            <div className="col-md-6">
                                                <button className="btn btn-light filter-button" onClick={this.submenu4}><img src="images/kar-right-icon.png" alt=""/></button>
                                            </div>
                                        </div>
                                        {
                                            this.state.openEtaj4 ?
                                                <div className="etaj">
                                                    <Checkbox  className="antd-checkbox"/><span className="antd-checkbox-span">1 спальня</span>
                                                    <br/>
                                                    <Checkbox className="antd-checkbox"/><span className="antd-checkbox-span">2 спальни</span>
                                                    <br/>
                                                    <Checkbox  className="antd-checkbox"/><span className="antd-checkbox-span">3 спальня</span>
                                                    <br/>
                                                    <Checkbox className="antd-checkbox"/><span className="antd-checkbox-span">4 спальни</span>
                                                </div>
                                                :
                                                ""
                                        }
                                        <hr className="filter-hr"/>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <button className="filter-footer-button">ПОКАЗАТЬ</button>
                                            </div>
                                            <div className="col-md-6">
                                                <button className="filter-footer-button">СБРОСИТЬ</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <span>Сортировать:</span>
                                <select onChange={()=>this.selectes()} className="form-select karkas-select" name="" id="">
                                    <option value="open1">Площадь по возрастанию</option>
                                    <option value="open2">Цена по возрастанию</option>
                                    <option value="open3">Цена по убыванию</option>
                                    <option value="open4">Площадь по возрастанию</option>
                                    <option value="open5">Площадь по возрастанию</option>
                                    <option value="open6">По популярности</option>
                                </select>
                                <div className="row mt-5" id="first1">
                                    <h3 className="karkasniyhome-h3">Цена по возрастанию</h3>
                                    <div className="col-md-4">
                                        <div className="karkashome-box">
                                            <img className="karkashome-box-img" src="images/karkashome-img1.png" width="100%" alt=""/>
                                            <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                            <span className="karkashome-box-span">Размер:</span><span className="karkashome-box-span2">4х6 м</span>
                                            <br/>
                                            <span className="karkashome-box-span">Площадь:</span><span className="karkashome-box-span2">34.8 м2</span>
                                            <br/>
                                            <span className="karkashome-box-span">Количество комнат:</span><span className="karkashome-box-span2">3 шт</span>
                                            <h4  className="karkashome-box-button">940 000 ₽</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="karkashome-box">
                                            <img className="karkashome-box-img" src="images/karkashome-img1.png" width="100%" alt=""/>
                                            <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                            <span className="karkashome-box-span">Размер:</span><span className="karkashome-box-span2">4х6 м</span>
                                            <br/>
                                            <span className="karkashome-box-span">Площадь:</span><span className="karkashome-box-span2">34.8 м2</span>
                                            <br/>
                                            <span className="karkashome-box-span">Количество комнат:</span><span className="karkashome-box-span2">3 шт</span>
                                            <h4  className="karkashome-box-button">940 000 ₽</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="karkashome-box">
                                            <img className="karkashome-box-img" src="images/karkashome-img1.png" width="100%" alt=""/>
                                            <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                            <span className="karkashome-box-span">Размер:</span><span className="karkashome-box-span2">4х6 м</span>
                                            <br/>
                                            <span className="karkashome-box-span">Площадь:</span><span className="karkashome-box-span2">34.8 м2</span>
                                            <br/>
                                            <span className="karkashome-box-span">Количество комнат:</span><span className="karkashome-box-span2">3 шт</span>
                                            <h4  className="karkashome-box-button">940 000 ₽</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5" id="first2">
                                    <h3 className="karkasniyhome-h3">Цена по убыванию</h3>
                                    <div className="col-md-4">
                                        <div className="karkashome-box">
                                            <img className="karkashome-box-img" src="images/karkashome-img1.png" width="100%" alt=""/>
                                            <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                            <span className="karkashome-box-span">Размер:</span><span className="karkashome-box-span2">4х6 м</span>
                                            <br/>
                                            <span className="karkashome-box-span">Площадь:</span><span className="karkashome-box-span2">34.8 м2</span>
                                            <br/>
                                            <span className="karkashome-box-span">Количество комнат:</span><span className="karkashome-box-span2">3 шт</span>
                                            <h4  className="karkashome-box-button">940 000 ₽</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="karkashome-box">
                                            <img className="karkashome-box-img" src="images/karkashome-img1.png" width="100%" alt=""/>
                                            <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                            <span className="karkashome-box-span">Размер:</span><span className="karkashome-box-span2">4х6 м</span>
                                            <br/>
                                            <span className="karkashome-box-span">Площадь:</span><span className="karkashome-box-span2">34.8 м2</span>
                                            <br/>
                                            <span className="karkashome-box-span">Количество комнат:</span><span className="karkashome-box-span2">3 шт</span>
                                            <h4  className="karkashome-box-button">940 000 ₽</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="karkashome-box">
                                            <img className="karkashome-box-img" src="images/karkashome-img1.png" width="100%" alt=""/>
                                            <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                            <span className="karkashome-box-span">Размер:</span><span className="karkashome-box-span2">4х6 м</span>
                                            <br/>
                                            <span className="karkashome-box-span">Площадь:</span><span className="karkashome-box-span2">34.8 м2</span>
                                            <br/>
                                            <span className="karkashome-box-span">Количество комнат:</span><span className="karkashome-box-span2">3 шт</span>
                                            <h4  className="karkashome-box-button">940 000 ₽</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5" id="first3">
                                    <h3 className="karkasniyhome-h3">Площадь по возрастанию</h3>
                                    <div className="col-md-4">
                                        <div className="karkashome-box">
                                            <img className="karkashome-box-img" src="images/karkashome-img1.png" width="100%" alt=""/>
                                            <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                            <span className="karkashome-box-span">Размер:</span><span className="karkashome-box-span2">4х6 м</span>
                                            <br/>
                                            <span className="karkashome-box-span">Площадь:</span><span className="karkashome-box-span2">34.8 м2</span>
                                            <br/>
                                            <span className="karkashome-box-span">Количество комнат:</span><span className="karkashome-box-span2">3 шт</span>
                                            <h4  className="karkashome-box-button">940 000 ₽</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="karkashome-box">
                                            <img className="karkashome-box-img" src="images/karkashome-img1.png" width="100%" alt=""/>
                                            <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                            <span className="karkashome-box-span">Размер:</span><span className="karkashome-box-span2">4х6 м</span>
                                            <br/>
                                            <span className="karkashome-box-span">Площадь:</span><span className="karkashome-box-span2">34.8 м2</span>
                                            <br/>
                                            <span className="karkashome-box-span">Количество комнат:</span><span className="karkashome-box-span2">3 шт</span>
                                            <h4  className="karkashome-box-button">940 000 ₽</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="karkashome-box">
                                            <img className="karkashome-box-img" src="images/karkashome-img1.png" width="100%" alt=""/>
                                            <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                            <span className="karkashome-box-span">Размер:</span><span className="karkashome-box-span2">4х6 м</span>
                                            <br/>
                                            <span className="karkashome-box-span">Площадь:</span><span className="karkashome-box-span2">34.8 м2</span>
                                            <br/>
                                            <span className="karkashome-box-span">Количество комнат:</span><span className="karkashome-box-span2">3 шт</span>
                                            <h4  className="karkashome-box-button">940 000 ₽</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="karkashome-section">
                                <h2 className="karkashome-section-h2">Специальные предложения</h2>
                                <ul className="karkashome-section-menu">
                                    <li className="karkashome-section-item2">
                                        <a className="karkashome-section-link" data-target="#demo" data-slide-to="0" href="#">Лидеры продаж</a>
                                    </li>
                                    <li className="karkashome-section-item">
                                        <a className="karkashome-section-link" data-target="#demo" data-slide-to="1" href="#">Новинки</a>
                                    </li>
                                    <li className="karkashome-section-item">
                                        <a className="karkashome-section-link" data-target="#demo" data-slide-to="2" href="#">Со скидкой</a>
                                    </li>
                                </ul>
                                <div id="demo" className="carousel slide carousel-fade" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row mt-5">
                                                <div className="col-md-3">
                                                    <div className="karkashome-box">
                                                        <img className="karkashome-box-img" src="images/tabs-img1.png" width="100%" alt=""/>
                                                        <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                                        <span className="karkashome-box-span">Размер:</span><span className="karkashome-box-span2">4х6 м</span>
                                                        <br/>
                                                        <span className="karkashome-box-span">Площадь:</span><span className="karkashome-box-span2">34.8 м2</span>
                                                        <br/>
                                                        <span className="karkashome-box-span">Количество комнат:</span><span className="karkashome-box-span2">3 шт</span>
                                                        <h4  className="karkashome-box-button">940 000 ₽</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="karkashome-box">
                                                        <img className="karkashome-box-img" src="images/tabs-img2.png" width="100%" alt=""/>
                                                        <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                                        <span className="karkashome-box-span">Размер:</span><span className="karkashome-box-span2">4х6 м</span>
                                                        <br/>
                                                        <span className="karkashome-box-span">Площадь:</span><span className="karkashome-box-span2">34.8 м2</span>
                                                        <br/>
                                                        <span className="karkashome-box-span">Количество комнат:</span><span className="karkashome-box-span2">3 шт</span>
                                                        <h4  className="karkashome-box-button">940 000 ₽</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="karkashome-box">
                                                        <img className="karkashome-box-img" src="images/tabs-img3.png" width="100%" alt=""/>
                                                        <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                                        <span className="karkashome-box-span">Размер:</span><span className="karkashome-box-span2">4х6 м</span>
                                                        <br/>
                                                        <span className="karkashome-box-span">Площадь:</span><span className="karkashome-box-span2">34.8 м2</span>
                                                        <br/>
                                                        <span className="karkashome-box-span">Количество комнат:</span><span className="karkashome-box-span2">3 шт</span>
                                                        <h4  className="karkashome-box-button">940 000 ₽</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="karkashome-box">
                                                        <img className="karkashome-box-img" src="images/tabs-img4.png" width="100%" alt=""/>
                                                        <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                                        <span className="karkashome-box-span">Размер:</span><span className="karkashome-box-span2">4х6 м</span>
                                                        <br/>
                                                        <span className="karkashome-box-span">Площадь:</span><span className="karkashome-box-span2">34.8 м2</span>
                                                        <br/>
                                                        <span className="karkashome-box-span">Количество комнат:</span><span className="karkashome-box-span2">3 шт</span>
                                                        <h4  className="karkashome-box-button">940 000 ₽</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row mt-5">
                                                <div className="col-md-3">
                                                    <div className="karkashome-box">
                                                        <img className="karkashome-box-img" src="images/tabs-img1.png" width="100%" alt=""/>
                                                        <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                                        <span className="karkashome-box-span">Размер:</span><span className="karkashome-box-span2">4х6 м</span>
                                                        <br/>
                                                        <span className="karkashome-box-span">Площадь:</span><span className="karkashome-box-span2">34.8 м2</span>
                                                        <br/>
                                                        <span className="karkashome-box-span">Количество комнат:</span><span className="karkashome-box-span2">3 шт</span>
                                                        <h4  className="karkashome-box-button">940 000 ₽</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="karkashome-box">
                                                        <img className="karkashome-box-img" src="images/tabs-img2.png" width="100%" alt=""/>
                                                        <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                                        <span className="karkashome-box-span">Размер:</span><span className="karkashome-box-span2">4х6 м</span>
                                                        <br/>
                                                        <span className="karkashome-box-span">Площадь:</span><span className="karkashome-box-span2">34.8 м2</span>
                                                        <br/>
                                                        <span className="karkashome-box-span">Количество комнат:</span><span className="karkashome-box-span2">3 шт</span>
                                                        <h4  className="karkashome-box-button">940 000 ₽</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="karkashome-box">
                                                        <img className="karkashome-box-img" src="images/tabs-img3.png" width="100%" alt=""/>
                                                        <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                                        <span className="karkashome-box-span">Размер:</span><span className="karkashome-box-span2">4х6 м</span>
                                                        <br/>
                                                        <span className="karkashome-box-span">Площадь:</span><span className="karkashome-box-span2">34.8 м2</span>
                                                        <br/>
                                                        <span className="karkashome-box-span">Количество комнат:</span><span className="karkashome-box-span2">3 шт</span>
                                                        <h4  className="karkashome-box-button">940 000 ₽</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="karkashome-box">
                                                        <img className="karkashome-box-img" src="images/tabs-img4.png" width="100%" alt=""/>
                                                        <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                                        <span className="karkashome-box-span">Размер:</span><span className="karkashome-box-span2">4х6 м</span>
                                                        <br/>
                                                        <span className="karkashome-box-span">Площадь:</span><span className="karkashome-box-span2">34.8 м2</span>
                                                        <br/>
                                                        <span className="karkashome-box-span">Количество комнат:</span><span className="karkashome-box-span2">3 шт</span>
                                                        <h4  className="karkashome-box-button">940 000 ₽</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row mt-5">
                                                <div className="col-md-3">
                                                    <div className="karkashome-box">
                                                        <img className="karkashome-box-img" src="images/tabs-img1.png" width="100%" alt=""/>
                                                        <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                                        <span className="karkashome-box-span">Размер:</span><span className="karkashome-box-span2">4х6 м</span>
                                                        <br/>
                                                        <span className="karkashome-box-span">Площадь:</span><span className="karkashome-box-span2">34.8 м2</span>
                                                        <br/>
                                                        <span className="karkashome-box-span">Количество комнат:</span><span className="karkashome-box-span2">3 шт</span>
                                                        <h4  className="karkashome-box-button">940 000 ₽</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="karkashome-box">
                                                        <img className="karkashome-box-img" src="images/tabs-img2.png" width="100%" alt=""/>
                                                        <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                                        <span className="karkashome-box-span">Размер:</span><span className="karkashome-box-span2">4х6 м</span>
                                                        <br/>
                                                        <span className="karkashome-box-span">Площадь:</span><span className="karkashome-box-span2">34.8 м2</span>
                                                        <br/>
                                                        <span className="karkashome-box-span">Количество комнат:</span><span className="karkashome-box-span2">3 шт</span>
                                                        <h4  className="karkashome-box-button">940 000 ₽</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="karkashome-box">
                                                        <img className="karkashome-box-img" src="images/tabs-img3.png" width="100%" alt=""/>
                                                        <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                                        <span className="karkashome-box-span">Размер:</span><span className="karkashome-box-span2">4х6 м</span>
                                                        <br/>
                                                        <span className="karkashome-box-span">Площадь:</span><span className="karkashome-box-span2">34.8 м2</span>
                                                        <br/>
                                                        <span className="karkashome-box-span">Количество комнат:</span><span className="karkashome-box-span2">3 шт</span>
                                                        <h4  className="karkashome-box-button">940 000 ₽</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="karkashome-box">
                                                        <img className="karkashome-box-img" src="images/tabs-img4.png" width="100%" alt=""/>
                                                        <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                                        <span className="karkashome-box-span">Размер:</span><span className="karkashome-box-span2">4х6 м</span>
                                                        <br/>
                                                        <span className="karkashome-box-span">Площадь:</span><span className="karkashome-box-span2">34.8 м2</span>
                                                        <br/>
                                                        <span className="karkashome-box-span">Количество комнат:</span><span className="karkashome-box-span2">3 шт</span>
                                                        <h4  className="karkashome-box-button">940 000 ₽</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                        <span className="next"><div className="karkashome-section-left"><img src="images/left.png" className="left-icon" alt=""/></div></span>
                                    </a>
                                    <a className="carousel-control-next" href="#demo" data-slide="next">
                                        <span className="next"><div className="karkashome-section-right"><img src="images/right.png" className="right-icon" alt=""/></div></span>
                                    </a>
                                </div>



                                <div id="demo2" className="carousel slide car-z" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <h3 className="karkashome-section-h3">Наши работы</h3>
                                        <div className="carousel-item active">
                                            <div className="row mt-5">
                                                <div className="col-md-3">
                                                    <div className="karkashome-box2">
                                                        <img className="karkashome-box-img" src="images/karkashome-carousel-img1.png" height="350px" width="100%" alt=""/>
                                                        <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="karkashome-box2">
                                                        <img className="karkashome-box-img" src="images/karkashome-carousel-img2.png" height="350px" width="100%" alt=""/>
                                                        <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="karkashome-box2">
                                                        <img className="karkashome-box-img" src="images/karkashome-carousel-img3.png" height="350px" width="100%" alt=""/>
                                                        <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="karkashome-box2">
                                                        <img className="karkashome-box-img" src="images/karkashome-carousel-img4.png" height="350px" width="100%" alt=""/>
                                                        <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row mt-5">
                                                <div className="col-md-3">
                                                    <div className="karkashome-box2">
                                                        <img className="karkashome-box-img" src="images/karkashome-carousel-img1.png" height="350px" width="100%" alt=""/>
                                                        <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="karkashome-box2">
                                                        <img className="karkashome-box-img" src="images/karkashome-carousel-img2.png" height="350px" width="100%" alt=""/>
                                                        <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="karkashome-box2">
                                                        <img className="karkashome-box-img" src="images/karkashome-carousel-img3.png" height="350px" width="100%" alt=""/>
                                                        <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="karkashome-box2">
                                                        <img className="karkashome-box-img" src="images/karkashome-carousel-img4.png" height="350px" width="100%" alt=""/>
                                                        <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row mt-5">
                                                <div className="col-md-3">
                                                    <div className="karkashome-box2">
                                                        <img className="karkashome-box-img" src="images/karkashome-carousel-img1.png" height="350px" width="100%" alt=""/>
                                                        <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="karkashome-box2">
                                                        <img className="karkashome-box-img" src="images/karkashome-carousel-img2.png" height="350px" width="100%" alt=""/>
                                                        <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="karkashome-box2">
                                                        <img className="karkashome-box-img" src="images/karkashome-carousel-img3.png" height="350px" width="100%" alt=""/>
                                                        <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="karkashome-box2">
                                                        <img className="karkashome-box-img" src="images/karkashome-carousel-img4.png" height="350px" width="100%" alt=""/>
                                                        <h4 className="karkashome-box-h4">Каркасный дом <br/> с балконом LK-2</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="carousel-control-next" href="#demo2" data-slide="next">
                                        <span className="next"><div className="karkashome-section-right2"><img src="images/right.png" className="right-icon" alt=""/></div></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default KarkasniyDoma;