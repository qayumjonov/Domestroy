import React, {Component} from 'react';
import {AvForm,AvField} from "availity-reactstrap-validation";
class Registration extends Component {
    render() {
        return (
            <div>
                <div className="registration">
                    <div className="registration-card">
                        <div className="row offset-3">
                            <div className="col-md-8">
                                <div className="reg">
                                    <h1 className="reg-h1">Рассчитать стоимость</h1>
                                    <AvForm>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label htmlFor="home">Что желаете построить? *</label>
                                                <AvField id="home" name="home" type="select" className="mt-2 form-control reg-input" placeholder="Дом" required/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="address">Адрес строительства *</label>
                                                <AvField id="address" name="address" type="text" className="mt-2 reg-input2 form-control" placeholder="Введите адрес строительства" required/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Размер объекта*</label> <br/>
                                                <button type="button" className="reg-button">4</button>
                                                <button type="button" className="reg-button">x</button>
                                                <button type="button" className="reg-button">8</button>
                                                <button type="button" className="reg-button">m</button>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="filename">Если у Вас есть проект/чертеж</label>
                                                <AvField id="filename" name="filename" type="file" className="mt-2 form-control reg-input2" placeholder="+ Выбрать файл" required/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label htmlFor="kodproduct">Название или код товара</label>
                                                <AvField id="kodproduct" name="kodproduct" type="text" className="mt-2 reg-input form-control" placeholder="Введите название или код товара" required/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="firstname">Имя*</label>
                                                <AvField id="firstname" name="firstname" type="text" className="mt-2 reg-input2 form-control" placeholder="Ваше имя" required/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label htmlFor="fundament">Фундамент *</label>
                                                <AvField id="fundament" name="fundament" type="select" className="mt-2 form-control reg-input" placeholder="fundament" required/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="phonenumber">Телефон*</label>
                                                <AvField id="phonenumber" name="phonenumber" type="number" className="mt-2 form-control reg-input2" placeholder="+7 (900) 000-00-00" required/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label htmlFor="sten">Утепление стен *</label>
                                                <AvField id="sten" name="sten" type="select" className="mt-2 form-control reg-input" placeholder="Без утепления" required/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="email">Электронная почта</label>
                                                <AvField id="email" name="email" type="email" className="mt-2 form-control reg-input2" placeholder="Без утепления" required/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label htmlFor="etaj">Этажность *</label>
                                                <AvField id="etaj" type="select" className="reg-input" name="etaj" placeholder="1 этаж"/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="comment">Оставить комментарий</label>
                                                <AvField id="comment" type="textarea" className="reg-input2" name="comment" placeholder="Введите комментарий"/>
                                            </div>
                                        </div>
                                        <button className="submit-btn" type="submit">ОТПРАВИТЬ</button>
                                    </AvForm>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registration;  