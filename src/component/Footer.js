import React from 'react';
import '../static/css/footer.less';

const more = require('../static/images/more.png');
const contact = require('../static/images/contact.png');

export default function Footer() {
    return (
        <footer>
            <div className="pic">
                <div className="item more-info">
                    <img src={more} alt="了解更多"/>
                    <div className="text">了解更多</div>
                </div>
                <div className="item contact">
                    <img src={contact} alt="联系我们"/>
                    <div className="text">业务联系</div>
                </div>
            </div>
            <div className="address">
                <p>公司地址:长沙市岳麓区麓谷大道麓谷信息港4楼A010</p>
                <p><span>长沙钱源文化传媒有限公司</span><span>湘ICP备20007084号-1</span></p>
            </div>
        </footer>
    )
}
