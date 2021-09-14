import React from 'react';
import {Button, Form,Container} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import Layout from "../../components/Layout";

const Login = () => {
    const history = useHistory()
    return (
       <Layout>
           <Container>
               <Form>
                   <Form.Group className="my-5" controlId="formBasicEmail">
                       <Form.Label>Электронная почта</Form.Label>
                       <Form.Control type="email" placeholder="почта" />
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="formBasicPassword">
                       <Form.Label>Пароль</Form.Label>
                       <Form.Control type="password" placeholder="пароль" />
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="formBasicCheckbox">
                       <Form.Check type="checkbox" label="Сохранить пароль" />
                   </Form.Group>
                   <Button variant="outline-primary">Войти</Button>
                   <div className="my-5">
                       <Button variant="outline-primary" onClick={() => history.goBack()}>Назад</Button>
                   </div>
               </Form>
           </Container>
       </Layout>
    );
};

export default Login;