import Main from "../../layouts/Main";
import { Row, Col, Carousel, Layout } from "antd";
import TextHeading from "../../component/common/TextHeading";
import { LeftCircleFilled, RightCircleFilled, ReadOutlined } from '@ant-design/icons';
import Image from "next/image";
import Card from "../../component/items/Card";
import React, { useEffect, useState } from 'react';
import NotFound from '../../assets/images/not_found.jpg'
export default function Search() {
    const search ='co'
    return (
        <div>
            <Main>
                <div className="category__silder">
                    <Row style={{padding: '42px 0 0 16px'}}>
                        <TextHeading>Search Results:</TextHeading>
                        <span className="txt__search">"{search}"</span>
                    </Row>
                    <div className="category__list__book">
                        {
                            search ?(
                            <Row>
                            <Col lg={4} sm={6} xs={12}>
                                <Card index={1} />
                            </Col>
                            <Col lg={4} sm={6} xs={12}>
                                <Card index={2} />
                            </Col>
                            <Col lg={4} sm={6} xs={12}>
                                <Card index={3} />
                            </Col>
                            <Col lg={4} sm={6} xs={12}>
                                <Card index={4} />
                            </Col>
                        </Row>
                            ):(
                                <div className="not__found">
                                    <Image src={NotFound} alt='not found' objectFit="cover"/>
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            </Main>

            <style jsx>{`
                .category__silder{
                    max-width:95%;
                    margin:86px auto 24px;
                }

                .category__list__book{
                    margin:32px 6px;
                }
                .txt__search{
                    font-size: 24px;
                    font-weight: 500;
                    line-height: 64px;
                    margin: 0 24px;
                    color: #FF8F5C;
                    text-transform: capitalize;
                }
                .not__found{
                    width: 100%;
                    min-height: 300px;
                    text-align: center;
                }
            `}</style>
        </div>
    )
}