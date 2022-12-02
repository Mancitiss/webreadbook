import { Col, Row, Rate, Button } from "antd"
import Image from 'next/image'
import NvBook1 from '../../assets/images/nv-book-1.png'
import NvBook2 from '../../assets/images/nv-book-2.png'
import NvBook3 from '../../assets/images/nv-book-3.png'
import Book1 from "../../assets/images/book-1.png"
import Book2 from "../../assets/images/book-2.png"
import Book3 from "../../assets/images/book-3.png"
import{EyeFilled,TrophyFilled, SendOutlined} from '@ant-design/icons'
import { useEffect, useRef, useState } from "react"

const Baner= ()=>{
    const books=[
        {
            name:"Book 1",
            img:Book1,
            detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            onwner:'Luck',
            timer:'1993',
            imgNV:NvBook1
        },
        {
            name:"Book 2",
            img:Book2,
            detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            onwner:'Luck 2',
            timer:'1996',
            imgNV:NvBook2
        },
        {
            name:"Book 3",
            img:Book3,
            detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            onwner:'Luck 3',
            timer:'1993',
            imgNV:NvBook3
        }
    ]
    const [image, setImage]= useState(books[0].imgNV)
    const [detailBook, setDetailBook]= useState(books[0].detail)
    const [nameBook, setNameBook]= useState(books[0].name)
    const [timeBook, setTimeBook]= useState(books[0].timer)
    const [onwerBook, setOnwerBook]= useState(books[0].onwner)
    const [changeImage, setChangeImage]= useState(false)

    useEffect(()=>{
        const top1= document.getElementById('top1')
        const top2= document.getElementById('top2')
        const top3= document.getElementById('top3')
        const top4= document.getElementById('top4')
        // console.log('change');
        if(top1.checked ){
            // console.log('top1');
            setImage(books[0].imgNV)
            setNameBook(books[0].name)
            setDetailBook(books[0].detail)
            setTimeBook(books[0].timer)
            setOnwerBook(books[0].onwner)
        }
        if(top2.checked ){
            // console.log('top2');
            setImage(books[1].imgNV)
            setNameBook(books[1].name)
            setDetailBook(books[1].detail)
            setTimeBook(books[1].timer)
            setOnwerBook(books[1].onwner)
        }
        if(top3.checked ){
            // console.log('top3');
            setImage(books[2].imgNV)
            setNameBook(books[2].name)
            setDetailBook(books[2].detail)
            setTimeBook(books[2].timer)
            setOnwerBook(books[2].onwner)
        }
        if(top4.checked ){
            // console.log('top4');
            setImage(books[0].imgNV)
            setNameBook(books[0].name)
            setDetailBook(books[0].detail)
            setTimeBook(books[0].timer)
            setOnwerBook(books[0].onwner)
        }

    },[changeImage])

    return(
        <div >
            <div className="baner__home">
                <Row>
                    <Col lg={{order:1, span:12}}  sm={{order:1, span:14}} xs={{order:2, span:24}} >
                        <div className="baner__home__text" >
                            <h1 className="baner__home__namebook">{nameBook}</h1>
                            <h3 className="baner__home__titlebook">{detailBook}</h3>
                            <Row>
                                <Col lg={10}  sm={10} xs={12}>
                                    <Rate className="baner__home__starbook" disabled allowHalf defaultValue={4.5} />
                                </Col>
                                <Col lg={4}  sm={5} xs={6}>
                                    <p className="baner__home__infoauthor"><b>By </b>{onwerBook}</p>
                                </Col>
                                <Col lg={4}  sm={5} xs={6}>
                                    <p className="baner__home__infoauthor"><b>In </b>{timeBook}</p>
                                </Col>
                            </Row>
                            <div className="baner__home__list--btn">
                                <button className="baner__home--btn">Read Now</button>
                                <button className="baner__home--btn baner__home--btn--right">See More</button>
                            </div>
                        </div>
                    </Col>
                    
                    <Col lg={{order:2, span:12}}  sm={{order:1, span:10}} xs={{order:1, span:24}} >
                        <Row>
                            <Col lg={16}  sm={24} xs={24} justify='center'>
                                <div className="baner__home__right" >
                                    <div className="baner__home__bg-slide"></div>
                                    <div className="baner__home__img-slide" >
                                        <Image src={image} alt='Nhan vat truyen' className="img__nv" objectFit='fill' />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8} md={0} sm={0} xs={0} >
                                <div className="baner__home__icon-slide">
                                    <input  className="input__top__item" onClick={()=>{setChangeImage(!changeImage)}} type={'radio'} id='top1' name="radio__item" defaultChecked/>
                                    <label htmlFor="top1"  ><div  className="baner__home__slide-item baner__item--active" >
                                        <div className="baner__home__slide--img ">
                                            <Image src={Book1} alt="" width={60} height={68}/>
                                        </div>
                                        <div className="baner__home__side-text">
                                            <p className="baner__home__side--name">Broken Horn</p>
                                            <EyeFilled /><span className="baner__home__side--view">145,290 K</span>
                                        </div>
                                        <TrophyFilled />
                                        <SendOutlined className="icon__choose--item" />
                                    </div></label>
                                    <input className="input__top__item" onClick={()=>{setChangeImage(!changeImage)}} type={'radio'} id='top2' name="radio__item" />
                                    <label htmlFor="top2"  ><div   className="baner__home__slide-item baner__item--active" >
                                        <div className="baner__home__slide--img">
                                            <Image src={Book1} alt="" width={60} height={68}/>
                                        </div>
                                        <div className="baner__home__side-text">
                                            <p className="baner__home__side--name">Broken Horn</p>
                                            <EyeFilled /><span className="baner__home__side--view">145,290 K</span>
                                        </div>
                                        <TrophyFilled />
                                        <SendOutlined className="icon__choose--item" />
                                    </div></label>
                                    <input  className="input__top__item" onClick={()=>{setChangeImage(!changeImage)}} type={'radio'} id='top3' name="radio__item" />
                                    <label htmlFor="top3"  ><div  className="baner__home__slide-item  baner__item--active" >
                                        <div className="baner__home__slide--img">
                                            <Image src={Book1} alt="" width={60} height={68}/>
                                        </div>
                                        <div className="baner__home__side-text">
                                            <p className="baner__home__side--name">Broken Horn</p>
                                            <EyeFilled /><span className="baner__home__side--view">145,290 K</span>
                                        </div>
                                        <TrophyFilled />
                                        <SendOutlined className="icon__choose--item" />
                                    </div></label>
                                    <input  className="input__top__item" onClick={()=>{setChangeImage(!changeImage)}} type={'radio'} id='top4' name="radio__item" />
                                    <label htmlFor="top4"  ><div  className="baner__home__slide-item  baner__item--active" >
                                        <div className="baner__home__slide--img">
                                            <Image src={Book1} alt="" width={60} height={68}/>
                                        </div>
                                        <div className="baner__home__side-text">
                                            <p className="baner__home__side--name">Broken Horn</p>
                                            <EyeFilled /><span className="baner__home__side--view">145,290 K</span>
                                        </div>
                                        <TrophyFilled />
                                        <SendOutlined className="icon__choose--item" />
                                    </div></label>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    
                </Row>
            </div>
            <style jsx >{`
                .baner__home{
                    max-height:400px;
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
                    // animation: fadein 2s ;
                }

                .baner__home__titlebook{
                    font-weight: 600;
                    font-size: 32px;
                    line-height: 40px;
                    color: #1F1E22;
                    max-width: 80%;
                    opacity:0.8;
                    margin-bottom:8px;
                    // animation: fadein 2s ;
                }
                
                .baner__home__infoauthor{
                    margin: 4px 0 0;
                    font-weight: 600;
                    font-size: 18px;
                    color: #FF8F5C;
                    // animation: fadein 2s ;
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
                    max-height: 360px;
                    width: 100%;
                    overflow: hidden;
                    position: absolute;
                    top: -32px;
                    text-align: center;
                    padding-right: 24px;
                    animation: fadein 10s infinite;
                }

                @keyframes fadein{
                    0%, 100%{
                        scale: 0.9;
                        opacity:0.8;
                        transform: translate(-20px, 10px);
                    }
                    60%{
                        scale: 1;
                        opacity:1.04;
                        transform: translate(0px, 0px);
                    }
                }

                .baner__home__icon-slide{
                    display: flex;
                    flex-direction: column;
                }

                label .baner__home__slide-item{
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    position:relative;
                    margin-bottom:32px;
                    min-width: 222px;
                    cursor: pointer;
                }

                .input__top__item:first-child + label,
                label:last-child{
                    margin-left: -56px;
                }

                .baner__home__slide-item::before{
                    content: "";
                    position: absolute;
                    height: 72px;
                    width: 72px;
                    border-radius: 50%;
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

                .input__top__item{
                    display:none;
                }

                .input__top__item:checked +label .baner__item--active::before,
                .input__top__item:checked +label .baner__item--active::after{
                    content:'';
                    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%238BD0FC' stroke-width='10' stroke-dasharray='50%25%2c 13%25' stroke-dashoffset='86' stroke-linecap='butt'/%3e%3c/svg%3e");
                    border-radius: 100px;
                    position: absolute;
                    height: 80px;
                    width: 80px;
                    top:-6px;
                    left:6px;
                    border:none;
                    transition: all 0.6s;
                    animation: rotate 8s infinite;
                    box-shadow:none;
                }

                .baner__home__list--btn{
                    display:flex;
                    margin: 20px 12px;
                }

                .baner__home--btn{
                    height:48px;
                    width:130px;
                    border-radius: 20px;
                    background: #8BD0FC;
                    color:#fff;
                    font-weight: 700;
                    font-size: 16px;
                    border: none;
                    margin-right:24px;
                    cursor: pointer;
                    box-shadow: 3px 5px 10px #ccc;
                    transition: 0.3s;
                }
                
                .baner__home--btn:hover{
                    box-shadow: 1px 3px 5px #ccc;
                    scale:1.05;
                    transition: 0.5s;
                    transform: translate(1px, -2px);
                }

                .baner__home--btn--right{
                    background: #fff;
                    color: #8bd0fc;
                    border: 1px solid #8BD0FC;
                }
                .input__top__item:checked +label .baner__item--active::after{
                    height: 110px;
                    width: 110px;
                    transform: rotate(80deg);
                    top: -21px;
                    left: -9px;
                    opacity: 0.5;
                    transition: all 0.6s;
                    animation: rotate 12s infinite;
                }
                
                
                @media  (max-width: 992px)and (min-width:577px) {
                    
                    .baner__home__titlebook{
                        font-size:26px;
                    }
                    
                    .baner__home__starbook{
                        font-size:18px;
                    }
    
                    .baner__home__infoauthor{
                        font-size:14px;
                    }
                    
                    .baner__home__text{
                        margin: 16px 0 12px 6px;
                    }
    
                    .baner__home__namebook{
                        font-size:32px;
                    }
    
                    .baner__home__titlebook{
                        font-size:24px;
                    }
                    
                    .baner__home--btn{
                        height:42px;
                        width:110px;
                    }
                    .baner__home__bg-slide{
                        width:280px;
                        height:280px
                    }

                    .baner__home__img-slide{
                        left:12px;
                        top:-12px;
                    }
                  }
    
                  @media  (max-width: 576px){
                    .baner__home{
                        max-height:unset;
                    }

                    .baner__home__right{
                        margin-left: 50%;
                        transform: translateX(-50%);
                        overflow: hidden;
                        display: inline-block;
                        float:unset;
                    }

                    .baner__home__text{
                        margin: 16px 0 12px 6px;
                    }
    
                    .baner__home__namebook{
                        font-size:26px;
                    }
    
                    .baner__home__titlebook{
                        font-size: 18px;
                        line-height: 24px;
                    }
                    
                    .baner__home--btn{
                        height:42px;
                        width:110px;
                    }

                    .baner__home__img-slide{
                        left: 16px;
                        top: 0;
                    }

                    .baner__home .baner__home__starbook{
                        font-size:16px
                    }
                  }

                @keyframes rotate {
                    0%,100% {
                        scale:0.9;
                        rotate: 0deg;
                    }
                    50% {
                        scale:1.1;
                        rotate: 180deg;
                }
            `}</style>
            <style jsx global>{`
            .baner__home .baner__home__starbook{
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
            

            .baner__home .icon__choose--item{
                position: absolute;
                transform: matrix(-1, 0, 0, 1, 0, 0);
                font-size: 22px;
                right: 12px;
                color: #8BD0FC;
                display: none;
            }

            .baner__home .input__top__item:checked +label .icon__choose--item{
                display: block;
            }

            @media  (max-width: 576px){
                .baner__home .baner__home__starbook{
                    font-size:18px
                }
              }
            `}</style>
        </div>
    )
}
export default Baner