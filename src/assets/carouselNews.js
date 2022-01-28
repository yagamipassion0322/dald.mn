import React, { useEffect, useState } from 'react'

import Last from './lastnews'
import Loader from './../component/Loader/top'
import TopNews from './topnews'
import axios from 'axios'

function CarouselNews() {

    const [news, setnews] = useState([])

    useEffect(() => {
        fetchnews()
    }, [])

    const fetchnews = async () => {
        axios.get('http://dald.mn:7900/api/v1/news?limit=3&sort=-createdAt&isSpecial=1').then(async(result) => {
            await setnews(result.data.news)
        }).catch(e => console.log(e))
    }

    return (
        <>
            <section className="maan-top-news-section" style={{ marginTop: 20, marginBottom: 20 }}>
                <div className="container">
                    <div className="row">
                        {
                            news.length === 0 ? <Loader />
                            :
                            news?.length === 3 ?
                                news.map((el, index) => (
                                    index === 0
                                    ?
                                    <Last
                                        id={el.id}
                                        title={el.title}
                                        slug={el.slug}
                                        category={el.category}
                                        image={el.image}
                                        site={el.site}
                                        date={el.createdAt}
                                    />
                                    :
                                    <TopNews
                                        id={el.id}
                                        title={el.title}
                                        slug={el.slug}
                                        category={el.category}
                                        image={el.image}
                                        site={el.site}
                                        date={el.createdAt}
                                    />
                                ))
                            : null
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default CarouselNews
