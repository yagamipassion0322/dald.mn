import Placeholder from 'react-bootstrap/Placeholder'
import React from 'react'

function Topside() {
    return (
        <div className=" col-lg-3 ">
            <div className="card maan-card-img">
                <img src={'https://www.thesanantonioriverwalk.com/wp-content/plugins/elementor/assets/images/placeholder.png'} alt="dald.mn"/>              
                <span className="maan-tag-green ">
                    <Placeholder.Button xs={10} bg="dark" />
                </span>
                <div className="card-body maan-card-body">
                    <div className="maan-text">
                        <h4>
                            <Placeholder.Button xs={10} bg="dark" />
                        </h4>
                        <ul>
                            <li className="author-date">
                                <span className="maan-icon"><svg viewBox="0 0 512 512"><path d="M347.216,301.211l-71.387-53.54V138.609c0-10.966-8.864-19.83-19.83-19.83c-10.966,0-19.83,8.864-19.83,19.83v118.978 c0,6.246,2.935,12.136,7.932,15.864l79.318,59.489c3.569,2.677,7.734,3.966,11.878,3.966c6.048,0,11.997-2.717,15.884-7.952 C357.766,320.208,355.981,307.775,347.216,301.211z"/><path d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.833,256-256S397.167,0,256,0z M256,472.341 c-119.275,0-216.341-97.066-216.341-216.341S136.725,39.659,256,39.659c119.295,0,216.341,97.066,216.341,216.341 S375.275,472.341,256,472.341z"/></svg></span>
                                <span className="maan-item-text"><Placeholder.Button xs={10} bg="dark" /></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topside
