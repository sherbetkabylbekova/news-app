import React, {useState} from 'react';
import {ReactComponent as LogoSvg} from "../../icon/diamond.svg"
import {Container} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import axios from "axios";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [callback, setCallback] = useState({})
    const [sentSuccess, setSentSuccess] = useState(false)
    const handleInput = (e) => {
        setCallback({...callback,[e.target.name] : e.target.value})
    }

   const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://613dad3b94dbd600172ab991.mockapi.io/api/callback", callback)
            .then(() => {
                setSentSuccess(true)
                setTimeout(() => {
                    setIsOpen(false)
                    setSentSuccess(false)
                },2000)
            }
       )
    }

    return (
        <header>
            <Container>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <span><LogoSvg/></span>
                        <h2 className=" mx-2">spletnik</h2>
                    </div>
                    <ul className="header d-flex align-items-center justify-content-between">
                        <li className="me-4"><NavLink to="/">ГЛАВНАЯ</NavLink></li>
                        <li className="me-4"><NavLink to="/news">НОВОСТИ</NavLink></li>
                        <li className="me-4"><NavLink to="/login">ВОЙТИ</NavLink></li>
                        <li className="me-4"><NavLink to="/registr">ЗАРЕГИСТРИРОВАТЬСЯ</NavLink></li>
                        <button type="button" className="btn btn-info my-3" onClick={() => setIsOpen(true)}>Связаться с
                            нами
                        </button>
                    </ul>
                </div>
                {
                    isOpen &&
                    <div className="modal-window">
                        <div className="modal-content">
                            {
                                sentSuccess ? "Успешно отправлено" :
                                    <form onSubmit={handleSubmit}>
                                    <h4 className="text-center">Обратная связь</h4>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                        <input type="name" className="form-control" id="exampleInputName"
                                               aria-describedby="nameHelp" onChange={handleInput}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                               aria-describedby="emailHelp" onChange={handleInput}/>

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputNumber" className="form-label">Number</label>
                                        <input type="number" className="form-control" id="exampleInputNumber"
                                               onChange={handleInput}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            }
                            <button className="close-modal" onClick={() => {
                                setIsOpen(false)
                                setSentSuccess(false)
                            }
                            }
                            >⛌</button>
                        </div>
                    </div>
                }
            </Container>
        </header>
    );
};

export default Header;