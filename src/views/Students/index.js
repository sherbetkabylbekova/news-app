import React, {useEffect, useState} from 'react';
import {Container, Table} from "react-bootstrap";
import Layout from "../../components/Layout";
import axios from "axios";
import Modal from 'react-modal';
import {useForm} from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faTrash,} from '@fortawesome/free-solid-svg-icons'

const Students = () => {
    const [allList, setAllList] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const onSubmit = (data) => {
        axios.post("https://613dad3b94dbd600172ab991.mockapi.io/api/students", data)
            .then(({data: student}) => {
                setAllList([...allList, student])
                setModalIsOpen(false)
                reset()
            })
    }
    const customStyles = {
        content: {top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)',},
    }
    const deleteStudents = (id) => {
        axios.delete(`https://613dad3b94dbd600172ab991.mockapi.io/api/todos/${id}`)
            .then(() => setAllList(allList.filter(el => el.id !== id)))
    }
    useEffect((id) => {
        axios("https://613dad3b94dbd600172ab991.mockapi.io/api/students")
            .then(({data}) => setAllList((data)))
    }, [])
    return (
        <Layout>
            <Container>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Name</th>
                        <th>Number phone</th>
                        <th>Contract amount</th>
                        <th>Paid</th>
                        <th>Laptop</th>
                        <th>Group</th>
                        <th>Comment</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        allList.map((el, idx) =>
                            <tr>
                                <td>{idx + 1}</td>
                                <td>{el.name}</td>
                                <td>{el.phone}</td>
                                <td>{el.contracts}</td>
                                <td>{el.paid}</td>
                                <td>{el.laptop}</td>
                                <td>{el.group}</td>
                                <td>{el.comment}</td>
                                <td>{el.status}</td>
                                <td>
                                    <button type="button" className="btn btn-outline-warning me-2" ><FontAwesomeIcon icon={faEdit} /></button>
                                    <button type="button" className="btn btn-outline-danger" onClick={() => deleteStudents(el.id)} ><FontAwesomeIcon icon={faTrash} /></button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
                <button type="button" className="btn btn-info my-4 d-block ms-auto"
                        onClick={() => setModalIsOpen(true)}>Добавить новый контакт
                </button>
                <Modal isOpen={modalIsOpen} // onRequestClose={closeModal}
                       style={customStyles} contentLabel="Example Modal">
                    <div>ЗАПОЛНИТЕ ЗАЯВКУ</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div className="d-flex">
                                <div className="me-3">
                                    <label htmlFor="name">Введите имя</label>
                                    <input type="text" className="w-100 border-2 h-8 form-control"
                                           {...register("name", {required: true})}/>
                                    {errors.name && <span className="text-danger">Обязательное поле для заполнения!</span>}
                                </div>
                                <div className="me-3">
                                    <label htmlFor="number">Номер телефона</label>
                                    <input type="text" className="w-100 border-2 h-8 form-control"
                                           {...register("number", {required: true})}/>
                                    {errors.number && <span className="text-danger">Обязательное поле для заполнения!</span>}
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="me-3">
                                    <label htmlFor="contract">Сумма контракта</label>
                                    <input type="text" className="w-100 border-2 h-8 form-control"
                                           {...register("contract", {required: true})}/>
                                    {errors.contract && <span className="text-danger">Обязательное поле для заполнения!</span>}
                                </div>
                                <div className="me-3">
                                    <label htmlFor="paid">Оплатил</label>
                                    <input type="text" className="w-100 border-2 h-8 form-control"
                                           {...register("paid", {required: true})}/>
                                    {errors.paid && <span className="text-danger">Обязательное поле для заполнения!</span>}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="laptop">Ноутбук</label>
                                <input type="text" className="w-100 border-2 h-8 form-control"
                                       {...register("laptop", {required: true})}/>
                                {errors.laptop && <span className="text-danger">Обязательное поле для заполнения!</span>}
                            </div>
                            <div className="d-flex">
                                <div className="me-3">
                                    <label htmlFor="group">Группа</label>
                                    <select id="group" className="w-100 border-2 h-8 form-control">
                                        <option value="ВЫБЕРИТЕ ГРУППУ" disabled={true} selected={true}>Выберите
                                            группу
                                        </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    {errors.laptop && <span className="text-danger">Обязательное поле для заполнения!</span>}
                                </div>
                                <div className="me-3">
                                    <label htmlFor="group">Статус</label>
                                    <select id="status" className="w-100 border-2 h-8 form-control">
                                        <option value="ВЫБЕРИТЕ СТАТУС" disabled={true} selected={true}>Выберите
                                            статус
                                        </option>
                                        <option value="activ">учится</option>
                                        <option value="notactiv">отчислен</option>
                                        <option value="academ">академический отпуск</option>
                                        <option value="academ">зачислен</option>
                                    </select>
                                    {errors.laptop && <span className="text-danger">Обязательное поле для заполнения!</span>}
                                </div>
                                <div className="me-3">
                                    <label htmlFor="genre">Пол</label>
                                    <select id="genre" className="w-100 border-2 h-8 form-control">
                                        <option value="ВЫБЕРИТЕ ПОЛ" disabled={true} selected={true}>Выберите пол
                                        </option>
                                        <option value="2">мужской</option>
                                        <option value="1">женский</option>
                                    </select>
                                    {errors.laptop && <span className="text-danger">Обязательное поле для заполнения!</span>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="group">Введите комментарий</label>
                                <input type="text" className="w-100 border-2 h-8 p-3 form-control"/>
                            </div>
                        </div>
                        <button className="btn btn-info my-4 d-block ms-auto">Добавить</button>
                    </form>
                </Modal>
            </Container>
        </Layout>
    );
};

export default Students;