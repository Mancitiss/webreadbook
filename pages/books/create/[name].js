import Main from "../../../layouts/Main";
import { Breadcrumb, Col, Row } from 'antd';
import { ReadOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import CreateBookContent from "../../../component/book/CreateBook";
import Chap from '../../../component/items/Chap'

export default function EditBook(){
    const hello='book1'
    const router= useRouter()
    const chap = false
    return(
        <div>
            <Main>
                <div className="book__edit__book">
                    <Breadcrumb className="book__detail__breadcurmb">
                        <Breadcrumb.Item href="/">
                        <ReadOutlined className="icon__book" />
                        <span>Book</span>
                        </Breadcrumb.Item >
                        {/* <Breadcrumb.Item onClick={() => router.push(`/books/detail/${hello}`)}> Love story valut</Breadcrumb.Item> */}
                        <Breadcrumb.Item > Create & Edit</Breadcrumb.Item>
                    </Breadcrumb>
                    <Row>
                        <Col lg={58}  sm={24} xs={24}>
                            <CreateBookContent></CreateBookContent>
                        </Col>
                        {/* <Col lg={6}  sm={24} xs={24}>
                            <h3 className="book__edit__book__chap--title">All chap</h3>
                            <div>
                                {
                                    chap? (<>
                                        <Chap ></Chap>
                                        <Chap ></Chap>
                                        <Chap ></Chap>
                                        <Chap ></Chap>
                                        <Chap ></Chap>
                                        <Chap ></Chap></>
                                    ):(<> <p>No have chap in your book</p></>)
                                }
                            </div>
                        </Col> */}  
                    </Row>
                </div>
            </Main>

            <style jsx>{`
                .book__edit__book{
                    margin: 92px 24px 24px;
                }

                .book__edit__book__chap--title{
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 24px;
                    color: #1F1E22;
                    position:relative;
                    display: inline-block;
                    margin:12px 24px 4px 4px;
                }
            `}</style>

            <style jsx global>{`
                .book__edit__book .book__detail__breadcurmb{
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 36px;
                    cursor: pointer;
                }

                .book__edit__book .book__detail__breadcurmb .icon__book{
                    font-size:26px;
                    color:#FF8F5C;
                }
            `}</style>
        </div>
    )
}