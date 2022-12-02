import { Row, Col, Button, Tabs } from 'antd';
import Card from '../items/Card';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';

export default function TabBook(){
    const name="book1"
    const router= useRouter()
    return(
        <div>
            <div className='tab__book__profile'>
                <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab="Your books" key="1">
                        <div>
                            <Row justify="start" gutter={16}>
                                <Col flex={2} sm={8} xs={12}>
                                    <Card index={16} owner={true}></Card>
                                </Col>
                                <Col flex={2} sm={8} xs={12}>
                                    <Card index={17} owner={true}></Card>
                                </Col>
                                <Col flex={2} sm={8} xs={12}>
                                    <Card index={18} owner={true}></Card>
                                </Col>
                                <Col flex={2} sm={8} xs={12}>
                                    <Card index={4} owner={true}></Card>
                                </Col>
                                <Col flex={2} sm={8} xs={12}>
                                    <Card index={5} owner={true}></Card>
                                </Col>
                                <Col flex={2} sm={8} xs={12}>
                                    <div className='create__book--item' onClick={()=>router.push(`books/create/${name}`)}>
                                        <PlusCircleOutlined />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Saved" key="2">
                        <div>
                            <Row justify="start" gutter={16}>
                                <Col flex={2} sm={8} xs={12}>
                                    <Card index={6}></Card>
                                </Col>
                                <Col flex={2} sm={8} xs={12}>
                                    <Card index={7}></Card>
                                </Col>
                                <Col flex={2} sm={8} xs={12}>
                                    <Card index={8}></Card>
                                </Col>
                            </Row>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="History" key="3">
                        <div>
                            <Row justify="start" gutter={16}>
                                <Col flex={2} sm={8} xs={12}>
                                    <Card index={9}></Card>
                                </Col>
                                <Col flex={2} sm={8} xs={12}>
                                    <Card index={2}></Card>
                                </Col>
                                <Col flex={2} sm={8} xs={12}>
                                    <Card index={10}></Card>
                                </Col>
                                <Col flex={2} sm={8} xs={12}>
                                    <Card index={11}></Card>
                                </Col>
                                <Col flex={2} sm={8} xs={12}>
                                    <Card index={12}></Card>
                                </Col>
                                <Col flex={2} sm={8} xs={12}>
                                    <Card index={13}></Card>
                                </Col>
                            </Row>
                        </div>
                    </Tabs.TabPane>
                </Tabs>
            </div>
            <style jsx>{`
                .create__book--item{
                    width: 200px;
                    height: 287px;
                    box-shadow: 0px 0px 4px 2px rgb(0 0 0 / 25%), 2px 2px 6px rgb(0 0 0 / 25%);
                    border-radius: 5px;
                    position: relative;
                    margin: 12px 6px;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 100px;
                    color: #FCE76C;
                }

                @media  (max-width: 576px){
                    .create__book--item{
                        width: 135px;
                        height: 198px;
                        margin: 6px;
                    }
                }
            `}</style>

            <style jsx global>{`
                .tab__book__profile .ant-tabs-nav-list{
                    margin-left: 50%;
                    transform: translateX(-50%) !important;
                }

                .tab__book__profile .ant-tabs-tab {
                    font-weight: 600;
                    font-size: 20px;
                }

                .tab__book__profile .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
                    color:#FF8F5C;
                    text-shadow: 0 0 0.25px #ff8f5c;
                }
                
                .tab__book__profile::selection,
                .tab__book__profile .ant-tabs-top::selection,
                .tab__book__profile .ant-tabs-nav::selection,
                .tab__book__profile .ant-tabs-nav-wrap::selection,
                .tab__book__profile .ant-tabs-nav-list::selection,
                .tab__book__profile .ant-tabs-tab.ant-tabs-tab-active::selection,
                .tab__book__profile .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn::selection{
                    background: #ff8f5c !important;
                }
            `}</style>
        </div>
    )
}