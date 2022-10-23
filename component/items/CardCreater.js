import { Col, Row } from "antd";
import Image from "next/image";
import AvatarImg from '../../assets/images/avatar1.jpg'
import { BookOutlined,HeartOutlined } from "@ant-design/icons";

export default function CardCreater({number}){
    return(
        <div>
            <div className="item__card__creater">
                <p className="item__card__creater--topnumber">{number}</p>
                <div className="item__card__creater__content">
                    <Row>
                        <Col span={8}>
                            <div className="item__card__creater__content--img">
                                <Image src={AvatarImg} className='img__avatar__creater' />
                            </div>
                        </Col>
                        <Col span={16} style={{paddingLeft:'6px'}}>
                            <p className="item__card__creater__content--name">Luck</p>
                            <p className="item__card__creater__content--text"><BookOutlined className="icon__card__creater" /><span>150</span> Books</p>
                            <p className="item__card__creater__content--text"><HeartOutlined className="icon__card__creater" /><span>1.50K</span> Like</p>
                        </Col>
                    </Row>
                </div>
            </div>
            <style jsx>{`
            .item__card__creater{
                background: #FFFFFF;
                box-shadow: 1px 2px 4px rgb(0 0 0 / 25%);
                width: 90%;
                height: 72px;
                margin: 12px 6px;
                position:relative;
            }

            .item__card__creater--topnumber{
                position: absolute;
                top: -32px;
                left: 0;
                z-index: 1;
                font-weight: 700;
                font-size: 64px;
                line-height: 80px;
                text-transform: uppercase;
                color: #fff;
                margin:0;
                text-shadow: 0px 0px 4px rgb(0 0 0 / 25%);
                -webkit-text-stroke: 2px #FAFF00;
            }

            .item__card__creater__content--img{
                height: 42px;
                width: 42px;
                z-index: 2;
                position: relative;
                border: 1px solid rgba(139, 208, 252, 0.4);
                box-shadow: 0px 0px 4px 1px rgb(0 0 0 / 25%);
                border-radius: 50%;
                margin-top: 8px;
                margin-left: 16px;
            }

            .item__card__creater__content--name{
                font-weight: bold;
                font-size: 14px;
                margin-bottom: 4px;
                color: #1F1E22;
            }

            .item__card__creater__content--text{
                font-weight: 600;
                font-size: 12px;
                margin-bottom: 2px;
                color: rgba(31, 30, 34, 0.8);
            }

            .item__card__creater__content--text span:nth-child(2){
                color: #FF8F5C;
                font-weight:bold;
            }
            `}</style>
            <style jsx global>{`
            .item__card__creater__content--img .img__avatar__creater{
                border-radius: 50%;
            }

            .item__card__creater__content--text .icon__card__creater{
                color:#8BD0FC;
                margin-right: 8px;
            }
            `}</style>
        </div>
    )
}