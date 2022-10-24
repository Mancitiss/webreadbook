import { Row, Col, Button, Tabs } from 'antd';
import Card from '../items/Card';

export default function TabBook(){
    return(
        <div>
            <div className='tab__book__profile'>
                <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab="Your books" key="1">
                        <div>
                            <Row gutter={16}>
                                <Col flex={2} sm={8} xs={12}>
                                    <Card index={16}></Card>
                                </Col>
                                <Col flex={2} sm={8} xs={12}>
                                    <Card index={17}></Card>
                                </Col>
                                <Col flex={2} sm={8} xs={12}>
                                    <Card index={18}></Card>
                                </Col>
                                <Col flex={2} sm={8} xs={12}>
                                    <Card index={4}></Card>
                                </Col>
                                <Col flex={2} sm={8} xs={12}>
                                    <Card index={5}></Card>
                                </Col>
                            </Row>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Saved" key="2">
                        <div>
                            <Row gutter={16}>
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
                            <Row gutter={16}>
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