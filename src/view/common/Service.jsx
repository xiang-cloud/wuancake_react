import React from 'react'
import imgUrl from '../../assets/img/ads/ads-1.png'
import imgUrl2 from '../../assets/img/ads/ads-2.jpg'
import imgUrl3 from '../../assets/img/ads/ads-3.png'
import imgUrl4 from '../../assets/img/ads/ads-4.jpg'

class Service extends React.Component {

    render() {
        return (
            <div className="service">
                <div className="container">
                    <ul>
                        <li><span className="icon-setting"></span>预约维修服务</li>
                        <li><span className="icon-7day"></span>7天无理由退货</li>
                        <li><span className="icon-15day"></span>15天免费换货</li>
                        <li><span className="icon-post"></span>满150元包邮</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Service