import Placeholder from 'react-bootstrap/Placeholder'
import React from 'react'

function Loader() {
    return (
        <div style={{ width: '100%', height: 500, backgroundColor: '#fff', padding: 24 }}>
            <Placeholder.Button xs={12} bg="dark" />
            <Placeholder.Button xs={11} bg="dark" />
            <Placeholder.Button xs={9} bg="dark" />
            <Placeholder.Button xs={8} bg="dark" />
            <Placeholder.Button xs={7} bg="dark" />
            <Placeholder.Button xs={6} bg="dark" />
        </div>
    )
}

export default Loader
