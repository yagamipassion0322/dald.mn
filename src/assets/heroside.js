import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import Loader from './../component/loader'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import axios from 'axios'
import { formatDistance } from 'date-fns'
import { mn } from 'date-fns/locale'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function Heroside() {
    const [categories, setCategories] = useState([])
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() => {
        let query = []
        await axios.get('http://dald.mn:7900/api/v1/category/sort/last3')
            .then(async(result) => {
                await setCategories(result.data.categories)
                await result.data.categories.map(el => {
                    query += ` category = ` + el.category
                })
            }).catch(e => console.log(e))
        
        await axios.get('http://dald.mn:7900/api/v1/news?select=id title slug category image site link createdAt&limit=4&sort=-createdAt')
            .then(async(result) => {
                setData(result.data.news)
            }).catch(e => console.log(e))

        await setLoader(false)
        
    } 

    const fetchHome = async (id) => {
        await setLoader(true)
        await axios.get('http://dald.mn:7900/api/v1/news/ordered/filter?limit=3&select=id title slug category image site link createdAt&sort=-createdAt&category='+id)
            .then(async(result) => {
                setData(result.data.news)
                setLoader(false)
            }).catch(e => console.log(e))
    }

    const refresh = async () => {
        await setLoader(true)
        await axios.get('http://dald.mn:7900/api/v1/news?select=id title slug category image site link createdAt&limit=4&sort=-createdAt')
            .then(async(result) => {
                setData(result.data.news)
            }).catch(e => console.log(e))

        await setLoader(false)
    }

    function Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div class="news-tab">
            <ul class="nav nav-pills" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="all-news-tab" data-bs-toggle="pill" data-bs-target="#all-news" type="button" role="tab" aria-controls="all-news" aria-selected="true" onClick={refresh}>Бүх ангилал</button>
                </li>
                {
                    categories?.map(el => (
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id={el.id} data-bs-toggle="pill" data-bs-target="#world-news" type="button" role="tab" aria-controls={el.id} aria-selected="false" onClick={() => fetchHome(el.category)}>{Capitalize(el.category.toLowerCase())}</button>
                        </li>
                    ))
                }
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="all-news" role="tabpanel" aria-labelledby="all-news-tab">
                {
                        loader ?
                        
                        <Loader />
                        
                        :
                        <div class="maan-news-list">
                            <ul>
                                
                                {
                                    data?.map((el, index) => (
                                        index !== 0 ? 
                                            <li>
                                                <div class="maan-list-img">
                                                    <Link to={`/read/${el.slug}/${el.id}.html`} params={{ slug: el.slug, id: el.id }}>
                                                        <img src={ "http://dald.mn:7900"+el.image } alt="list-news-img"/>
                                                    </Link>                                                                                                                                                                            
                                                </div>
                                                <div class="maan-list-text">
                                                    <span class="maan-tag-green ">{el.category}</span>
                                                    <h4><Link to={`/read/${el.slug}/${el.id}.html`} params={{ slug: el.slug, id: el.id }}>{el.title}</Link></h4>
                                                    <ul>
                                                        <li class="author">
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
                                                            <span class="maan-item-text"><a href="#">{el.site}</a></span>
                                                        </li>
                                                        <li class="author-date">
                                                            <span class="maan-icon"><svg viewBox="0 0 512 512"><path d="M347.216,301.211l-71.387-53.54V138.609c0-10.966-8.864-19.83-19.83-19.83c-10.966,0-19.83,8.864-19.83,19.83v118.978 c0,6.246,2.935,12.136,7.932,15.864l79.318,59.489c3.569,2.677,7.734,3.966,11.878,3.966c6.048,0,11.997-2.717,15.884-7.952 C357.766,320.208,355.981,307.775,347.216,301.211z"></path><path d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.833,256-256S397.167,0,256,0z M256,472.341 c-119.275,0-216.341-97.066-216.341-216.341S136.725,39.659,256,39.659c119.295,0,216.341,97.066,216.341,216.341 S375.275,472.341,256,472.341z"></path></svg></span>
                                                            <span className="maan-item-text">{formatDistance(new Date(el.createdAt), new Date(), { addSuffix: true, locale: mn })}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        : null
                                    ))
                                }
                            </ul>
                        </div>
                    }
                </div>
                <div class="tab-pane fade" id="world-news" role="tabpanel" aria-labelledby="food-news-tab">
                    {
                        loader ?
                        
                        <div style={{ height: 400}}>
                            <Spin indicator={antIcon} style={{ textAlign: 'center', marginTop: 80 }}/>
                        </div> 
                        
                        :
                        <div class="maan-news-list">
                            <ul>
                                
                                {
                                    data?.map(el => (
                                        <li>
                                            <div class="maan-list-img">
                                                <Link to={`/read/${el.slug}/${el.id}.html`} params={{ slug: el.slug, id: el.id }}>
                                                    <img src={ "http://dald.mn:7900"+el.image } alt="list-news-img"/>
                                                </Link>                                                                                                                                                                            
                                            </div>
                                            <div class="maan-list-text">
                                                <span class="maan-tag-green ">{el.category}</span>
                                                <h4><Link to={`/read/${el.slug}/${el.id}.html`} params={{ slug: el.slug, id: el.id }}>{el.title}</Link></h4>
                                                <ul>
                                                    <li class="author">
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
                                                        <span class="maan-item-text"><a href="#">{el.site}</a></span>
                                                    </li>
                                                    <li class="author-date">
                                                        <span class="maan-icon"><svg viewBox="0 0 512 512"><path d="M347.216,301.211l-71.387-53.54V138.609c0-10.966-8.864-19.83-19.83-19.83c-10.966,0-19.83,8.864-19.83,19.83v118.978 c0,6.246,2.935,12.136,7.932,15.864l79.318,59.489c3.569,2.677,7.734,3.966,11.878,3.966c6.048,0,11.997-2.717,15.884-7.952 C357.766,320.208,355.981,307.775,347.216,301.211z"></path><path d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.833,256-256S397.167,0,256,0z M256,472.341 c-119.275,0-216.341-97.066-216.341-216.341S136.725,39.659,256,39.659c119.295,0,216.341,97.066,216.341,216.341 S375.275,472.341,256,472.341z"></path></svg></span>
                                                        <span className="maan-item-text">{formatDistance(new Date(el.createdAt), new Date(), { addSuffix: true, locale: mn })}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    ))
                                }  
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Heroside
