import { Row, Col, Button, Tabs } from 'antd';
import Card from '../items/Card';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import axios from "axios";
export default function TabBook() {
    const name = "book1"
    const [myStory, setMyStory] = useState([]);
    const [mySave, setMySave] = useState([]);
    async function getMyStory() {
        var data_new = []
        var us = localStorage.getItem("id")
        var us_temp = false
        let res = await axios.get("http://127.0.0.1:8000/api/my-book/" + localStorage.getItem("id") + "/")
            .then(
                response => {
                    let data = response.data
                    for (let temp of data) {
                        if (us == temp.user) {
                            us_temp = true
                        } else {
                            us_temp = false
                        }

                        let ob =
                        {
                            id: temp.id,
                            story_name: temp.story_name,
                            image: temp.image,
                            total_chapters: temp.total_chapters,
                            introduce: temp.introduce,
                            user: us_temp
                        }
                        data_new.push(ob)
                    };
                    setMyStory(data_new)

                }
            )
            .catch(
                error => console.log(error)
            );

    }
    async function getMySave() {
        var data_new = []
        var us = localStorage.getItem("id")
        var us_temp = false
        let res = await axios.get("http://127.0.0.1:8000/api/my-save/" + localStorage.getItem("id") + "/")
            .then(
                response => {
                    let data = response.data
                    for (let temp of data) {
                        if (us == temp.user) {
                            us_temp = true
                        } else {
                            us_temp = false
                        }

                        let ob =
                        {
                            id: temp.id,
                            story_name: temp.story_name,
                            image: temp.image,
                            total_chapters: temp.total_chapters,
                            introduce: temp.introduce,
                            user: us_temp
                        }
                        data_new.push(ob)
                    };
                    setMySave(data_new)

                }
            )
            .catch(
                error => console.log(error)
            );

    }

    useEffect(() => {
        getMyStory()
        getMySave()
    })

    const router = useRouter()

    return (
        <div>
            <div className='tab__book__profile'>
                <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab="Your books" key="1">
                        <div>
                            <Row justify="start" gutter={16}>
                                {
                                    myStory.map((myStory) => {
                                        return (
                                            <Card index={myStory.id} story_name={myStory.story_name} image={myStory.image} total_chapters={myStory.total_chapters} introduce={myStory.introduce} owner={myStory.user} />)
                                    })
                                }
                                <Col flex={2} sm={8} xs={12}>
                                    <div className='create__book--item' onClick={() => router.push(`books/create/${name}`)}>
                                        <PlusCircleOutlined />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Saved" key="2">
                        <div>
                            <Row justify="start" gutter={16}>
                            {
                                    mySave.map((mySave) => {
                                        return (
                                            <Card index={mySave.id} story_name={mySave.story_name} image={mySave.image} total_chapters={mySave.total_chapters} introduce={mySave.introduce} owner={mySave.user} />)
                                    })
                                }
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