import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import axios from "axios";
import {Link} from "react-router-dom";

const News = () => {
    const [news,setNews] = useState([])
    useEffect(() => {
        axios("https://613dad3b94dbd600172ab991.mockapi.io/api/news")
            .then(({data}) => setNews(data))
    })
    return (
        <Layout>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 my-5">
                {
                    news.map(el =>
                        <div key={news.id} className="col-md-3 col-sm-3 mb-3">
                            <Link to={`/star/${el.id}`}>
                                <img  className="img" src={el.img} alt="#"/>
                                <h6>{el.title}</h6>
                            </Link>
                        </div>
                    )
                }
            </div>
            </div>
        </Layout>
    );
};

export default News;