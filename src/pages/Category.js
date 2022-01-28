import Footer from './../component/footer'
import Header from './../component/header'
import ListCategory from './../component/category'
import React from 'react'

function Category(props) {
    const id = props.match.params.id
    return (
        <React.Fragment>
            <Header />
            <ListCategory id={id}/>
            <Footer />
        </React.Fragment>
    )
}

export default Category
