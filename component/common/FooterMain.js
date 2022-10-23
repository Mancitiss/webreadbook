import { Col, Row } from "antd";
import Image from "next/image";
import Logo from '../../assets/images/logo.png'
import { YoutubeFilled,FacebookFilled,InstagramFilled,GoogleSquareFilled  } from "@ant-design/icons";

export default function FooterMain(){
    return(
        <div>
            <div className="footer__main">
                <Row>
                    <Col lg={8}  sm={8} xs={24}>
                        <Row>
                            <Col lg={24}  sm={24} xs={8}>
                                <div style={{display:'flex',alignItems: 'center'}}>
                                    <div className="footer__main--img">
                                        <Image src={Logo}  width={120} height={120}/>
                                    </div>
                                    <p className="footer__main__nameweb">Book Listen</p>
                                </div>
                                
                            </Col>
                            <Col lg={24}  sm={24} xs={16}>
                                <div className="footer__main__listicon">
                                    <YoutubeFilled />
                                    <FacebookFilled />
                                    <InstagramFilled />
                                    <GoogleSquareFilled />
                                </div>
                            </Col>
                        </Row>
                        

                    </Col>
                    <Col lg={16}  sm={16} xs={24}>
                        <Row>
                            <Col lg={8}  sm={8} xs={12}>
                                <ul>
                                    <li className="footer__main__listmenu">Read</li>
                                    <li className="footer__main__listmenu">Book</li>
                                    <li className="footer__main__listmenu">Creater</li>
                                    <li className="footer__main__listmenu">Category</li>
                                </ul>
                            </Col>
                            <Col lg={8}  sm={8} xs={12}>
                                <ul>
                                    <li className="footer__main__listmenu">Policy Rules</li>
                                    <li className="footer__main__listmenu">Cookie Policy</li>
                                    <li className="footer__main__listmenu">Privacy Policy</li>
                                </ul>
                            </Col>
                            <Col lg={8}  sm={8} xs={12}>
                                <ul>
                                    <li className="footer__main__listmenu">Contact</li>
                                    <li className="footer__main__listmenu">FAQ</li>
                                    <li className="footer__main__listmenu">Support</li>
                                </ul>
                            </Col>
                            <div className="footer__main__coppyright">
                                <p className="footer__main__listmenu">Name Inc 2022  Coppyright</p>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>

            <style jsx>{`
            .footer__main{
                min-height: 180px;
            }

            .footer__main--img{
                width: 120px;
                margin-right: 16px;
            }

            .footer__main__nameweb{
                font-weight: 700;
                font-size: 24px;
                text-transform: uppercase;
                color: #1F1E22;
                margin: 0 16px;
                text-align: center;
            }

            .footer__main__listicon{
                font-size: 28px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                padding: 12px 24px;
                color: #FF8F5C;
            }

            .footer__main__listmenu{
                list-style-type: none;
                font-weight: 550;
                font-size: 15px;
                line-height: 20px;
                text-transform: capitalize;
                color: #1F1E22;
                margin: 6px;
            }

            .footer__main__coppyright{
                margin: 12px auto;
            }

            .footer__main__coppyright > .footer__main__listmenu{
                font-weight: 500;
                font-size: 13px;
            }
            `}</style>
        </div>
    )
}