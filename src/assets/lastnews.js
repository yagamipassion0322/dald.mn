import { Link } from 'react-router-dom'
import React from 'react'
import { formatDistance } from 'date-fns'
import { mn } from 'date-fns/locale'

function Lastnews(props) {
    const {id, title, slug, category, image, site, date} = props
    return (
        <div className=" col-lg-6 topnews-big-card">
            <div className="card maan-card-img">
                <img src={'http://dald.mn:7900'+image} alt={title} />                        
                <span className="maan-tag-parpul">{category}</span>
                <div className="card-body maan-card-body">
                    <div className="maan-text">
                        <h4>
                            <Link to={`/read/${slug}/${id}.html`} params={{ slug: slug, id: id }}>
                                {title}
                            </Link>
                        </h4>
                        <ul>
                            <li className="author">
                                <span className="maan-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.485" height="16.182" viewBox="0 0 14.485 16.182">
                                    <g id="user" transform="translate(-24.165)">
                                        <g id="Group_466" data-name="Group 466" transform="translate(27.207)">
                                        <g id="Group_465" data-name="Group 465" transform="translate(0)">
                                            <path id="Path_845" data-name="Path 845" d="M114.993,0a4.2,4.2,0,1,0,4.2,4.2A4.213,4.213,0,0,0,114.993,0Z" transform="translate(-110.791)" fill="#fff"/>
                                        </g>
                                        </g>
                                        <g id="Group_468" data-name="Group 468" transform="translate(24.165 8.704)">
                                        <g id="Group_467" data-name="Group 467" transform="translate(0)">
                                            <path id="Path_846" data-name="Path 846" d="M38.619,250.9a3.918,3.918,0,0,0-.422-.771,5.222,5.222,0,0,0-3.614-2.275.773.773,0,0,0-.532.128,4.478,4.478,0,0,1-5.284,0,.688.688,0,0,0-.532-.128,5.185,5.185,0,0,0-3.614,2.275,4.516,4.516,0,0,0-.422.771.39.39,0,0,0,.018.349,7.318,7.318,0,0,0,.5.734,6.97,6.97,0,0,0,.844.954,11,11,0,0,0,.844.734,8.367,8.367,0,0,0,9.981,0,8.065,8.065,0,0,0,.844-.734,8.47,8.47,0,0,0,.844-.954,6.429,6.429,0,0,0,.5-.734A.313.313,0,0,0,38.619,250.9Z" transform="translate(-24.165 -247.841)" fill="#fff"/>
                                        </g>
                                        </g>
                                    </g>
                                    </svg>
                                </span>
                                <span className="maan-item-text"><a href="#">{site}</a></span>
                            </li>
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

export default Lastnews
