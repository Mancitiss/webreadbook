import { Row, Col, Rate } from "antd";
import Image from "next/image";
// import Book1 from '../../assets/images/baner-book1.png'
const { TextArea } = Input;
import { EditFilled } from "@ant-design/icons";
import TextHeading from "../common/TextHeading";
import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Button, InputNumber } from 'antd';
import { useState, useRef, useEffect } from 'react';
import { PlusCircleOutlined } from "@ant-design/icons";
const { Option } = Select;

let index = 0;

export default function EditBookContent() {
    const mainContent = ""
    const onChange = (e) => {
        console.log(e);
      };
    
    const [items, setItems] = useState(['jack', 'lucy']);
    const [name, setName] = useState('');
    const [imgBook, setImgBook] = useState('')
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
    const updateImage=(e)=>{
        // console.log(e.target.files[0]);
        const img= URL.createObjectURL(e.target.files[0])
        console.log(img);
        setImgBook(img)
    }

    return (
        <div>
            <div className="component__detail__edit">
                <Row>
                    <Col lg={8}  sm={12} xs={24}>
                        <input type={'file'} style={{display:'none'}} id='update__baner__book' onChange={updateImage}/>
                        {
                            imgBook ? (
                                <div className="component__detail__edit__img">
                                    <Image src={imgBook} layout='fill' alt='hinh bia sach'  height={310}/>
                                    <label htmlFor="update__baner__book"><div  className="component__detail__edit__content--icon icon__edit" >
                                        <EditFilled />
                                    </div></label>
                                </div>

                            ):(
                                <div>
                                    <label htmlFor="update__baner__book"><div className="upload__img__book">
                                        <PlusCircleOutlined />
                                    </div></label>
                                </div>
                            )
                        }
                        <div className="component__detail__edit__info">
                            <Row>
                                <Col span={24}>
                                    <div className="component__detail__edit__information">
                                        <div className="input__name__book">
                                            <p className="title__input__name">Name book :</p>
                                            <Input className="input__name__book--input" placeholder="Your book name" />
                                            <span className="title__input__name">Chap estimate :</span>
                                            <InputNumber className="input__number__chap" min={1} max={999} defaultValue={1} bordered={false} />
                                        </div>
                                        
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={16}  sm={12} xs={24}>
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

                .component__detail__edit__img,
                .upload__img__book{
                    width: 90%;
                    height: 310px;
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
                    margin:0 auto 20px;
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
                
                .input__name__book{
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 24px;
                    color: #1f1e22;
                    text-align: left;
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

                .upload__img__book{
                    background: #FFFFFF;
                    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25), 2px 2px 6px rgba(0, 0, 0, 0.25);
                    border-radius: 5px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 186px;
                    color: #FCE76C;
                    cursor: pointer;
                }

                @media  (max-width: 992px)and (min-width:577px){

                }
                @media  (max-width: 576px){

                    .component__detail__edit__content,
                    .component__detail__edit--choosechap{
                        width:100%
                    }
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

                .component__detail__edit  .input__name__book--input{
                    height: 48px;
                    background: #fff;
                    -webkit-box-shadow: 0px 0px 4px 1px rgb(0 0 0 / 25%), inset 1px 2px 4px rgb(0 0 0 / 25%);
                    -moz-box-shadow: 0px 0px 4px 1px rgb(0 0 0/25%),inset 1px 2px 4px rgb(0 0 0/25%);
                    box-shadow: 0px 0px 4px 1px rgb(0 0 0 / 25%), inset 1px 2px 4px rgb(0 0 0 / 25%);
                    -webkit-border-radius: 10px;
                    -moz-border-radius: 10px;
                    border-radius: 10px;
                    border: none;
                    font-size: 14px;
                    font-weight: 530;
                    margin-bottom: 16px;
                }

                .component__detail__edit .input__number__chap{
                    margin: 0 16px;
                    font-size: 20px;
                    color: #ff8f5c;
                }
                
                .component__detail__edit .input__number__chap input{
                    font-weight: bolder;

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