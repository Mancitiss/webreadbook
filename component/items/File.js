import { StarFilled, RightCircleFilled } from "@ant-design/icons"
import Book1 from "../../assets/images/book-card-1.png"
import Image from "next/image"
import React, { useEffect, useState } from 'react';

export default function File({index, name}){
    function setCata(){
        localStorage.setItem("id_cata_cho", index)
    }
    return(
        <div onClick={setCata}>
            <input type={'radio'} id={`check__category__${index}`} className='chose__catergory'  name='checkbox__category' />
            <label htmlFor={`check__category__${index}`}>
                <div className="file__item" id={`item__category__${index}`}>
                <div className="file__item__bg"></div>
                <div className="file__item__content">
                    <StarFilled className="icon__star__file" />
                    <h5 className="file__item__content--namefile">{name}</h5>
                    <div className="file__item__content--listimg">
                        <Image src={Book1} alt="anh sach" className="file__item__content--img" height={40} width={30} />
                        <Image src={Book1} alt="anh sach" className="file__item__content--img" height={40} width={30} />
                        <Image src={Book1} alt="anh sach" className="file__item__content--img" height={40} width={30} />
                        <Image src={Book1} alt="anh sach" className="file__item__content--img" height={40} width={30} />
                    </div>
                    {/* <span className="file__item__content--detail">Lorem ipsum </span> */}
                    <RightCircleFilled className="icon__detail__file" />
                </div>
            </div></label>

            <style jsx>{`
                .file__item{
                    position:relative;
                    width: 169px;
                    height: 114px;
                    margin:4px 6px;
                }

                .file__item__bg{
                    position:absolute;
                    height:100%;
                    width:100%;
                    top:0;
                    left:0;
                }

                .file__item__bg::before{  

                    background: #8BD0FC;
                    content:'';
                    position: absolute;
                    left:0;
                    top:0;
                    width: 90.24px;
                    height: 17.47px;
                    border-radius: 10px 100px 0px 0px;
                }
                .file__item__bg::after{
                    background: #8BD0FC;
                    content:'';
                    position: absolute;
                    left:0;
                    bottom:0;
                    width: 169px;
                    height: 97px;
                    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
                    border-radius: 0px 10px 10px 10px;
                }

                .chose__catergory{
                    display: none;
                }

                .chose__catergory:checked +label .file__item,
                .file__item:hover{
                    transform: translateY(-6px);
                    transition: 0.5s;
                    cursor: pointer;
                }

                .chose__catergory:checked +label .file__item .file__item__bg::before,
                .chose__catergory:checked +label .file__item .file__item__bg::after,
                .file__item:hover .file__item__bg::before,
                .file__item:hover .file__item__bg::after{
                    background: #FCE76C;
                    cursor: pointer;
                }

                .file__item__content{
                    position: relative;
                }

                .file__item__content--namefile{
                    font-weight: 500;
                    font-size: 14px;
                    color: #FFFFFF;
                    padding: 18px 16px;
                }

                .file__item__content--listimg{
                    position: absolute;
                    top: 42px;
                    left: 14px;
                    display: flex;

                }

                .file__item__content--detail{
                    font-weight: 500;
                    font-size: 12px;
                    color: #FFFFFF;
                    position: relative;
                    margin: 25px 16px 0 16px;
                    display: inline-block;
                }

            `}</style>
            <style jsx global>{`
            .file__item .file__item__content .icon__star__file{
                position: absolute;
                top: 24px;
                right: 8px;
                background: rgba(0, 156, 255, 0.8);
                border-radius: 3px;
                height: 20px;
                width: 20px;
                font-size: 16px;
                color: #8BD0FC;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .chose__catergory:checked +label .file__item .file__item__content .icon__star__file,
            .file__item:hover .file__item__content .icon__star__file{
                background: rgba(255, 218, 0, 0.8);
                color: #FCE76C;
            }

            .file__item .file__item__content .icon__detail__file{
                font-size: 16px;
                margin: 3px 0;
                display: inline-block;
                color: rgba(31, 30, 34, 0.3);
            }
            `}</style>
        </div>
    )
}