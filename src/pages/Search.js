import CarouselNews from './../assets/carouselNews'
import Footer from './../component/footer'
import Header from './../component/header'
import Hero from './../assets/hero'
import List from './../component/list'
import React from 'react'
import Second from './../component/second'

function Search(props) {

    console.log(props.location.state.tags)

    return (
        <React.Fragment>
            <Header />
            Searching...
        </React.Fragment>
    )
}

export default Search
