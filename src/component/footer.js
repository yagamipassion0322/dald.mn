import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'
import { formatDistance } from 'date-fns'
import { mn } from 'date-fns/locale'

function Footer() {

    const [news, setNews] = useState([])
    const [categories, setCategories] = useState([])

    const fetchNews = async () => {
        await axios.get('http://dald.mn:7900/api/v1/news?select=id title slug category image site createdAt&sort=-createdAt&limit=3&isSpecial=1')
            .then(async(result) => {
                await setNews(result.data.news)
            }).catch(e => console.log(e))
        
        await axios.get('http://dald.mn:7900/api/v1/category?limit=9').then(async(result) => {
                await setCategories(result.data.categories)
            }).catch(e => console.log(e))
    }

    useEffect(() => {
        fetchNews()
    }, [])

    function Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    return (
        <footer>
            <section class="maan-info-footer maan-data-background" data-background="https://maannews.maantheme.com/public/frontend/img/footer/footer.jpg">
                <div class="container">
                    <div class="row maan-link-footer">
                        <div class="col-lg-4 col-md-6">
                            <div class="maan-title">
                                <div class="maan-title-text">
                                    <h2>Хамгийн их үзсэн</h2>
                                </div>
                            </div>
                            <div class="maan-news-list">
                                <ul>
                                    {
                                        news?.map(el => (
                                            <li>
                                                <div class="maan-list-img">
                                                    <Link to={`/read/${el.slug}/${el.id}.html`} params={{ slug: el.slug, id: el.id }}>
                                                        <img src={`http://dald.mn:7900${el.image}`} alt="list-news-img" />
                                                    </Link>                                                                                          
                                                </div>
                                                <div class="maan-list-text">
                                                    <h4><Link to={`/read/${el.slug}/${el.id}.html`} params={{ slug: el.slug, id: el.id }}>{el.title}</Link></h4>
                                                    <ul>
                                                        <li>
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
                        </div>
                        <div class="col-lg-4">
                            <div class="middle-footer-items">
                                <div class="maan-title">
                                    <div class="maan-title-text">
                                        <h2>Ангилал</h2>
                                    </div>
                                </div>
                                <div class="maan-news-link">
                                    <ul>
                                        {
                                            categories?.length !== 0 ?
                                                categories.map(el => (
                                                    <li key={el.id}>
                                                        <Link to={`/category/${el.id}`} params={{ slug: el.slug, id: el.id }}>{Capitalize(el.category.toLowerCase())}</Link>
                                                    </li>
                                                ))
                                            : null
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="maan-title">
                                <div class="maan-title-text">
                                    <h2>Холбоос</h2>
                                </div>
                            </div>
                            <div class="maan-email">
                                <form>
                                    <input type="hidden" name="_token" value="NAZcy4HSeLSm96gi6EeX8945ziWKdG8YPie7fINV" />
                                    <div class="input-group">
                                        <label class="maan-icon" for="maanEmail">
                                            <svg viewBox="0 0 512 512"><path d="M505.168,111.894L328.124,246.77l177.408,152.64c4.122-7.792,6.468-16.661,6.468-26.073V138.662 C512,128.971,509.521,119.85,505.168,111.894z"></path><path d="M456.049,82.711H55.95c-11.013,0-21.286,3.211-29.953,8.729l220.786,165.473c5.532,4.06,12.944,4.068,18.485,0.027 l218.79-166.682C475.815,85.468,466.251,82.711,456.049,82.711z"></path><path d="M303.725,265.359l-20.561,15.665c-8.109,5.987-17.616,8.981-27.119,8.981c-9.505,0-19.007-2.993-27.119-8.981 l-0.087-0.064l-20.533-15.389L27.253,421.346c8.396,5.039,18.213,7.943,28.697,7.943h400.1c10.552,0,20.43-2.939,28.862-8.038 L303.725,265.359z"></path><path d="M5.835,113.824C2.107,121.313,0,129.743,0,138.662v234.677c0,9.477,2.376,18.407,6.553,26.237l177.166-152.433 L5.835,113.824z"></path></svg>
                                        </label>
                                        <input type="email" class="form-control" placeholder="Өөрийн имэйл хаягийг оруулна уу?" name="email" id="maanEmail" />
                                    </div>
                                    <button type="button" class="d-btn subscribe">Бүртгүүлэх</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="maan-main-footer">
                        <h6>2021 © Бүх эрх хуулиар хамгаалагдав.</h6>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer
