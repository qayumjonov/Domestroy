import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Individual extends Component {
    render() {
        return (
            <div>
               <div className="individual">
                   <div className="row">
                       <div className="col-md-6">
                           <div className="container">
                               <div className="individual-forward">
                                   <div className="container">
                                       <Link className="karkasniyhome-a" to={'/'}>Главная</Link>
                                       <span className="karkasniyhome-span"><img src="images/kar-right-icon.png" alt=""/></span>
                                       <Link className="karkasniyhome-a"  to={'/Заказчику'}>Заказчику</Link>
                                       <Link className="karkasniyhome-a"  to={'#'}>Индивидуальное-строительство</Link>
                                   </div>
                               </div>
                               <div className="individual-texts">
                                   <h1 className="individual-h1">Индивидуальное <br/> строительство</h1>
                                   <p className="individual-p">Мы ценим каждого клиента и сделаем всю работу сами. <br/> Воплощаем в жизнь проекты, создавая дома для <br/> комфортной жизни.</p>
                                   <button className="individual-button">
                                       <img src="images/right-idividual.png" alt=""/>
                                   </button>
                                   <p className="individual-p2">
                                       Рассчитать стоимость <br/>
                                       индивидуального проекта
                                   </p>
                               </div>
                           </div>
                       </div>
                       <div className="col-md-6">
                           <img className="individual-img2" src="images/mazgii.png" alt=""/>
                       </div>
                   </div>
               </div>
                <div className="container">
                <h1 className="individual-body-h1">
                    Как подать заявку <br/>
                    на индивидуальное строительство?
                </h1>
                <p className="individual-body-p">
                    Хотите расчитать стоимость строительных работ, заполните форму для расчета. Вы вводите необходимые данные, отправляете их нашим <br/> специалистам. Они определяют стоимость строительства, присылают вам результат расчетов.
                </p>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="individual-body">
                                <h4 className="individual-body-h4">Что нужно указать для расчета стоимости?</h4>
                                <p>Для расчета цены строительных работ понадобится указать:</p>
                                <ul>
                                    <li> Тип сооружаемого объекта (Каркасный дом/ баня /беседка из мини-бруса/ бытовка)</li>
                                    <li> Площадь сооружаемого объекта.</li>
                                    <li> Тип фундаментной основы (блочный/ свайно-винтовой, не нужен).</li>
                                    <li>Толщину стеновых поверхностей (от пятидесяти до двухсот миллиметров).</li>
                                    <li>   Количество этажей (один, полтора, два, с мансардным этажом).</li>
                                    <li> Адрес места строительства (для расчета киллометража)</li>
                                    <li>Имя заказчика.</li>
                                    <li>  Есть возможность прикрепления файла. Также заказчик может в
                                        произвольной форме написать собственные пожелания к проведению с
                                        троительных работ.</li>
                                    <li>  После ввода всех необходимы данных требуется
                                        нажать на кнопку «Отправить»
                                    </li>
                                    <li>
                                        Ответ поступит на телефонный номер либо же электронную почту заказчика
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Individual;