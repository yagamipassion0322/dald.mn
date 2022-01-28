import 'moment/locale/mn';

import React, { useEffect, useState } from 'react'

import HeroComponent from '../component/hero_comp'
import HeroSide from './heroside'
import Loader from './../component/loader'
import { LoadingOutlined } from '@ant-design/icons';
import Moment from 'react-moment';
import axios from 'axios'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function Hero() {

    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() => {        
        await axios.get('http://dald.mn:7900/api/v1/news?select=id title slug category image site link createdAt&limit=1&sort=-createdAt')
            .then(async(result) => {
                setData(result.data.news[0])
            }).catch(e => console.log(e))

        await setLoader(false)
        
    } 


    return (
        <>
            <section className="maan-most-popular-section maan-slide-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">

                            <div className="maan-title">
                                <div className="maan-title-text">
                                    <h2>Мэдээ мэдээлэл</h2>
                                </div>
                            </div>

                            <div className="maan-slide">
                                {
                                    loader ? 
                                        <Loader />
                                    :
                                        <HeroComponent
                                            id={data.id}
                                            title={data.title}
                                            slig={data.slig}
                                            category={data.category}
                                            image={data.image}
                                            site={data.site}
                                            createdAt={data.createdAt}
                                        />
                                }                                              
                            </div>
                    </div>
                    <div class="col-lg-6">
                        <HeroSide />
                    </div>
                </div>
            </div>
        </section>
        <script src="/frontend/js/vendor/jquery-3.6.0.min.js"></script>
        <script src="/frontend/js/vendor/popper.min.js"></script>
        <script src="/frontend/js/vendor/bootstrap.min.js"></script>
        <script src="/frontend/js/vendor/slick.min.js"></script>
        <script src="/frontend/js/vendor/counterup.min.js"></script>
        <script src="/frontend/js/vendor/waypoints.min.js"></script>
        <script src="/frontend/js/vendor/venobox.min.js"></script>
        <script src="/frontend/js/index.js"></script>
        <script src="/admin/plugins/toastr/toastr.min.js"></script>
        </>
    )
}

export default Hero
