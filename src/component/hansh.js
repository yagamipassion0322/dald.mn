import React from 'react'

function Hansh() {
    return (
        <div style={{ padding: 10, position: 'relative' }}>
            <h5>Ханшийн мэдээ</h5>
            <hr />
            <iframe
                style={{ width: '100%', fontSize: 11, height: 210, border: 'none', overflow: 'hidden', margin: 0, padding: 0 }}
                    src="//monxansh.appspot.com/xansh.html?currency=USD|EUR|JPY|GBP|RUB|CNY|KRW&currency_title=Currency&currency_rate_title=Rate&source=Source">
            </iframe>
        </div>
    )
}

export default Hansh
