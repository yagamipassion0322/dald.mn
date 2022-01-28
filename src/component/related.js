import 'moment/locale/mn';

import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import React from 'react'
import { formatDistance } from 'date-fns'
import { mn } from 'date-fns/locale'

function Related(props) {
    const {related} = props
    return (
        <section class="maan-technology-news-section">
            <div class="container">
                <div class="maan-title-center v2">
                    <div class="maan-title-icon"></div>
                    <div class="maan-title-text">
                        <h2>Төстэй</h2>
                    </div>
                    <div class="maan-title-icon"></div>
                </div>
                <div class="row">
                    {
                        related?.map(el => (
                            <div class="col-lg-3 col-md-6 technologysmall-card-wrp" style={{ padding: 6 }}>
                                <div class="card maan-default-post">
                                    <div class="maan-post-img">
                                        <Link to={`/read/${el.slug}/${el.id}.html`} params={{ slug: el.slug, id: el.id }}>
                                            <img src={`http://dald.mn:7900${el.image}`} alt={el.title} />
                                        </Link>
                                    </div>
                                    <div class="card-body maan-card-body">
                                        <div class="maan-text">
                                            <h4><Link to={`/read/${el.slug}/${el.id}.html`} params={{ slug: el.slug, id: el.id }} style={{ fontSize: 13, lineHeight: 1.3 }}>{el.title}</Link></h4>
                                            <ul>
                                                <li>
                                                    <span class="maan-icon"><svg viewBox="0 0 512 512"><path d="M347.216,301.211l-71.387-53.54V138.609c0-10.966-8.864-19.83-19.83-19.83c-10.966,0-19.83,8.864-19.83,19.83v118.978 c0,6.246,2.935,12.136,7.932,15.864l79.318,59.489c3.569,2.677,7.734,3.966,11.878,3.966c6.048,0,11.997-2.717,15.884-7.952 C357.766,320.208,355.981,307.775,347.216,301.211z"></path><path d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.833,256-256S397.167,0,256,0z M256,472.341 c-119.275,0-216.341-97.066-216.341-216.341S136.725,39.659,256,39.659c119.295,0,216.341,97.066,216.341,216.341 S375.275,472.341,256,472.341z"></path></svg></span>
                                                    <span className="maan-item-text" style={{ fontSize: 11 }}>{formatDistance(new Date(el.createdAt), new Date(), { addSuffix: true, locale: mn })}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Related
