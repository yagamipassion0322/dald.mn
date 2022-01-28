import React from 'react'

function Banner() {
    return (
        <div className="maan-mid-bar">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-3 col-lg-2">
                        <div className="maan-logo">
                            <a href="/"><img src="/icon.png" alt="logo" style={{ height: 100 }}/></a>
                        </div>
                    </div>
                    <div className="col-sm-8 offset-sm-1 offset-lg-2">
                        <div className="maan-header-adds">
                            <a href="#" target="_blank">
                                <img src="https://i.ibb.co/x1T7qzM/Untitled-1.jpg" alt="header-adds" />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
