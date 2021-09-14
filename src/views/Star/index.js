import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory, useParams} from "react-router-dom"
import Layout from "../../components/Layout";
import Comment from "../Comment";
import {Container,Row,Button} from "react-bootstrap";


const Star = () => {
    const [news, setNews] = useState([])
    const params = useParams()
    const history = useHistory()

    useEffect(() => {
        axios(`https://613dad3b94dbd600172ab991.mockapi.io/api/news/${params.id}`)
            .then(({data}) => setNews(data))
    }, [params.id])
    return (
        <Layout>
            <Container>
                <Row>
                    <div className="col-md-6 col-sm-6 my-5">
                        <img className="star-img" src={news.img} alt=""/>
                    </div>
                    <div className="col-md-6 col-sm-6 my-5">
                        <h4>{news.title}</h4>
                        <p>{news.news}</p>
                        <span>{news.date}/{news.avtor}</span>
                    </div>
                </Row>
               <div className="my-5">
                   <Comment/>
               </div>
                <div className="my-5">
                    <Button variant="outline-primary" onClick={() => history.goBack()}>Назад</Button>
                </div>
            </Container>
        </Layout>

);
};

export default Star;