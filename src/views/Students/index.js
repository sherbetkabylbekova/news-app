import React, {useEffect, useState} from 'react';
import {Container, Table} from "react-bootstrap";
import Layout from "../../components/Layout";
import axios from "axios";
import Modal from 'react-modal';
import {useForm} from "react-hook-form";
import Button from "../../components/Button";
import StudentItem from "../../components/StudentItem/StudentItem";
import TableList from "../../components/TableList";
import FormInput from "../../components/FormInput";
import SelectList from "../../components/SelectList";

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
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    }
    const deleteStudents = ({id}) => {
        console.log(id)
        axios.delete(`https://613dad3b94dbd600172ab991.mockapi.io/api/students/${id}`, allList)
            .then(() => setAllList(allList.filter(el => el.id !== id)))
    }
    useEffect(() => {
        axios("https://613dad3b94dbd600172ab991.mockapi.io/api/students")
            .then(({data}) => setAllList((data)))
    }, [])
    return (
        <Layout>
            <Container>
                <Table striped bordered hover>
                   <TableList />
                    <tbody>
                    {
                        allList.map((el, idx) =>
                            <StudentItem el={el} idx={idx} deleteStudents={deleteStudents}/>
                        )
                    }
                    </tbody>
                </Table>
                <Button onClick={() => setModalIsOpen(true)} title={'???????????????? ???????????? ????????????????'}/>
                <Modal isOpen={modalIsOpen} // onRequestClose={closeModal}
                       style={customStyles} contentLabel="Example Modal">
                    <div>?????????????????? ????????????</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div className="d-flex">
                                <div className="me-3">
                                    <FormInput name={"?????????????? ??????"} register={register}  errors={errors} required/>
                                </div>
                                <div className="me-3">
                                    <FormInput name={"?????????????? ??????????"} register={register}  errors={errors} required/>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="me-3">
                                    <FormInput name={"?????????? ??????????????????"} register={register}  errors={errors} required/>
                                </div>
                                <div className="me-3">
                                    <FormInput name={"??????????????"} register={register}  errors={errors} required/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <FormInput name={"??????????????"} register={register}  errors={errors} required/>
                            </div>
                            <div className="d-flex">
                                <div className="me-3">
                                   <SelectList name='group' label="????????????" values={[1,2,3,4]} errors={errors} />
                                </div>
                                <div className="me-3">
                                    <SelectList name='group' label="????????????" values={["????????????", "????????????????", "?????????????????????????? ????????????", "????????????????"]} errors={errors} />
                                </div>
                                <div className="me-3">
                                    <SelectList name='group' label="??????" values={["??????????????", "??????????????"]} errors={errors} />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="group">?????????????? ??????????????????????</label>
                                <textarea className="w-100 border-2 h-8 p-3 form-control"/>
                            </div>
                        </div>
                        <Button title={'????????????????'}/>
                    </form>
                </Modal>
            </Container>
        </Layout>
    );
};
export default Students;