import React from 'react';
import {Button, Container, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import Layout from "../../components/Layout";

const Registr = () => {
    const history = useHistory()
    return (
    <Layout>
        <Container>
            <Form>
                <Form.Group className="my-5" controlId="formBasicEmail">
                    <div className="my-3">
                        <Form.Label>Регистрация</Form.Label>
                    </div>
                    <Form.Label>Вводите адрес</Form.Label>
                    <Form.Control type="email" placeholder="почта" />
                    <Form.Text className="text-muted">
                        Придумайте электронную почту
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="пароль" />

                    <Form.Text className="text-muted">
                        Придумайте пароль
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Сохранить пароль" />
                </Form.Group>
                <Button variant="outline-primary">Зарегистрироваться</Button>
                <div className="my-5">
                    <Button variant="outline-primary" onClick={() => history.goBack()}>Назад</Button>
                </div>
            </Form>
        </Container>
    </Layout>
    );
};

export default Registr;