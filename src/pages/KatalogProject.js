import React, {Component} from 'react';
import {Link} from "react-router-dom";

class KatalogProject extends Component {
    render() {
        return (
            <div>
                <div className="katalogproject">
                    <div className="container">
                        <div className="katalogproject-texts">
                            <Link className="katalogproject-a" to="/">Главная > Каталог</Link>
                            <h1 className="katalogproject-h1">Каталог построек</h1>
                            <p className="katalogproject-p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <br/> magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="katalogproject-imgs">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="katalogproject-img1">
                                            <img src="images/katalogproject-img2.jpg" width="100%" height="450px" alt=""/>
                                            <Link className="text-decoration-none" to={'Каркасные-дома'}>
                                                <div className="hover-box2">
                                                    <h1>Каркасные дома</h1>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="katalog-z">
                                <div className="row">

                                        <div className="col-md-6">
                                            <img src="images/katalogproject-img3.jpg" width="100%" height="420px" alt=""/>
                                            <Link className="text-decoration-none" to={'Каркасные-дома'}>
                                                <div className="hover-box">
                                                    <h1>Каркасные дома</h1>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-md-6">
                                            <img src="images/katalogproject-img5.jpg" width="100%" height="420px" alt=""/>
                                            <Link className="text-decoration-none" to={'Каркасные-дома'}>
                                                <div className="hover-box">
                                                    <h1>Каркасные дома</h1>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="katalog-z">
                                <div className="row">

                                        <div className="col-md-6">
                                            <img src="images/katalogproject-img6.jpg" width="100%" height="420px" alt=""/>
                                            <Link className="text-decoration-none" to={'Каркасные-дома'}>
                                                <div className="hover-box">
                                                    <h1>Каркасные дома</h1>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-md-6">
                                            <img src="images/katalogproject-img7.jpg" width="100%" height="420px" alt=""/>
                                            <Link className="text-decoration-none" to={'Каркасные-дома'}>
                                                <div className="hover-box">
                                                    <h1>Каркасные дома</h1>
                                                </div>
                                            </Link>
                                        </div>
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

export default KatalogProject;