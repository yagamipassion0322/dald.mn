import React, { useEffect, useState } from 'react'

import Parser from 'html-react-parser';
import Placeholder from 'react-bootstrap/Placeholder'
import Related from './related'
import axios from 'axios'
import { formatDistance } from 'date-fns'
import { mn } from 'date-fns/locale'
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Detial(props) {
    const location = useLocation();
    const {id} = props.route
    const [news, setNews] = useState([])
    const [related, setRelated] = useState([])
    const [prevProps, setPrevProps] = useState(location)
    const [loader, setLoader] = useState(true)
    const history = useHistory();
    

    useEffect(() => {
        fetchNews()
    }, [location])

    const fetchNews = async() => {
        axios.get('http://dald.mn:7900/api/v1/news/'+id)
            .then(async(result) => {
                if(result.data.status === 201)
                {
                    await history.push("/");
                }
                await setNews(result.data.news)
                await setRelated(result.data.similiar)
                await setLoader(false)
            }).catch(e => console.log(e))
        
        await window.scrollTo(0, 0)
    }

    return (
        <section className="maan-archive-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        {
                            !loader ?
                            <div style={{ marginBottom: 20 }}>
                                <div className="maan-title-border-none">
                                    <div className="maan-title-text">
                                        <h2>{news[0].title}</h2>
                                    </div>
                                </div>
                                <div className="card maan-default-post">
                                    <div className="maan-post-img">
                                        <img src={`http://dald.mn:7900${news[0].image}`} alt="top-news" />
                                    </div>
                                    <div className="card-body maan-card-body">
                                        <div className="maan-text">
                                            <div className="row">
                                                <div className="col-md-12" style={{ paddingTop: 20 }}>
                                                    <ul>
                                                        <li>
                                                            <span class="maan-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12.007" height="13.414" viewBox="0 0 12.007 13.414">
                                                            <g id="user" transform="translate(-24.165)">
                                                                <g id="Group_466" data-name="Group 466" transform="translate(26.687)">
                                                                <g id="Group_465" data-name="Group 465" transform="translate(0)">
                                                                    <path id="Path_845" data-name="Path 845" d="M114.274,0a3.483,3.483,0,1,0,3.483,3.483A3.492,3.492,0,0,0,114.274,0Z" transform="translate(-110.791)" fill="#888"/>
                                                                </g>
                                                                </g>
                                                                <g id="Group_468" data-name="Group 468" transform="translate(24.165 7.215)">
                                                                <g id="Group_467" data-name="Group 467" transform="translate(0)">
                                                                    <path id="Path_846" data-name="Path 846" d="M36.147,250.375a3.247,3.247,0,0,0-.35-.639,4.329,4.329,0,0,0-3-1.886.641.641,0,0,0-.441.106,3.712,3.712,0,0,1-4.38,0,.571.571,0,0,0-.441-.106,4.3,4.3,0,0,0-3,1.886,3.743,3.743,0,0,0-.35.639.323.323,0,0,0,.015.289,6.067,6.067,0,0,0,.411.608,5.778,5.778,0,0,0,.7.791,9.112,9.112,0,0,0,.7.608,6.936,6.936,0,0,0,8.274,0,6.685,6.685,0,0,0,.7-.608,7.021,7.021,0,0,0,.7-.791,5.329,5.329,0,0,0,.411-.608A.26.26,0,0,0,36.147,250.375Z" transform="translate(-24.165 -247.841)" fill="#888"/>
                                                                </g>
                                                                </g>
                                                            </g>
                                                            </svg>

                                                            </span>
                                                            <span class="maan-item-text">
                                                                <a href="#">
                                                                    {
                                                                        news[0].site === 'default' ? 'dald.mn' : news[0].site
                                                                    }
                                                                </a>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span class="maan-icon"><svg viewBox="0 0 512 512"><path d="M347.216,301.211l-71.387-53.54V138.609c0-10.966-8.864-19.83-19.83-19.83c-10.966,0-19.83,8.864-19.83,19.83v118.978 c0,6.246,2.935,12.136,7.932,15.864l79.318,59.489c3.569,2.677,7.734,3.966,11.878,3.966c6.048,0,11.997-2.717,15.884-7.952 C357.766,320.208,355.981,307.775,347.216,301.211z"></path><path d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.833,256-256S397.167,0,256,0z M256,472.341 c-119.275,0-216.341-97.066-216.341-216.341S136.725,39.659,256,39.659c119.295,0,216.341,97.066,216.341,216.341 S375.275,472.341,256,472.341z"></path></svg></span>
                                                            <span className="maan-item-text">{formatDistance(new Date(news[0].createdAt), new Date(), { addSuffix: true, locale: mn })}</span>
                                                        </li>
                                                    </ul>
                                                    <div style={{ width: '100% !important', paddingTop: 20 }}>{Parser(news[0].data)}</div>

                                                    <div>
                                                        <Related related={related}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-4"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div style={{ width: '100%', height: 500, backgroundColor: '#fff' }}>
                                <Placeholder.Button xs={12} bg="dark" />
                                <Placeholder.Button xs={11} bg="dark" />
                                <Placeholder.Button xs={9} bg="dark" />
                                <Placeholder.Button xs={8} bg="dark" />
                                <Placeholder.Button xs={7} bg="dark" />
                                <Placeholder.Button xs={6} bg="dark" />
                            </div>
                        }
                    </div>
                    <div class="col-lg-4">
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Detial
