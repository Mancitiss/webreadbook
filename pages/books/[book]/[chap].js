import Main from "../../../layouts/Main";
import { Breadcrumb, Button, Col, Row } from 'antd';
import { ReadOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import TextHeading from "../../../component/common/TextHeading";
import { BackwardOutlined, ForwardOutlined } from "@ant-design/icons";
import Book from "../../../component/book/Book";
import Image from "next/image";
import IconLight from '../../../assets/images/icon-sunlight.svg'
import IconDark from '../../../assets/images/icon-darkmon.svg'
import { useEffect, useState } from "react";
import axios from 'axios';

export default function ReadBook() {
    const hello = 'book1'
    const router = useRouter()
    const [check, setCheck] = useState(false)
    const [nChap, setNChap] = useState("")
    const [iChap, setIChap] = useState("")
    const [cChap, setCChap] = useState("")
    const [sName, setSName] = useState("")
    async function getChapter() {
        const idChap = localStorage.getItem("read_chapter")
        let data_new = []
        let res = await axios.get("http://127.0.0.1:8000/api/chapter/" + idChap + "/")
            .then(
                response => {
                    let data = response.data
                    data_new = data
                }
            )
            .catch(
                error => console.log(error)
            );

        setNChap(data_new.chapter_name);
        setIChap(data_new.index);
        setCChap(data_new.content);
        setSName(localStorage.getItem("read_chap_name"))



    }
    async function btnPre() {

    }
    async function btnNex() {

    }
    getChapter()
    useEffect(() => {
        getChapter()
        const icon = document.getElementsByClassName('icon__light__darkmode')
        const iconVocie = document.getElementsByClassName('icon__play__voice')
        const iconSettingVocie = document.getElementsByClassName('icon__setting__voice')
        const bg = document.getElementsByClassName('layout__main')
        const header = document.getElementsByClassName('ant-layout-header')
        const footer = document.getElementsByClassName('ant-layout-footer')
        const textHeading = document.getElementsByClassName('text__heading__common-content')
        const nextBack = document.getElementsByClassName('btn__next__back--chap')
        const nameWeb = document.getElementsByClassName('footer__main__nameweb')
        const textFooter = document.getElementsByClassName('footer__main__listmenu')
        const bookBg = document.getElementsByClassName("content__book__chap--bg")
        const lopGia = document.getElementsByClassName("lopgia")
        const textBook = document.getElementsByClassName("content__book__chap--content")

        icon[0].classList.toggle('icon__dark')
        iconVocie[0].classList.toggle('icon__dark')
        iconSettingVocie[0].classList.toggle('icon__dark')
        bg[0].classList.toggle('bg__dark')
        header[0].classList.toggle('bg__dark')
        footer[0].classList.toggle('bg__dark')
        textHeading[0].classList.toggle('bg__dark')
        nameWeb[0].classList.toggle('bg__dark')
        textBook[0].classList.toggle('text__dark')
        for (let i = 0; i < textFooter.length; i++) {
            textFooter[i].classList.toggle('bg__dark')
        }
        if (check) {
            bookBg[0].style.setProperty('--dark', '#ffff'),
                lopGia[0].style.setProperty('--dark', '#ffff')
        }
        else (
            bookBg[0].style.setProperty('--dark', '#111'),
            lopGia[0].style.setProperty('--dark', '#111')
        )
        // console.log('l');
    }, [check])

    return (
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
                        <Breadcrumb.Item>Chap {iChap}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="readbook__content__main">
                        <TextHeading>{sName}</TextHeading>
                        <div className="readbook__content__main--title">
                            <Row justify="center" align='middle' >
                                <Col lg={5} sm={2} xs={0}></Col>
                                <Col lg={4} sm={6} xs={7} >
                                    <Button onClick={btnPre}>
                                    <BackwardOutlined className="icon__nextback" />
                                    </Button>
                                </Col>
                                <Col lg={6} sm={8} xs={10}>
                                    <p className="readbook__content__main--title--chap">Chap {iChap}: {nChap}</p>
                                </Col>
                                <Col lg={4} sm={6} xs={7} >
                                    <Button onClick={btnNex}>
                                    <ForwardOutlined className="icon__nextback" />
                                    </Button>
                                    
                                    
                                </Col>
                                <Col lg={5} sm={2} xs={0}></Col>
                            </Row>
                        </div>
                        <input type='checkbox' id='change__mode' className="change__mode__book" onClick={() => { setCheck(!check) }} style={{ display: 'none' }} />
                        <div className="readbook__content__main--content">
                            <div className="readbook__content__main--groundicon">
                                <div className="icon__light__darkmode" >
                                    <label style={{ height: '36px', cursor: 'pointer' }} htmlFor="change__mode">
                                        {check ? <Image src={IconDark} /> : <Image src={IconLight} />}
                                    </label>
                                </div>

                            </div>
                            
                            <Book check={check} content={cChap}></Book>
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

                .icon__dark{
                    background: #1F1E22;
                    box-shadow: 4px 2px 4px rgba(0, 0, 0, 0.25), inset 3px 2px 4px rgba(0, 0, 0, 0.25);
                }

                .change__mode__book{
                    display:none;
                }
                
                @media  (max-width: 992px)and (min-width:577px) {
                    .readbook__content{
                        margin:92px 8px 16px;
                    }

                    .readbook__content__main--title--chap{
                        font-size:20px;
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