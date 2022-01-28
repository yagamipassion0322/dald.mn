import { Button, Divider, Spin } from 'antd';
import React, { useEffect, useState } from 'react'

import ListComp from './listComp'
import { LoadingOutlined } from '@ant-design/icons';
import axios from 'axios'
import { useLocation } from 'react-router-dom';

const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

function Category({id}) {
    const location = useLocation();
    const [category, setCategory] = useState('')
    const [news, setNews] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [loadings, setLoadings] = useState(false)
    const [lazyButton, setLazyButton] = useState(false)

    useEffect(() => {
        fetchNews()
    }, [location])

    const fetchNews = async() => {
        await window.scrollTo(0, 0)
        await setLoading(true)
        await axios.get('http://dald.mn:7900/api/v1/category/'+id)
            .then(async(result) => {
                await setCategory(result.data.category[0].category)

                await axios.get('http://dald.mn:7900/api/v1/news/?select=id title slug category image link createdAt&sort=-createdAt&limit=10&page=1&category='+result.data.category[0].category)
                    .then(async(result) => {
                        await setNews(result.data.news)
                        await setPage(result.data.pagination.nextPage)

                        if(result.data.news.length === 10)
                        {
                            await setLazyButton(true)
                        }
                        
                        await setLoading(false)
                    }).catch(e => console.log(e))

            }).catch(e => console.log(e))
    }

    const LazyLoad = async () => {
        await setLoadings(true)

        await axios.get('http://dald.mn:7900/api/v1/news/?select=id title slug category image link createdAt&sort=-createdAt&limit=10&page='+page+'&category='+category)
            .then(async(result) => {
                result.data.news.forEach(async(el) => await news.push(el))
                await setPage(result.data.pagination.nextPage)
                if(result.data.news.length < 10)
                {
                    setLazyButton(false)
                }
            }).catch(e => console.log(e))

        await setLoadings(false)
    }

    return (
        <section className="business maan-slide-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        {
                            loading ? 
                                <div style={{ width: '100%', height: 400, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <Spin indicator={antIcon}/>
                                </div>
                            :
                            <div className="maan-news-post">
                                <div style={{ width: '100%', height: 80}}>
                                    <h4 style={{ fontSize: 24, fontWeight: '700' }}>
                                        {category}
                                    </h4>
                                    <hr/>
                                </div>
                                
                                {
                                    news?.map(el => (
                                        <ListComp
                                            id={el.id}
                                            title={el.title}
                                            slug={el.slug}
                                            category={el.category}
                                            image={el.image}
                                            createdAt={el.createdAt}
                                            site={el.site}
                                        />  
                                    ))
                                }
                                {
                                    news?.length !== 0 ?
                                        lazyButton ?
                                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 50 }}>
                                                <Button type="primary" loading={loadings} style={{ backgroundColor: '#1762A1', padding: 12, borderRadius: 12, color: '#fff' }} onClick={LazyLoad}>
                                                    Цааш унших
                                                </Button>
                                            </div>
                                        : null
                                    :
                                    <div>
                                        Одоогоор нийтлэл хоосон байна!
                                    </div>
                                }
                            </div>
                        }
                    </div>
                    <div className="col-lg-4">
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category
