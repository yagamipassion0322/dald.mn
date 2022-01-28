import { Button, Modal } from 'antd';
import React, { useState } from 'react'

import Banner from './../assets/banner'
import { Link } from 'react-router-dom'
import Menu from './../assets/menu'
import Top from './../assets/top'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function Header() {

    const [svalue, setSvalue] = useState('')
    const [showModal, setShowModal] = useState(false)
    let history = useHistory()

    const searchKey = async () => {
        // history.push({
        //     pathname: '/search',
        //     state: {
        //         tags: 'hello world!'
        //     }
        // })
    }

    const handleOk = () => {
        setShowModal(false);
      };
    
      const handleCancel = () => {
        setShowModal(false);
      };

    return (
        <>
            <header className="sticky-manu">
                <Top />
                <Banner />
                <div className="maan-manu-bar" style={{ position: 'relative' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-5 d-lg-none">
                                <div className="maan-logo">
                                    <a href="/"><img src="/uploads/images/logo/logo.png" alt="logo" /></a>
                                </div>
                            </div>
                            <div className="col-7 order-lg-2 col-lg-2">
                                <ul className="maan-right-btns">
                                    <li>
                                        <button className="maan-search-btn" onClick={() => setShowModal(true)}>
                                            <span className="icon"><svg viewBox="0 0 511.999 511.999"><path d="M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667 S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732 c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667 c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z"></path></svg></span>
                                        </button>
                                        {/* <div className="modal fade" id="popupSearch">
                                            <div className="modal-dialog">
                                                <div className="modal-content" style={{ display: 'flex', flexDirection: 'row'}}>
                                                    <input type="search" placeholder="Хайх..." onChange={(e) => setSvalue(e.nativeEvent.target.value)} />
                                                    <button type="sumbit" onClick={searchKey}>Хайх</button>
                                                </div>
                                            </div>
                                        </div> */}
                                    </li>
                                    <li className="dropdown">
                                        <div className="maan-profile-btn">
                                            <a href="http://admin.dald.mn" target="_blank">
                                                <span className="icon"><svg viewBox="0 0 512 512"><path d="M333.187,237.405c32.761-23.893,54.095-62.561,54.095-106.123C387.282,58.893,328.389,0,256,0 S124.718,58.893,124.718,131.282c0,43.562,21.333,82.23,54.095,106.123C97.373,268.57,39.385,347.531,39.385,439.795 c0,39.814,32.391,72.205,72.205,72.205H400.41c39.814,0,72.205-32.391,72.205-72.205 C472.615,347.531,414.627,268.57,333.187,237.405z M164.103,131.282c0-50.672,41.225-91.897,91.897-91.897 s91.897,41.225,91.897,91.897S306.672,223.18,256,223.18S164.103,181.954,164.103,131.282z M400.41,472.615H111.59 c-18.097,0-32.82-14.723-32.82-32.821c0-97.726,79.504-177.231,177.231-177.231s177.231,79.504,177.231,177.231 C433.231,457.892,418.508,472.615,400.41,472.615z"></path></svg></span>
                                            </a>
                                        </div>
                                    </li>
                                    <li className="d-lg-none">
                                        <button type="button" className="manu-btn">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <Menu />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
