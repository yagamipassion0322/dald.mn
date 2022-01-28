import Placeholder from 'react-bootstrap/Placeholder'
import React from 'react'

function Top() {
    return (
        <>
            <div className=" col-lg-6 topnews-big-card">
                <div className="card maan-card-img" style={{ width: '100%', height: 450, backgroundColor: '#e6e6e6', borderRadius: 12 }}>
                    <div className="card-body maan-card-body">
                        <div className="maan-text">
                            <h4>
                                <Placeholder.Button xs={10} bg="dark" />
                                <Placeholder.Button xs={6} bg="dark" />
                            </h4>
                            <ul>
                                <li className="author">
                                    <span className="maan-icon">
                                        <Placeholder.Button xs={12} bg="dark" />
                                    </span>
                                    
                                </li>
                                <li className="author-date">
                                    <Placeholder.Button xs={12} bg="dark" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" col-lg-3">
                <div className="card maan-card-img" style={{ width: '100%', height: '100%', backgroundColor: '#e6e6e6', borderRadius: 12 }}>
                    <div className="card-body maan-card-body">
                        <div className="maan-text">
                            <h4>
                                <Placeholder.Button xs={10} bg="dark" />
                                <Placeholder.Button xs={6} bg="dark" />
                            </h4>
                            <ul>
                                <li className="author-date">
                                    <Placeholder.Button xs={12} bg="dark" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" col-lg-3">
                <div className="card maan-card-img" style={{ width: '100%', height: '100%', backgroundColor: '#e6e6e6', borderRadius: 12 }}>
                    <div className="card-body maan-card-body">
                        <div className="maan-text">
                            <h4>
                                <Placeholder.Button xs={10} bg="dark" />
                                <Placeholder.Button xs={6} bg="dark" />
                            </h4>
                            <ul>
                                <li className="author-date">
                                    <Placeholder.Button xs={12} bg="dark" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    
    )
}

export default Top
