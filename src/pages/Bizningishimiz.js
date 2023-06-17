import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Bizningishimiz extends Component {
    render() {
        return (
            <div>
                <div className="karkasniytovarov-forward">
                    <div className="container">
                        <Link className="karkasniyhome-a" to={'/'}>Главная</Link>
                        <span className="karkasniyhome-span"><img src="images/kar-right-icon.png" alt=""/></span>
                        <Link className="karkasniyhome-a"  to={'#'}>Наши работы</Link>
                    </div>
                </div>
                <div className="ourjobs">
                    <h1 className="ourjobs-h1">Наши работы</h1>
                    <ul className="nav ourjobs-menu">
                        <li className="nav-item ourjobs-item">
                            <a className="nav-link text-dark ourjobs-link active" data-toggle="tab" href="#home">Каркасные дома</a>
                        </li>
                        <li className="nav-item ourjobs-item">
                            <a className="nav-link ourjobs-link" data-toggle="tab" href="#menu1">Бани</a>
                        </li>
                        <li className="nav-item ourjobs-item">
                            <a className="nav-link ourjobs-link" data-toggle="tab" href="#menu2">Беседки</a>
                        </li>
                        <li className="nav-item ourjobs-item">
                            <a className="nav-link ourjobs-link" data-toggle="tab" href="#menu3">Бытовки</a>
                        </li>
                    </ul>


                    <div className="tab-content mt-3">
                        <div id="home" className="container tab-pane active"><br/>
                          <div className="row">
                              <div className="col-md-4">
                                  <div className="ourjob-box">
                                      <img src="images/ourjob-img-1.png" width="100%" alt=""/>
                                      <div className="ourjob-box-hover">
                                          <p>Каркасный дом с балконом LK-2</p>
                                          <button><img src="images/mazgi-right.png" alt=""/></button>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="ourjob-box">
                                      <img src="images/ourjob-img-2.png" width="100%" alt=""/>
                                      <div className="ourjob-box-hover">
                                          <p>Каркасный дом с балконом LK-2</p>
                                          <button><img src="images/mazgi-right.png" alt=""/></button>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="ourjob-box">
                                      <img src="images/ourjob-img-3.png" width="100%" alt=""/>
                                      <div className="ourjob-box-hover">
                                          <p>Каркасный дом с балконом LK-2</p>
                                          <button><img src="images/mazgi-right.png" alt=""/></button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="ourjob-box">
                                        <img src="images/ourjob-img-4.png" width="100%" alt=""/>
                                        <div className="ourjob-box-hover">
                                            <p>Каркасный дом с балконом LK-2</p>
                                            <button><img src="images/mazgi-right.png" alt=""/></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="ourjob-box">
                                        <img src="images/ourjob-img-5.png" width="100%" alt=""/>
                                        <div className="ourjob-box-hover">
                                            <p>Каркасный дом с балконом LK-2</p>
                                            <button><img src="images/mazgi-right.png" alt=""/></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="ourjob-box">
                                        <img src="images/ourjob-img-6.png" width="100%" alt=""/>
                                        <div className="ourjob-box-hover">
                                            <p>Каркасный дом с балконом LK-2</p>
                                            <button><img src="images/mazgi-right.png" alt=""/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="ourjob-box">
                                        <img src="images/ourjob-img-7.png" width="100%" alt=""/>
                                        <div className="ourjob-box-hover">
                                            <p>Каркасный дом с балконом LK-2</p>
                                            <button><img src="images/mazgi-right.png" alt=""/></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="ourjob-box">
                                        <img src="images/ourjob-img-8.png" width="100%" alt=""/>
                                        <div className="ourjob-box-hover">
                                            <p>Каркасный дом с балконом LK-2</p>
                                            <button><img src="images/mazgi-right.png" alt=""/></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="ourjob-box">
                                        <img src="images/ourjob-img-9.png" width="100%" alt=""/>
                                        <div className="ourjob-box-hover">
                                            <p>Каркасный дом с балконом LK-2</p>
                                            <button><img src="images/mazgi-right.png" alt=""/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="menu1" className="container tab-pane fade"><br/>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="ourjob-box">
                                        <img src="images/ourjob-img-4.png" width="100%" alt=""/>
                                        <div className="ourjob-box-hover">
                                            <p>Каркасный дом с балконом LK-2</p>
                                            <button><img src="images/mazgi-right.png" alt=""/></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="ourjob-box">
                                        <img src="images/ourjob-img-5.png" width="100%" alt=""/>
                                        <div className="ourjob-box-hover">
                                            <p>Каркасный дом с балконом LK-2</p>
                                            <button><img src="images/mazgi-right.png" alt=""/></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="ourjob-box">
                                        <img src="images/ourjob-img-6.png" width="100%" alt=""/>
                                        <div className="ourjob-box-hover">
                                            <p>Каркасный дом с балконом LK-2</p>
                                            <button><img src="images/mazgi-right.png" alt=""/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="menu2" className="container tab-pane fade"><br/>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="ourjob-box">
                                        <img src="images/ourjob-img-7.png" width="100%" alt=""/>
                                        <div className="ourjob-box-hover">
                                            <p>Каркасный дом с балконом LK-2</p>
                                            <button><img src="images/mazgi-right.png" alt=""/></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="ourjob-box">
                                        <img src="images/ourjob-img-8.png" width="100%" alt=""/>
                                        <div className="ourjob-box-hover">
                                            <p>Каркасный дом с балконом LK-2</p>
                                            <button><img src="images/mazgi-right.png" alt=""/></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="ourjob-box">
                                        <img src="images/ourjob-img-9.png" width="100%" alt=""/>
                                        <div className="ourjob-box-hover">
                                            <p>Каркасный дом с балконом LK-2</p>
                                            <button><img src="images/mazgi-right.png" alt=""/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="menu3" className="container tab-pane fade"><br/>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="ourjob-box">
                                        <img src="images/ourjob-img-1.png" width="100%" alt=""/>
                                        <div className="ourjob-box-hover">
                                            <p>Каркасный дом с балконом LK-2</p>
                                            <button><img src="images/mazgi-right.png" alt=""/></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="ourjob-box">
                                        <img src="images/ourjob-img-2.png" width="100%" alt=""/>
                                        <div className="ourjob-box-hover">
                                            <p>Каркасный дом с балконом LK-2</p>
                                            <button><img src="images/mazgi-right.png" alt=""/></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="ourjob-box">
                                        <img src="images/ourjob-img-3.png" width="100%" alt=""/>
                                        <div className="ourjob-box-hover">
                                            <p>Каркасный дом с балконом LK-2</p>
                                            <button><img src="images/mazgi-right.png" alt=""/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="tab-p">
                        «ДомСтрой» — это предприятие, занимающееся строительством дачных домов и коттеджей, а также бань и беседок и т.д.. Мы можем предложить своим клиентам как типовые планировки из нашего каталога, так и реализовать индивидуальные.
                            <br/>
                        Ответственно относимся к строительству, контролируем все этапы возведения постройки. Дорожим нашими клиентами, а в ответ, они возвращаются к нам снова,  а  так же рекомендуют своим друзьям и знакомым
                    </p>
                </div>
                <div className="ourjobs-work">
                    <h4 className="ourjobs-work-h4">Отзывы</h4>
                    <div className="row">
                        <div className="col-md-10">
                            <div className="ourjobs-work-box">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="ourjobs-work-text">
                                            <h3>Джон Джон Джон</h3>
                                            <p>Изготовление каркасного дома с балконом</p>
                                        </div>
                                    </div>
                                    <hr className="ourjob-work-hr"/>
                                    <div className="col-md-6">
                                        <div className="ourjobs-work-star">
                                            <img src="images/star.png" alt=""/>
                                            <img src="images/star.png" alt=""/>
                                            <img src="images/star.png" alt=""/>
                                            <img src="images/star.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.</p>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10">
                            <div className="ourjobs-work-box">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="ourjobs-work-text">
                                            <h3>Джон Джон Джон</h3>
                                            <p>Изготовление каркасного дома с балконом</p>
                                        </div>
                                    </div>
                                    <hr className="ourjob-work-hr"/>
                                    <div className="col-md-6">
                                        <div className="ourjobs-work-star">
                                            <img src="images/star.png" alt=""/>
                                            <img src="images/star.png" alt=""/>
                                            <img src="images/star.png" alt=""/>
                                            <img src="images/star.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.</p>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10">
                            <div className="ourjobs-work-box">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="ourjobs-work-text">
                                            <h3>Джон Джон Джон</h3>
                                            <p>Изготовление каркасного дома с балконом</p>
                                        </div>
                                    </div>
                                    <hr className="ourjob-work-hr"/>
                                    <div className="col-md-6">
                                        <div className="ourjobs-work-star">
                                            <img src="images/star.png" alt=""/>
                                            <img src="images/star.png" alt=""/>
                                            <img src="images/star.png" alt=""/>
                                            <img src="images/star.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.</p>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bizningishimiz;