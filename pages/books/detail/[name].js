import Main from "../../../layouts/Main";
import { Breadcrumb, Col, Row } from 'antd';
import { ReadOutlined } from "@ant-design/icons";
import ItemReview from "../../../component/items/ItemReview";
import BookDetail from "../../../component/book/BookDetail";
import Chap from "../../../component/items/Chap";
import TextHeading from "../../../component/common/TextHeading";
import CommentBook from "../../../component/book/CommentBook";
import Card from "../../../component/items/Card";

export default function BookInfo(){
    return(
        <div>
            <Main>
                <div className="book__detail">
                    <Breadcrumb className="book__detail__breadcurmb">
                        <Breadcrumb.Item href="/">
                        <ReadOutlined className="icon__book" />
                        <span>Book</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item> Love story valut</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="book__detail__content">
                        <Row>
                            <Col span={18}>
                                <div>
                                    <BookDetail></BookDetail>
                                </div>
                                <div className="book__detail__content__listchap">
                                    <Row>
                                        <Col span={24}>
                                            <div className="book__detail__content__listchap--title">
                                                <TextHeading>All chap</TextHeading>
                                            </div>
                                        </Col>
                                        <Col span={12}>
                                            <Chap></Chap>
                                        </Col>
                                        <Col span={12}>
                                            <Chap></Chap>
                                        </Col>
                                        <Col span={12}>
                                            <Chap></Chap>
                                        </Col>
                                        <Col span={12}>
                                            <Chap></Chap>
                                        </Col>
                                        <Col span={12}>
                                            <Chap></Chap>
                                        </Col>
                                        <Col span={12}>
                                            <Chap></Chap>
                                        </Col>
                                        <Col span={12}>
                                            <Chap></Chap>
                                        </Col>
                                        <Col span={12}>
                                            <Chap></Chap>
                                        </Col>
                                        <Col span={12}>
                                            <Chap></Chap>
                                        </Col>
                                        <Col span={12}>
                                            <Chap></Chap>
                                        </Col>
                                        <Col span={12}>
                                            <Chap></Chap>
                                        </Col>
                                        <Col span={12}>
                                            <Chap></Chap>
                                        </Col>
                                        <Col span={12}>
                                            <Chap></Chap>
                                        </Col>
                                        <Col span={12}>
                                            <Chap></Chap>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="book__detail__content__comment">
                                    <Row>
                                        <Col span={24}>
                                            <div className="book__detail__content__listchap--title">
                                                <TextHeading>Comment</TextHeading>
                                            </div>
                                        </Col>
                                        <div className="book__detail__content__comment--comment">
                                            <CommentBook ></CommentBook>
                                        </div>
                                        
                                    </Row>
                                </div>
                                <div className="book__detail__content__similar">
                                <Row>
                                        <Col span={24}>
                                            <div className="book__detail__content__listchap--title">
                                                <TextHeading>Similar books</TextHeading>
                                            </div>
                                        </Col>
                                        <div>
                                            <Row>
                                                <Col span={6}>
                                                    <Card></Card>
                                                </Col>
                                                <Col span={6}>
                                                    <Card></Card>
                                                </Col>
                                                <Col span={6}>
                                                    <Card></Card>
                                                </Col>
                                                <Col span={6}>
                                                    <Card></Card>
                                                </Col>
                                            </Row>
                                        </div>
                                        
                                    </Row>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className="book__detail__navbar__review--title">
                                    <ReadOutlined />
                                    <span>Book review</span>
                                </div>
                                <Row>
                                    <Col span={24}>
                                        <ItemReview></ItemReview>
                                    </Col>
                                    <Col span={24}>
                                        <ItemReview></ItemReview>
                                    </Col>
                                    <Col span={24}>
                                        <ItemReview></ItemReview>
                                    </Col>
                                    <Col span={24}>
                                        <ItemReview></ItemReview>
                                    </Col>
                                    <Col span={24}>
                                        <ItemReview></ItemReview>
                                    </Col>
                                    <Col span={24}>
                                        <ItemReview></ItemReview>
                                    </Col>
                                    <Col span={24}>
                                        <ItemReview></ItemReview>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Main>

            <style jsx>{`
                .book__detail{
                    margin: 92px 24px 24px;
                }

                .book__detail__navbar__review--title{
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 22px;
                    color: #FF8F5C;
                    margin:0 0 16px;
                }

                .book__detail__content__listchap--title{
                    float: left;
                    margin: 12px 24px;
                }

                .book__detail__content__comment--comment{
                    width:85%;
                    margin:12px auto;
                }

                .book__detail__content__similar{
                    margin:24px 0;
                }
            `}</style>

            <style jsx global>{`
                .book__detail .book__detail__breadcurmb{
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 36px;
                }

                .book__detail .book__detail__breadcurmb .icon__book{
                    font-size:26px;
                    color:#FF8F5C;
                }

                .book__detail .book__detail__content .anticon-read{
                    font-size: 24px;
                    margin: 0px 6px;
                }
            `}</style>
        </div>
    )
}