import DetialComponent from './../component/detial'
import Footer from './../component/footer'
import Header from './../component/header'
import React from 'react'

function Detial(props) {
    console.log(props.match.params)
    return (
        <React.Fragment>
            <Header />
            <DetialComponent route={props.match.params}/>
            <Footer />
        </React.Fragment>
    )
}

export default Detial
