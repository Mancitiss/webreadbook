import { Row, Col, Rate } from "antd";
import Image from "next/image";
import Book1 from '../../assets/images/baner-book1.png'
import { Input } from 'antd';
const { TextArea } = Input;
import { EditFilled } from "@ant-design/icons";

export default function EditBookContent() {
    const mainContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus."
    const onChange = (e) => {
        console.log(e);
      };
    return (
        <div>
            <div className="component__detail__edit">
                <Row>
                    <Col span={8}>
                        <div className="component__detail__edit__img">
                            <Image src={Book1} layout='fixed' alt='hinh bia sach' />
                        </div>
                        <div className="component__detail__edit__info">
                            <Row>
                                <Col span={24}>
                                    <div className="component__detail__edit__information">
                                        <h1 className="component__detail__edit__information--name">Love story Vault</h1>
                                        <Rate className="component__detail__edit__information--rate" allowHalf defaultValue={4.5} disabled />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span={16}>
                        <div className="component__detail__edit__content">
                            <h3 className="component__detail__edit__content--title">Main content</h3>
                            <span className="component__detail__edit__content--icon" >
                                <EditFilled />
                            </span>
                            <TextArea className="component__detail__edit__content--detail" value={mainContent} allowClear readOnly onChange={onChange} />
                        </div>
                    </Col>
                </Row>
            </div>

            <style jsx>{`
                .component__detail__edit{
                    padding: 12px 8px;
                    position:relative;
                }

                .component__detail__edit__img{
                    width: 90%;
                    max-width: 310px;
                    overflow: hidden;
                    margin: 0 auto 12px;
                }

                .component__detail__edit__content{
                    font-weight: 550;
                    font-size: 14px;
                    line-height: 18px;
                    color: rgba(31, 30, 34, 0.7);
                    width:90%;
                    margin:0 auto 12px;
                }


                .component__detail__edit__information{
                    text-align: center;
                    font-weight: bolder;
                    font-size: 32px;
                    color: #1F1E22;
                    margin: 6px 0 12px;
                }

                .component__detail__edit__information--name{
                    margin:0;
                }

                .component__detail__edit__content{
                    width:90%;
                    margin:0 auto 20px;
                }

                .component__detail__edit__content--title{
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 24px;
                    color: #1F1E22;
                    position:relative;
                    display: inline-block;
                    margin-right: 24px;
                }

                .component__detail__edit__content--icon{
                   
                    font-size: 24px;
                    color: #FF8F5C;
                    height: 24px;
                    width: 24px;
                    cursor: pointer;
                }

            `}</style>

            <style jsx global>{`
                .component__detail__edit .component__detail__edit__information .component__detail__edit__information--rate{
                    font-size:20px
                }

                .component__detail__edit .component__detail__edit__content--detail{
                    font-weight: 550;
                    font-size: 14px;
                    color: rgba(31, 30, 34, 0.7);
                    height: 360px !important;
                    width:100%;
                    overflow-y: scroll;
                    letter-spacing: 0.05em;
                    margin:6px 0 12px;
                    padding:12px;
                    background: #FFFFFF;
                    box-shadow: 0px 0px 4px 1px rgb(0 0 0 / 25%), inset 5px 5px 10px rgb(0 0 0 / 25%);
                    border-radius: 10px;
                    border: none;
                }

                .component__detail__edit .ant-input-affix-wrapper:focus, 
                .component__detail__edit  .ant-input-affix-wrapper-focused{
                    box-shadow: unset;
                    border-radius: 10px;
                    border: none !important;
                }
            `}</style>
        </div>
    )
}