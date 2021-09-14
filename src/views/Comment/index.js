import React from 'react';
import {FloatingLabel, FormControl,Form,Button} from "react-bootstrap";

const Comment = () => {
    return (
        <>
            <FloatingLabel controlId="floatingTextarea2" label="Напишите коментарий">
                <Form.Control as="textarea" placeholder="Leave a comment here" style={{height: '100px'}}/>
            </FloatingLabel>
            <Button variant="outline-primary">Отправить комментарий</Button>
        </>
    );
};

export default Comment;