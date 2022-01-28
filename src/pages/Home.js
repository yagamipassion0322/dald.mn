import CarouselNews from './../assets/carouselNews'
import Footer from './../component/footer'
import Header from './../component/header'
import Hero from './../assets/hero'
import List from './../component/list'
import React from 'react'
import Second from './../component/second'

function Home() {
    return (
        <React.Fragment>
            <Header />
            <CarouselNews />
            <Hero />
            <Second />
            <List />
            <Footer />
        </React.Fragment>
    )
}

export default Home
