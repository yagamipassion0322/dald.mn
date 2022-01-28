import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'

function Menu() {

    const [categories, setCategories] = useState([])


    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = () => {
        axios.get('http://dald.mn:7900/api/v1/category?limit=9').then(async(result) => {
            await setCategories(result.data.categories)
        }).catch(e => console.log(e))
    }


    function Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div className="col-12 order-lg-1 col-lg-10" style={{ display: 'block'}}>
            <nav className="maan-main-manu">
                <button className="close-btn d-lg-none">
                    <span></span>
                    <span></span>
                </button>
                <ul>
                    <li>
                        <a href="/">Эхлэл</a>
                    </li>
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
            </nav>
        </div>
    )
}

export default Menu
