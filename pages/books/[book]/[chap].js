import Main from "../../../layouts/Main";
import { Breadcrumb, Col, Row } from 'antd';
import { ReadOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import TextHeading from "../../../component/common/TextHeading";
import { BackwardOutlined,ForwardOutlined  } from "@ant-design/icons";
import Book from "../../../component/book/Book";
import Image from "next/image";
import IconLight from '../../../assets/images/icon-sunlight.svg'
import IconDark from '../../../assets/images/icon-darkmon.svg'
import { useEffect, useState } from "react";


export default function ReadBook(){
    const hello='book1'
    const router= useRouter()
    const [check, setCheck]= useState(false)
    useEffect(()=>{
        
        const icon = document.getElementsByClassName('icon__light__darkmode')
        const bg = document.getElementsByClassName('layout__main')
        const header = document.getElementsByClassName('ant-layout-header')
        const footer = document.getElementsByClassName('ant-layout-footer')
        const textHeading = document.getElementsByClassName('text__heading__common-content')
        const nextBack = document.getElementsByClassName('btn__next__back--chap')
        const nameWeb = document.getElementsByClassName('footer__main__nameweb')
        const textFooter = document.getElementsByClassName('footer__main__listmenu')
        const bookBg = document.getElementsByClassName("content__book__chap--bg")
        const lopGia = document.getElementsByClassName("lopgia")
        const textBook= document.getElementsByClassName("content__book__chap--content")
        
        icon[0].classList.toggle('icon__dark')
        bg[0].classList.toggle('bg__dark')
        header[0].classList.toggle('bg__dark')
        footer[0].classList.toggle('bg__dark')
        textHeading[0].classList.toggle('bg__dark')
        nextBack[0].classList.toggle('bg__dark')
        nextBack[1].classList.toggle('bg__dark')
        nameWeb[0].classList.toggle('bg__dark')
        textBook[0].classList.toggle('text__dark')
        for( let i=0; i< textFooter.length; i++){
            textFooter[i].classList.toggle('bg__dark')
        }
        if(check){
            bookBg[0].style.setProperty('--dark','#1D1C1F'),
            lopGia[0].style.setProperty('--dark','#1D1C1F')
        }
        else(
            bookBg[0].style.setProperty('--dark',''),
            lopGia[0].style.setProperty('--dark','')
        )
        // console.log('l');
    }, [check])

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
                        <Breadcrumb.Item>Chap 123</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="readbook__content__main">
                        <TextHeading>Love story Vault</TextHeading>
                        <div className="readbook__content__main--title">
                            <Row justify="center" align='middle' >
                                <Col span={5}></Col>
                                <Col span={4} >
                                    <BackwardOutlined className="icon__nextback" />
                                    <span className="btn__next__back--chap">Back</span>
                                </Col>
                                <Col span={6}>
                                    <p className="readbook__content__main--title--chap">Chap 132: Where the love</p>
                                </Col>
                                <Col span={4} >
                                    <span className="btn__next__back--chap">Next</span>
                                    <ForwardOutlined  className="icon__nextback"/>
                                </Col>
                                <Col span={5}></Col>
                            </Row>
                        </div>
                            <input type='checkbox' id='change__mode' className="change__mode__book" onClick={()=>{setCheck(!check)}} style={{display:'none'}} />
                        <div className="readbook__content__main--content">
                            <div className="readbook__content__main--groundicon">
                                <div className="icon__light__darkmode" >
                                    <label style={{height:'36px',cursor: 'pointer'}} htmlFor="change__mode">
                                        { check ? <Image src={IconDark} />: <Image src={IconLight} />}
                                        </label>
                                </div>
                            </div>
                            <Book></Book>
                        </div>

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
                    bottom: 140px;
                    cursor: pointer;
                    z-index:100;

                }

                .icon__dark{
                    background: #1F1E22;
                    box-shadow: 4px 2px 4px rgba(0, 0, 0, 0.25), inset 3px 2px 4px rgba(0, 0, 0, 0.25);
                }

                .change__mode__book{
                    display:none;
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

                // .readbook__content .readbook__detail__breadcurmb:hover{
                //     color:#000;
                // }

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