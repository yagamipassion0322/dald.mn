import 'moment/locale/mn';

import { Link } from 'react-router-dom'
import Loader from './../component/Loader/topside'
import Moment from 'react-moment';
import React from 'react'
import { formatDistance } from 'date-fns'
import { mn } from 'date-fns/locale'

function Topnews(props) {
    const {id, title, slug, category, image, site, date} = props
    
    return (
        <div className=" col-lg-3 ">
            <div className="card maan-card-img">
                <Link className="topnews-thumb" to={`/read/${slug}/${id}.html`} params={{ slug: slug, id: id }}>
                    <img src={'http://dald.mn:7900'+image} alt={title} />
                </Link>                  
                <span className="maan-tag-green ">{category}</span>
                <div className="card-body maan-card-body">
                    <div className="maan-text">
                        <h4>
                            <Link to={`/read/${slug}/${id}.html`} params={{ slug: slug, id: id }}>
                                {title}
                            </Link> 
                        </h4>
                        <ul>
                            <li className="author-date">
                                <span className="maan-icon"><svg viewBox="0 0 512 512"><path d="M347.216,301.211l-71.387-53.54V138.609c0-10.966-8.864-19.83-19.83-19.83c-10.966,0-19.83,8.864-19.83,19.83v118.978 c0,6.246,2.935,12.136,7.932,15.864l79.318,59.489c3.569,2.677,7.734,3.966,11.878,3.966c6.048,0,11.997-2.717,15.884-7.952 C357.766,320.208,355.981,307.775,347.216,301.211z"/><path d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.833,256-256S397.167,0,256,0z M256,472.341 c-119.275,0-216.341-97.066-216.341-216.341S136.725,39.659,256,39.659c119.295,0,216.341,97.066,216.341,216.341 S375.275,472.341,256,472.341z"/></svg></span>
                                <span className="maan-item-text">{formatDistance(new Date(date), new Date(), { addSuffix: true, locale: mn })}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topnews
