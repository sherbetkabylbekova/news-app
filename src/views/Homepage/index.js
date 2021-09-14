import React, {useEffect, useState} from 'react';
import "./index.css"
import Layout from "../../components/Layout";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Link, useParams} from "react-router-dom";
import axios from "axios";


const Homepage = () => {
    const [hero, setHero] = useState([])
    const params = useParams()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios(`https://613dad3b94dbd600172ab991.mockapi.io/api/news`)
            .then(({data}) => {
                setHero(data)
                setIsLoading(false)
            })
    }, [params.id])
    if (isLoading) {
        return 'Loading ...'
    } else {
        return (
            <Layout>
                <OwlCarousel className='owl-theme my-3' margin={5} autoplay={true} loop items={2}>
                    {

                        hero.map(el =>
                            <div className='item'>
                                <Link to={`/star/${el.id}`}>
                                    <img src={el.img} alt=""/>
                                    <h5>{el.title}</h5>
                                </Link>
                            </div>
                        )

                    }
                </OwlCarousel>;
            </Layout>
        );
    }
};

export default Homepage;