import { Col, Row, Rate } from "antd"
import Image from 'next/image'
import NvBook from '../../assets/images/nv-book-1.png'
import Book1 from "../../assets/images/book-1.png"
import{EyeFilled,TrophyFilled} from '@ant-design/icons'

const Baner= ()=>{
    return(
        <div >
            <div className="baner__home">
                <Row>
                    <Col lg={12}  sm={14} xs={0} >
                        <div className="baner__home__text" >
                            <h1 className="baner__home__namebook">Lorem ipsum dolor sit amet</h1>
                            <h3 className="baner__home__titlebook">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                            <Row>
                                <Col span={10}>
                                    <Rate className="baner__home__starbook" disabled allowHalf defaultValue={4.5} />
                                </Col>
                                <Col span={4}>
                                    <p className="baner__home__infoauthor"><b>By </b>Juky</p>
                                </Col>
                                <Col span={4}>
                                    <p className="baner__home__infoauthor"><b>In </b>1992</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={12}  sm={10} xs={24} >
                        <Row>
                            <Col lg={16}  sm={24} xs={24} justify='center'>
                                <div className="baner__home__right" >
                                    <div className="baner__home__bg-slide"></div>
                                    <div className="baner__home__img-slide" >
                                        <Image src={NvBook} alt='Nhan vat truyen' height={360} width={360} />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8} md={0} sm={0} xs={0} >
                                <div className="baner__home__icon-slide">
                                    <div className="baner__home__slide-item">
                                        <div className="baner__home__slide--img">
                                            <Image src={Book1} alt="" width={60} height={68}/>
                                        </div>
                                        <div className="baner__home__side-text">
                                            <p className="baner__home__side--name">Broken Horn</p>
                                            <EyeFilled /><span className="baner__home__side--view">145,290 K</span>
                                        </div>
                                        <TrophyFilled />
                                    </div>
                                    <div className="baner__home__slide-item">
                                        <div className="baner__home__slide--img">
                                            <Image src={Book1} alt="" width={60} height={68}/>
                                        </div>
                                        <div className="baner__home__side-text">
                                            <p className="baner__home__side--name">Broken Horn</p>
                                            <EyeFilled /><span className="baner__home__side--view">145,290 K</span>
                                        </div>
                                        <TrophyFilled />
                                    </div>
                                    <div className="baner__home__slide-item">
                                        <div className="baner__home__slide--img">
                                            <Image src={Book1} alt="" width={60} height={68}/>
                                        </div>
                                        <div className="baner__home__side-text">
                                            <p className="baner__home__side--name">Broken Horn</p>
                                            <EyeFilled /><span className="baner__home__side--view">145,290 K</span>
                                        </div>
                                        <TrophyFilled />
                                    </div>
                                    <div className="baner__home__slide-item">
                                        <div className="baner__home__slide--img">
                                            <Image src={Book1} alt="" width={60} height={68}/>
                                        </div>
                                        <div className="baner__home__side-text">
                                            <p className="baner__home__side--name">Broken Horn</p>
                                            <EyeFilled /><span className="baner__home__side--view">145,290 K</span>
                                        </div>
                                        <TrophyFilled />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <style jsx >{`
                .baner__home{
                    height:400px;
                    width:100%;
                    margin-top:86px;
                    padding:24px 32px;
                }
                .baner__home__text{
                    margin: 52px 0 12px 12px;
                }

                .baner__home__namebook{
                    font-weight: 700;
                    font-size: 42px;
                    color: #ffff;
                    -webkit-text-stroke: 2px #FF8F5C;
                    margin-bottom:12px;
                }

                .baner__home__titlebook{
                    font-weight: 600;
                    font-size: 32px;
                    line-height: 40px;
                    color: #1F1E22;
                    max-width: 80%;
                    opacity:0.8;
                    margin-bottom:8px;
                }

                .baner__home__infoauthor{
                    margin: 4px 0 0;
                    font-weight: 600;
                    font-size: 18px;
                    color: #FF8F5C;
                }

                .baner__home__right{
                    float: right;
                    margin-right: 16px;
                }
                .baner__home__infoauthor > b{
                    color: #1F1E22;
                    font-weight: 700;
                }

                .baner__home__bg-slide{
                    width: 310px;
                    height: 310px;
                    border-radius: 50%;
                    border: 10px solid transparent;
                    background: linear-gradient(304.04deg,#ff8f5c 19.3%,#fce76c 38.9%,rgba(255,145,92,.98)64.21%,
                    rgba(139,208,252,.8)88.72%) border-box;
                    -webkit-mask:linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
                    position:relative;
                }

                .baner__home__img-slide{
                    height: 360px;
                    width: 360px;
                    overflow: hidden;
                    position: absolute;
                    top: -32px;
                }

                .baner__home__icon-slide{
                    display: flex;
                    flex-direction: column;
                }

                .baner__home__slide-item{
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    position:relative;
                    margin-bottom:32px;
                    min-width: 222px;
                }

                .baner__home__slide-item:first-child,
                .baner__home__slide-item:last-child{
                    margin-left: -56px;
                }

                .baner__home__slide-item::before{
                    content: "";
                    position: absolute;
                    height: 72px;
                    width: 72px;
                    border-radius: 50%;
                    background: #D9D9D9;
                    box-shadow: 4px 3px 10px rgb(0 0 0 / 25%), inset 6px 4px 4px rgb(0 0 0 / 25%);
                    border: 5px solid #fce76c;
                    top: 0;
                    left: 12px;
                }

                .baner__home__slide--img{
                    position: absolute;
                    top: 0;
                    left: 16px;
                }

                .baner__home__side-text{
                    margin-left: 68px;
                    font-weight: 700;
                    font-size: 14px;
                }

                .baner__home__side-text:first-child,
                .baner__home__side-text:last-child{
                    margin:0;
                }

                .baner__home__side--name{
                    margin: 0 8px 4px 0;
                    color: #1F1E22;
                }

                .baner__home__side--view{
                    font-weight: 700;
                    font-size: 14px;
                    color: #FCE76C;
                    margin: 0 4px;
                }
                
                @media  (max-width: 992px) {
                    .baner__home__namebook {
                      font-size:36px;
                    }

                    .baner__home__titlebook{
                        font-size:26px;
                    }
                    
                    .baner__home__starbook{
                        font-size:18px;
                    }

                    .baner__home__infoauthor{
                        font-size:14px;
                    }
                  }

                  @media  (max-width: 576px){
                    .baner__home{
                        overflow: hidden;
                    }
                    .baner__home__right{
                        margin-left: 50%;
                        transform: translateX(-50%);
                        overflow: hidden;
                        display: inline-block;
                        float:unset;
                    }
                  }
            `}</style>
            <style jsx global>{`
            .baner__home__starbook{
                font-size:24px;
            }

            .baner__home .baner__home__icon-slide .anticon-eye{
                font-size: 18px;
                color: #FF8F5C;
            }

            .baner__home .baner__home__icon-slide .anticon-trophy{
                font-size: 16px;
                color: #ABA99A;
                margin-top: -30px;
            }

            .baner__home .baner__home__icon-slide .baner__home__slide-item:first-child .anticon-trophy{
                color:#FAFF00;
            }

            `}</style>
        </div>
    )
}
export default Baner