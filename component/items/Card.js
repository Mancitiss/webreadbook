import { PushpinOutlined ,PushpinFilled} from "@ant-design/icons"
import { Button } from "antd"
import Image from "next/image"
import { useEffect, useState } from "react"
import Book1 from "../../assets/images/book-card-1.png"

export default function Card(){
    
    const [check, setCheck]= useState(false)
    // useEffect(()=>{
    //     const checkSave=()=>{
            
    //         console.log(check);
    //     }
    // },[check])
    
    return(
        <div>
            <div className="item__card__book">
                <div className="item__card__book--bg"></div>
                <input type='checkbox'style={{display:'none'}}  id='check__save'onClick={()=>{setCheck(!check)}} />
                <div className="item__card__book--content" >
                    <label htmlFor='check__save'>{check ?<PushpinOutlined /> :<PushpinFilled /> }</label>
                    <div className="item__card__book--img">
                        <Image src={Book1} alt="image book" width ={107} height={144}/>
                    </div>
                    <div className="item__card__book--text">
                        <h3 className="item__card__book--text--name"> <b>Sand and smoke</b></h3>
                        <p className="item__card__book--text--chap">Chap <b>123 /999</b></p>
                        <p className="item__card__book--text--intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate Lorem ipsum dolor sit amet </p>
                        <p className="item__card__book--text--author">By <b>Luck</b></p>
                    </div>
                    <Button className="item__card__book--btn">Read now</Button>
                </div>
                
            </div>

            <style jsx>{`
            .item__card__book{
                width: 200px;
                height: 287px;
                background: #FFFFFF;
                box-shadow: 0px 0px 4px 2px rgb(0 0 0 / 25%), 2px 2px 6px rgb(0 0 0 / 25%);
                border-radius: 5px;
                position: relative;
                margin:12px 6px;
            }
            
            .item__card__book--bg{
                height:100%;
                width:100%;
                position:absolute;
                left:0;
                top:0;
                overflow:hidden;
            }
            .item__card__book--bg::before{
                content:'Read and Listen';
                width:100%;
                height:100%;
                position:absolute;
                left:0;
                top:0;
                font-style: italic;
                font-weight: 900;
                font-size: 52px;
                line-height: 90px;
                display: flex;
                align-items: center;
                text-align: center;
                letter-spacing: 0.08em;
                text-transform: uppercase;
                color: rgba(0, 0, 0, 0.15);
                text-shadow: 0px 0px 4px rgb(0 0 0 / 15%);
                overflow: hidden;
            }

            .item__card__book--bg::after{
                content:'';
                width: 166px;
                height: 166px;
                position:absolute;
                left:50%;
                top:50%;
                background: #8BD0FC;
                box-shadow: 0px 0px 4px 20px rgba(139, 208, 252, 0.2), 
                0px 0px 4px 5px rgba(139, 208, 252, 0.5);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                transition: 0.6s;
            }

            .item__card__book--content{
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
            }

            .item__card__book--img{
                margin-top: 72px;
                transition: 0.6s;
            }

            .item__card__book--text{
                display:none;
                position: absolute;
                inset: 100px 8px 0;
                transition: 0.6s;
            }

            .item__card__book--text--name{
                font-weight: 700;
                font-size: 14px;
                text-transform: capitalize;
                color: rgba(31, 30, 34, 0.9);
                display: inline-block;
                margin-bottom: 4px;
            }

            .item__card__book--text--chap{
                font-weight: bold;
                font-size: 12px;
                text-transform: capitalize;
                color: rgba(31, 30, 34, 0.7);
                margin-bottom: 12px;
            }

            .item__card__book--text--intro{
                font-weight: 500;
                font-size: 13px;
                line-height: 15px;
                color: rgba(31, 30, 34, 0.7);
                margin-bottom: 6px;
            }

            .item__card__book--text--author{
                font-weight: 500;
                font-size: 13px;
                line-height: 15px;
                color: rgba(31, 30, 34, 0.7);
                float: right;
            }

            .item__card__book--text--chap > b{
                color: #FF8F5C;
            }

            .item__card__book:hover .item__card__book--text{
                display:block;
                inset: 82px 8px 0;
            }

            .item__card__book:hover .item__card__book--bg::after{
                transform: translateX(-4px) translateY(-158px);
            }
           
            .item__card__book:hover .item__card__book--img{
                scale: 0.7;
                transform: translateX(72px) translateY(-102px);
            }
            `}</style>
            <style jsx global>{`
                .item__card__book .item__card__book--content .anticon-pushpin{
                    position:absolute;
                    font-size: 36px;
                    right: 8px;
                    top: 8px;
                    color: #FF8F5C;
                    z-index:10;
                    cursor: pointer;
                }

                .item__card__book .item__card__book--content .item__card__book--btn{
                    width: 92px;
                    height: 32px;
                    background: #8BD0FC;
                    border-radius: 20px;
                    border: none;
                    position: absolute;
                    top: 240px;
                    font-weight: 700;
                    font-size: 12px;
                    text-transform: uppercase;
                    color: #FFFFFF;
                }
            `}</style>
        </div>
    )
}