import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Notfound extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <img src="images/404.jpeg" alt="" width="100%" height="500px"/>
                            <Link to={"/"} className="text-center text-dark text-decoration-none note-link">Bosh sahifaga otish</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Notfound;