import React, { useEffect, useState } from 'react'

import { Button } from 'antd';
import Hansh from './hansh'
import ListComp from './listComp'
import axios from 'axios'

function List() {

    const [news, setNews] = useState([])
    const [loadings, setLoadings] = useState(false)
    const [page, setPage] = useState(2)

    const fetchNews = async () => {
        await axios.get('http://dald.mn:7900/api/v1/news?select=id title slug category image site createdAt&sort=-createdAt&limit=10&page='+page)
            .then(async(result) => {
                await setNews(result.data.news)
                await setPage(result.data.pagination.nextPage)
            }).catch(e => console.log(e))
    }

    useEffect(() => {
        fetchNews()
    }, [])

    function Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const LazyLoad = async () => {
        setLoadings(true)

        await axios.get('http://dald.mn:7900/api/v1/news?select=id title slug category image site createdAt&sort=-createdAt&limit=10&page='+page)
            .then(async(result) => {
                result.data.news.forEach(async(el) => await news.push(el))
                await setPage(result.data.pagination.nextPage)
            }).catch(e => console.log(e))
        setLoadings(false)

        await setLoadings(false)
    }


    return (
        <section class="business maan-slide-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="maan-news-post">
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
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 50 }}>
                                <Button type="primary" loading={loadings} style={{ backgroundColor: '#1762A1', padding: 12, borderRadius: 12, color: '#fff' }} onClick={LazyLoad}>
                                    Цааш унших
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <Hansh />
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default List
