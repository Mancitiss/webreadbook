import Main from "../../layouts/Main";
import { Breadcrumb, Button, Col, Row } from 'antd';
import { ReadOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import TextHeading from "../../component/common/TextHeading";
import { useEffect, useState } from "react";
export default function ReadBook(){
    const [review, setReview]= useState('Review sách Xin đổi tổn thương lấy trưởng thành. Xin đổi tổn thương lấy trưởng thành - cuốn sách giúp bạn lấy lại tinh thần sau những ngày chán nản với trọng trách gánh vác trên vai “người trưởng thành”. Lý Ái Linh sẽ giúp bạn nhận ra đôi khi chịu tổn thương không phải là xấu, nếu tổn thương ấy giúp chúng ta trưởng thành thì bạn hãy cảm ơn vì tổn thương ấy khiến bạn mạnh mẽ hơn.Cảm nhận sách Xin đổi tổn thương lấy trưởng thànhDù muốn hay không thì ai rồi cũng bắt buộc phải trưởng thành thế nhưng không phải ai cũng chấp nhận được sự thay đổi nhanh chóng của thời gian. Chúng ta buồn vì khi lớn lên rồi, được thoải mái làm điều mình thích nhưng chính chúng ta lại cô đơn đến thế. Liệu phải chịu bao nhiêu tổn thương mới có thể trưởng thành? Nếu muốn biết đáp án mời bạn cùng đọc cuốn sách này nhé!Không có bất cứ thành công nào từ trên trời rơi xuống, nếu không phải đánh đổi bằng mồ hôi nước mắt thì sẽ đánh đổi bằng rất nhiều mồ hôi nước mắt. Thế nhưng trên cuộc hành trình ấy bạn không hề cô đơn vì xung quanh chúng ta có rất nhiều người đã và đang cố gắng mỗi ngày như thế. Tuổi trẻ ấy mà, ai chẳng phải trải qua những tháng ngày mệt mỏi không biết nên làm thế nào để vượt qua. Vậy mà bằng một cách nào đó sau này khi nhìn lại chúng ta lại không cảm thấy có chút mệt mỏi nào. Tất cả chỉ là thử thách, bạn kiên trì ắt sẽ được đền đáp.')
    return(
        <div>
            <Main>
            <div className="readbook__content">
                    <Breadcrumb className="readbook__detail__breadcurmb">
                        <Breadcrumb.Item href="/">
                        <ReadOutlined className="icon__book" />
                            <span>Book</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item onClick={() => router.push(`/books/detail/${hello}`)}> 
                            <span>Love story valut</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Review</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="readbook__content__main">
                        <TextHeading>Love story Vault</TextHeading>
                        <div className="readbook__content__main--title">
                            <Row justify="center" align='middle' >
                                <Col lg={5}  sm={2} xs={0}></Col>
                                <Col lg={4}  sm={6} xs={7} >
                                    {/* <BackwardOutlined className="icon__nextback" />
                                    <span className="btn__next__back--chap">Back</span> */}
                                </Col>
                                <Col lg={6}  sm={8} xs={10}>
                                    <p className="readbook__content__main--title--chap">I like it beacause </p>
                                </Col>
                                <Col lg={4}  sm={6} xs={7} >
                                    {/* <span className="btn__next__back--chap">Next</span>
                                    <ForwardOutlined  className="icon__nextback"/> */}
                                </Col>
                                <Col lg={5}  sm={2} xs={0}></Col>
                            </Row>
                        </div>
                        <Row>
                            <Col span={24}>
                                <div className="content__book__chap--bg">
                                    <div className="lopgia"></div>
                                    <p className="content__book__chap--content">{review}</p>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </div>
            </Main>
            <style jsx>{`
                .readbook__content{
                    margin: 92px 24px 24px;
                }

                .readbook__content__main--title{
                    text-align:center;
                    font-weight: 600;
                    font-size: 20px;
                    color: rgba(31, 30, 34, 0.8);
                    margin: 12px 0;
                }

                .readbook__content__main--title--chap{
                    margin: 0;
                    color: #FF8F5C;
                    font-size: 24px;
                }

                .icon__light__darkmode{
                    background: #FFFFFF;
                    box-shadow: 2px 2px 4px rgb(0 0 0 / 25%), inset 2px 2px 4px rgb(0 0 0 / 25%);
                    width: 57px;
                    height: 57px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: fixed;
                    left: 12px;
                    top: 180px;
                    cursor: pointer;
                    z-index:100;

                }
                .content__book__chap--content{
                    -webkit-column-count: 2;
                    -moz-column-count: 2;
                    column-count: 2;
                    column-gap: 7%;
                    text-align: justify;
                    animation: opentext 3s linear;
                    font-family: 'Oxanium',sans-serif;
                }

                .content__book__chap--bg{
                    width: 90%;
                    margin: 12px auto;
                    padding: 16px;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 32px;
                    color: rgba(31, 30, 34, 0.8);
                    position:relative;
                    transform-style: preserve-3d;
                    perspective: 5000px;
                }

                .content__book__chap--bg::before,
                .content__book__chap--bg::after{
                    position:absolute;
                    content:'';
                    top:0;
                    left:0;
                    height:100%;
                    width:48%;
                    background: var(--dark,#DCF1FE);
                    box-shadow: 2px 2px 4px rgb(0 0 0 / 25%);
                    border-radius: 15px;
                    animation: opentext 3s linear;
                    z-index: -1;
                }

                .content__book__chap--bg::after{
                    right:0;
                    left:unset;
                }

                .lopgia{
                    position: absolute;
                    top: 0;
                    right: 0;
                    height: 100%;
                    width: 100%;
                    transform-style: preserve-3d;
                    animation: openbook 2s linear ;
                    transform: rotateY(0);
                    z-index: -1;
                }

                .lopgia::before,.lopgia::after{
                    position:absolute;
                    content:'';
                    top:0;
                    left:0;
                    height:100%;
                    width:48%;
                    background: var(--dark,#DCF1FE);
                    box-shadow: 2px 2px 4px rgb(0 0 0 / 25%);
                    border-radius: 15px;
                }

                .lopgia::after{
                    right:0;
                    left:unset;
                }
                
                @media  (max-width: 992px)and (min-width:577px) {
                    .readbook__content{
                        margin:92px 8px 16px;
                    }

                    .readbook__content__main--title--chap{
                        font-size:20px;
                    }

                    .content__book__chap--bg{
                        width:95%;
                    }
                    .content__book__chap--content{
                        column-gap: 3%;
                    }

                    .lopgia::before,.lopgia::after{
                        width:50%
                    }
                }

                @media  (max-width: 576px){
                    .readbook__content{
                        margin:92px 8px 16px;
                    }

                    .readbook__content__main--title--chap{
                        font-size:18px;
                    }

                    .icon__light__darkmode{
                        top: unset;
                        bottom: 42px;
                    }

                    .content__book__chap--bg{
                        width:95%;
                        padding:12px;
                        color: rgba(31,30,34,1);
                    }

                    .content__book__chap--bg::before,
                    .content__book__chap--bg::after{
                        display:none;
                    }

                    .content__book__chap--content{
                        column-count: 1;
                    }
                    .lopgia::before,.lopgia::after{
                        display:none;
                    }
                }
                
                `}</style>

            <style jsx global>{`

                .bg__dark{
                    background: #1F1E22 !important;
                    color: #FFFFFF !important;
                }

                .text__dark{
                    color: rgba(255, 255, 255, 0.8) !important;
                }

                .readbook__content .readbook__detail__breadcurmb{
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 36px;
                    cursor: pointer;
                }


                .readbook__content .readbook__detail__breadcurmb .icon__book{
                    font-size:26px;
                    color:#FF8F5C;
                }

                .readbook__content .readbook__content__main--title .icon__nextback{
                    font-size: 24px;
                    color: #FF8F5C;
                    margin: 0 8px;
                }
            `}</style>
        </div>
    )
}