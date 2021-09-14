import React from 'react';
import {ReactComponent as LogoSvg} from "../../icon/diamond.svg"
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Container>
                <div className="d-flex align-items-center justify-content-between">
                   <div className="d-flex align-items-center">
                       <span><LogoSvg/></span>
                       <h2 className=" mx-2">spletnik</h2>
                   </div>
                    <ul className="header d-flex align-items-center justify-content-between">
                            <li className="me-4"><Link to="/">ГЛАВНАЯ</Link></li>
                        <li className="me-4"><Link to="/news">НОВОСТИ</Link></li>
                        <li className="me-4"><Link to="/login">ВОЙТИ</Link></li>
                        <li className="me-4"><Link to="/registr">ЗАРЕГИСТРИРОВАТЬСЯ</Link></li>
                    </ul>
                </div>
            </Container>
        </header>
    );
};

export default Header;