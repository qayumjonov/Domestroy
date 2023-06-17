import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Komplektatsiya extends Component {
    render() {
        return (
            <div>
                <div className="komplektaksiya">
                    <div className="karkasniytovarov-forward">
                        <div className="container">
                            <Link className="karkasniyhome-a" to={'/'}>Главная</Link>
                            <span className="karkasniyhome-span"><img src="images/kar-right-icon.png" alt=""/></span>
                            <Link className="karkasniyhome-a"  to={'#'}>Комплектация</Link>
                        </div>
                        <div className="container">
                            <h1 className="komplektatsiya-h1">Комплектация</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Komplektatsiya;