import { Row, Col, Rate } from "antd";
import Image from "next/image";
import Book1 from '../../assets/images/baner-book1.png'
const { TextArea } = Input;
import { EditFilled } from "@ant-design/icons";
import TextHeading from "../common/TextHeading";
import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Button } from 'antd';
import { useState, useRef, useEffect } from 'react';

const { Option } = Select;

let index = 0;

export default function EditBookContent() {
    const mainContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus."
    const onChange = (e) => {
        console.log(e);
      };
    
    const [items, setItems] = useState(['jack', 'lucy']);
    const [name, setName] = useState('');
    // const inputRef = useRef(null);
    const onNameChange = (event) => {
    setName(event.target.value);
    };
    const addItem = (e) => {
        e.preventDefault();
        setItems([...items, name || `New item ${index++}`]);
        setName('');
        // setTimeout(() => {
        //   inputRef.current?.focus();
        // }, 0);
    };
    const [attribute, setAtrribute]= useState(true)
    useEffect(()=>{

        const textArea = document.querySelector('.component__detail__edit__content--detail')
        if(attribute === false){
            textArea.removeAttribute('readOnly')
        }
    },[attribute])

    return (
        <div>
            <div className="component__detail__edit">
                <Row>
                    <Col span={8}>
                        <div className="component__detail__edit__img">
                            <Image src={Book1} layout='fixed' alt='hinh bia sach' />
                            <div className="component__detail__edit__content--icon icon__edit" >
                                <EditFilled />
                            </div>
                        </div>
                        <div className="component__detail__edit__info">
                            <Row>
                                <Col span={24}>
                                    <div className="component__detail__edit__information">
                                        <h1 className="component__detail__edit__information--name">Love story Vault</h1>
                                        <Rate className="component__detail__edit__information--rate" allowHalf defaultValue={4.5} disabled />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span={16}>
                        <div className="component__detail__edit__content">
                            <h3 className="component__detail__edit__content--title">Main content</h3>
                            <span className="component__detail__edit__content--icon" onClick={()=>{setAtrribute(false)}} >
                                <EditFilled />
                            </span>
                            <TextArea onClick={()=>{setAtrribute(false)}} className="component__detail__edit__content--detail" defaultValue={mainContent} allowClear readOnly onChange={onChange} />
                        </div>
                    </Col>
                    <Col span={24}>
                        <Row>
                            <Col span={24}>
                                <div className="component__detail__edit--addchap">
                                    <TextHeading>Edit & add chap</TextHeading>
                                </div>
                            </Col>
                        </Row>
                        <div className="component__detail__edit--choosechap">
                            <h3 className="component__detail__edit__content--title" style={{display: 'block'}}>Name chap</h3>
                            <Select
                            className=" select__chap__edit"
                            placeholder="Add your chap name"
                            popupClassName='select__chap__edit--dropdown'
                            dropdownRender={(menu) => (
                                <>
                                {menu}
                                    <Input
                                    placeholder="Please enter item"
                                    // ref={inputRef}
                                    value={name}
                                    onChange={onNameChange}
                                    />
                                    <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                                    Add item
                                    </Button>
                                </>
                            )}
                            >
                            {items.map((item) => (
                                <Option key={item}>{item}</Option>
                                ))}
                            </Select>

                            <h3 className="component__detail__edit__content--title" style={{display: 'block'}}>Content</h3>
                            <TextArea className="component__detail__edit__content--detail component__detail__edit__content--content"  allowClear onChange={onChange} />
                        </div>
                        <div className="component__detail__edit__content--btn">
                            <Button className="btn__cancel__edit">Cancel</Button>
                            <Button className="btn__save__edit">Save</Button>
                        </div>
                    </Col>
                </Row>
            </div>

            <style jsx>{`
                .component__detail__edit{
                    padding: 12px 8px;
                    position:relative;
                }

                .component__detail__edit__img{
                    width: 90%;
                    max-width: 310px;
                    overflow: hidden;
                    margin: 0 auto 12px;
                    position:relative;
                }

                .component__detail__edit__content{
                    font-weight: 550;
                    font-size: 14px;
                    line-height: 18px;
                    color: rgba(31, 30, 34, 0.7);
                    width:90%;
                    margin:0 auto 12px;
                }


                .component__detail__edit__information{
                    text-align: center;
                    font-weight: bolder;
                    font-size: 32px;
                    color: #1F1E22;
                    margin: 6px 0 12px;
                }

                .component__detail__edit__information--name{
                    margin:0;
                }

                .component__detail__edit__content{
                    width:90%;
                    margin:0 auto 20px;
                }

                .component__detail__edit__content--title{
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 24px;
                    color: #1F1E22;
                    position:relative;
                    display: inline-block;
                    margin:12px 24px 4px 4px;
                }

                .component__detail__edit__content--icon{
                    font-size: 24px;
                    color: #FF8F5C;
                    height: 24px;
                    width: 24px;
                    cursor: pointer;
                }
                
                .icon__edit{
                    position: absolute;
                    bottom: 16px;
                    right: 12px;
                }

                .component__detail__edit--addchap{
                    float: left;
                    margin: 16px;
                }
                
                .component__detail__edit--choosechap{
                    width: 90%;
                    margin: 16px auto;
                }

                .component__detail__edit__content--btn{
                    display:flex;
                    width: 90%;
                    justify-content: flex-end;
                }
            `}</style>

            <style jsx global>{`
                .component__detail__edit .component__detail__edit__information .component__detail__edit__information--rate{
                    font-size:20px
                }

                .component__detail__edit .component__detail__edit__content--detail{
                    font-weight: 550;
                    font-size: 14px;
                    color: rgba(31, 30, 34, 0.7);
                    height: 360px !important;
                    width:100%;
                    overflow-y: scroll;
                    letter-spacing: 0.05em;
                    margin:6px 0 12px;
                    padding:12px;
                    background: #FFFFFF;
                    box-shadow: 0px 0px 4px 1px rgb(0 0 0 / 25%), inset 5px 5px 10px rgb(0 0 0 / 25%);
                    border-radius: 10px;
                    border: none;
                }

                .component__detail__edit--choosechap .component__detail__edit__content--content{
                    width: 90%;
                    height: 300px !important;
                }

                .component__detail__edit .ant-input-affix-wrapper:focus, 
                .component__detail__edit  .ant-input-affix-wrapper-focused{
                    box-shadow: unset;
                    border-radius: 10px;
                    border: none !important;
                }

                .component__detail__edit .select__chap__edit{
                    height: 48px;
                    width: 90%;
                }

                .component__detail__edit .select__chap__edit > .ant-select-selector{
                    height: 48px;
                    background: #FFFFFF;
                    box-shadow: 0px 0px 4px 1px rgb(0 0 0 / 25%), inset 1px 2px 4px rgb(0 0 0 / 25%);
                    border-radius: 10px;
                    border: none;
                }

                .component__detail__edit .select__chap__edit .ant-select-selection-item{
                    line-height: 48px;
                    font-size: 18px;
                    font-weight: 530;
                    text-transform: capitalize;
                }

                .component__detail__edit .ant-select-single .ant-select-selector .ant-select-selection-placeholder,
                .component__detail__edit .ant-select-selection-search-input{
                    line-height: 48px;
                    text-transform: capitalize;
                    font-size:14px;
                    height:48px !important;
                }

                .select__chap__edit--dropdown .ant-select-item-option{
                    padding: 4px 24px;
                    font-weight: 530;
                    text-transform: capitalize;
                    font-size: 16px;
                }

                .select__chap__edit--dropdown .ant-input{
                    width: 70%;
                    margin: 4px 16px;
                    height: 42px;
                    border-radius: 15px;
                    font-size: 16px;
                    font-weight: 530;
                }

                .select__chap__edit--dropdown  .ant-btn-text{
                    height: 42px;
                    width: 20%;
                    min-width:92px;
                    border: 1px solid #8BD0FC;
                    border-radius: 15px;
                    font-size: 16px;
                    font-weight: 600;
                    color: #8BD0FC;
                }

                .component__detail__edit--choosechap .ant-select-suffix{
                    font-size: 20px;
                    color: #FF8F5C;
                }

                .component__detail__edit .component__detail__edit__content--btn .btn__cancel__edit,
                .component__detail__edit .component__detail__edit__content--btn .btn__save__edit{
                    height: 36px;
                    width: 113px;
                    background: #FFFFFF;
                    border: 1px solid #E75C62;
                    box-shadow: 2px 4px 4px rgb(0 0 0 / 25%);
                    border-radius: 20px;
                    font-weight: 700;
                    font-size: 16px;
                    color: #E75C62;
                    margin: 12px 24px;
                }

                .component__detail__edit .component__detail__edit__content--btn .btn__save__edit{
                    background: #8BD0FC;
                    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
                    border-radius: 20px;
                    color:#fff;
                    border:none;
                }   
            `}</style>
        </div>
    )
}