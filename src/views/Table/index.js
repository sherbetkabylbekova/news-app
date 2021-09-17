import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container, Table} from "react-bootstrap";
import Layout from "../../components/Layout";

const Tables = () => {
    const [allList,setAllList] = useState([])
    useEffect(()=> {
        axios("https://613dad3b94dbd600172ab991.mockapi.io/api/callback")
            .then(({data}) => setAllList(data))
    })
    return (
        <Layout>
            <Container>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        allList.map((el,idx) =>
                            <tr>
                                <td>{idx + 1}</td>
                                <td>{el.name}</td>
                                <td>{el.number}</td>
                                <td>{el.email}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </Container>
        </Layout>
    );
};

export default Tables;