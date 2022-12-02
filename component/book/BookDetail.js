import { Row, Col, Rate } from "antd";
import Image from "next/image";
import Book1 from '../../assets/images/baner-book1.png'
import Chap from "../items/Chap";

export default function BookDetail(){
    return(
        <div>
            <div className="component__detail">
                <Row>
                    <Col  lg={8}  sm={12} xs={24}>
                        <div className="component__detail__img">
                            <Image src={Book1} layout='fixed' alt='hinh bia sach' />
                        </div>
                        <div className="component__detail__info">
                            <Row>
                                <Col span={12}>
                                    <p className="component__detail__info--left">Author:</p>
                                    <p className="component__detail__info--left">Category:</p>
                                    <p className="component__detail__info--left">Chap:</p>
                                </Col>
                                <Col span={12}>
                                    <p className="component__detail__info--right">D Luck</p>
                                    <p className="component__detail__info--right">Romatic,  sad, tragedy</p>
                                    <p className="component__detail__info--right"><strong style={{color:'#FF8F5C'}}>123 </strong>/999</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col  lg={16}  sm={12} xs={24}>
                        <div className="component__detail__information">
                            <h1 className="component__detail__information--name">Love story Vault</h1>
                            <Rate className="component__detail__information--rate" allowHalf defaultValue={4.5} disabled />
                        </div>
                        <div className="component__detail__content">
                            <h3 className="component__detail__content--title">Main content</h3>
                            <p className="component__detail__content--detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, 
                                dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem 
                                sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, 
                                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                                per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. 
                                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. M
                                orbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                            </p>
                            <div className="component__detail__new--chap">
                                <h3 className="component__detail__content--title">New chap</h3>
                                <div className="component__detail__new--listchap">
                                    <Chap></Chap>
                                    <Chap></Chap>
                                    <Chap></Chap>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <style jsx>{`
                .component__detail{
                    padding: 12px 8px;
                    position:relative;
                }

                .component__detail__img{
                    width: 90%;
                    max-width: 310px;
                    overflow: hidden;
                    margin: 0 auto 12px;
                }

                .component__detail__content{
                    font-weight: 550;
                    font-size: 14px;
                    line-height: 18px;
                    color: rgba(31, 30, 34, 0.7);
                    width:90%;
                    margin:0 auto 12px;
                }

                .component__detail__info--right{
                    color: rgba(31, 30, 34, 0.8);
                    font-size:14px;
                    font-weight:700;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .component__detail__information{
                    text-align: center;
                    font-weight: bolder;
                    font-size: 36px;
                    color: #1F1E22;
                    margin: 6px 0 12px;
                }

                .component__detail__information--name{
                    margin:0;
                }

                .component__detail__content{
                    width:90%;
                    margin:0 auto 20px;
                }

                .component__detail__content--title{
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 24px;
                    color: #1F1E22;
                }

                .component__detail__content--detail{
                    font-weight: 500;
                    font-size: 14px;
                    color: rgba(31, 30, 34, 0.7);
                    max-height: 550px;
                    width:100%;
                    overflow-y: scroll;
                    letter-spacing: 0.05em;
                    margin:6px 0 12px;
                }

                .component__detail__new--listchap{
                    width:95%;
                }
            `}</style>

            <style jsx global>{`
                .component__detail .component__detail__information .component__detail__information--rate{
                    font-size:24px
                }
            `}</style>
        </div>
    )
}